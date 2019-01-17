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
console.log(nederland)
console.log(landuse)

// Define the div for the tooltip
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

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


  // laad en maak de kaart van Nederland
  svg.append("g")
      .attr("class", "gemeentes")
        .selectAll("path")
        .data(topojson.feature(nederland, nederland.objects.Gemeentegrenzen)
                .features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", "blue")
        .style('stroke', 'darkgrey')
        .style('stroke-width', 1.5)
        .style("opacity", 0.7)
        // create interaction on map
            .on('mouseover',function(d){
              div.transition()
                .duration(200)
                .style("opacity", .9);

              d3.select(this)
                .style("opacity", 0.9)
                .style("fill", "blue")
                .style("stroke","darkgrey")
            })
            .on('mouseout',function(d){
              div.transition()
                .duration(200)
                .style("opacity", 0.7);

              d3.select(this)
                .style("opacity", 0.7)
                .style("fill", "blue")
                .style("stroke","darkgrey")
            })
        .attr("class", function(d, i) {
              return d.properties.name;
          });

          ready(nederland, landuse)
          function ready(nederland, landuse) {
          var IndexbyGem = {};
          landuse.forEach(function(d) { IndexbyGem[d.Regio] = +d.Agrarisch_terrein_ha; });
          nederland.features.forEach(function(d) { d.Agrarisch_terrein_ha = IndexbyGem[d.GM_NAAM] });
          }

   }).catch(function(e){
     throw(e);
   });



};
