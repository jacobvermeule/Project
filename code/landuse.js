window.onload = function() {


  var nederland = "data/jsons/nederland.json";
  var landuse = "data/jsons/landuse.json";
  var requests = [d3.json(nederland), d3.json(landuse)];


Promise.all(requests).then(function(response) {
var width = window.innerWidth,
height = window.innerHeight,
centered,
clicked_point;
var nederland = response[0];
var landuse = response[1];
var format = d3.format(",");

// Define the div for the tooltip
var tip = d3.tip()
            .attr("class", "d3-tip")
            .offset([-10, 0])
            .html(function(d) {
                    return "<strong>Gemeente: </strong><span class='details'>" + d.properties.GM_NAAM + "<br></span>" + "<strong>Percentage: </strong><span class='details'>" + format(d.Percentage) +"</span>";
                  });

// determine color scale
  var color = d3.scaleThreshold()
      .domain([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1])
      .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);

  var projection = d3.geoMercator()
      .scale(width * 10)
      .center([13, 52])
      .translate([width/0.55, height/1])

  var svg = d3.select("#map").append("svg")
      .attr("width", width)
      .attr("height", 1150)
      .attr("class", "map");

  var path = d3.geoPath()
      .projection(projection);

  svg.call(tip);

  ready(nederland, landuse)
  function ready(nederland, landuse) {
  var IndexbyGem = {};
  var IndexbyGem2 = {};
  var IndexbyGem3 = {};
  landuse.forEach(function(d) { IndexbyGem[d.Regio] = +d.Agrarisch_terrein_ha; });
  nederland.objects.Gemeentegrenzen.geometries.forEach(function(d) { d.Agrarisch_terrein_ha = IndexbyGem[d.properties.GM_NAAM] });
  landuse.forEach(function(d) { IndexbyGem2[d.Regio] = +d.Totale_oppervlakte_ha; });
  nederland.objects.Gemeentegrenzen.geometries.forEach(function(d) { d.Totale_oppervlakte_ha = IndexbyGem2[d.properties.GM_NAAM] });
  landuse.forEach(function(d) { IndexbyGem3[d.Regio] = +(d.Agrarisch_terrein_ha/d.Totale_oppervlakte_ha); });
  nederland.objects.Gemeentegrenzen.geometries.forEach(function(d) { d.Percentage = IndexbyGem3[d.properties.GM_NAAM] });

  console.log(nederland)
  console.log(landuse)
  // laad en maak de kaart van Nederland
  svg.append("g")
      .attr("class", "gemeentes")
        .selectAll("path")
        .data(topojson.feature(nederland, nederland.objects.Gemeentegrenzen)
                .features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", function(d) { return color(IndexbyGem3[d.properties.GM_NAAM]);})
        .style('stroke', 'darkgrey')
        .style('stroke-width', 1.5)
        .style("opacity", 0.7)
        //Tooltips
        .style("stroke", "white")
        .style("stroke-width", 0.3)
        // create interaction on map
            .on('mouseover',function(d){
              tip.show(d);

              d3.select(this)
                .style("opacity", 0.9)
                .style("stroke","white")
                .style("stroke-width", 1)
            })
            .on('mouseout',function(d){
              d3.select(this)
                .style("opacity", 0.7)
                .style("stroke","white")
            });



        }


   }).catch(function(e){
     throw(e);
   });



};
