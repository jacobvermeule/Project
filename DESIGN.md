# Project Design
*Jacob Vermeule, Studentnummer: 11328622*

### Data:
## SVG map Nederland:
- De SVG map van alle gemeenten in Nederland zal de hoofdpagina worden van het project. Hier is onderstaande kaart van het Centraal Bureau voor de Statistiek gebruikt.<br/>
[https://upload.wikimedia.org/wikipedia/commons/b/b7/Nederland_gemeenten_2016.svg](https://upload.wikimedia.org/wikipedia/commons/b/b7/Nederland_gemeenten_2016.svg)<br/>

## Agrarisch gebied per gemeente:
- Deze SVG map krijgt een kleurenlegenda op basis van het percentage agricultuurgebied per gemeente. Deze data is beschikbaar via onderstaande link in csv-formaat. Ook komt er een dropdown menu waarin je het gewenste jaar kan kiezen. Deze zal ik voor gebruik omzetten naar JSON.<br/>
[http://statline.cbs.nl/Statweb/publication/?DM=SLNL&PA=70262ned&D1=0,24&D2=0,4,11,52,103-106,110,112-113,115-118,120,123,125,127-128,133-134,137-139,142-143,145-146,148-149,151-152,155,159-162,168-169,171-177,179,181,184-186,190,192-193,195-196,198,201,203,206-207,209-214,216-220,222,224-226,228-229,231,236,241-242,244-245,247-248,250-251,253,255,260-262,264-266,270-272,274-279,281,283-284,287-288,290,293,297-298,300,302-304,306,308,312,315,319-321,324-329,331,334-337,339,342,346-349,351,353,355-356,359-363,365-366,368-369,371-373,376-377,383-385,387-388,391-392,397,399-403,408-420,422,424-427,429-430,432-433,441-443,445-446,448,450-452,461-462,464-465,471-472,474,476,479-482,484-485,489,491,493,495-497,499,501-502,505,507,509,512,518-522,524-526,529-531,534-539,541-544,548,550-551,553-555,558-559,561,563-566,568,570,572,574-575,580-582,584-587,590,594-595,597-598,601-602,605,607-608,614,617-621,626,628-631,633,636-638,640,643-645,649,651-653,656-658,660-661,666-667,669-671,673-678,680,682-687,690,692-698,700-701,703,705-706,709,711,713,716-717,721-725,729,731,733-734,736,738,743-744,746-749,752-753,756,759-760,763-764,766-769,773-779,781,786-788,790,792-794,797-798&D3=a&HDR=T&STB=G1,G2&VW=T](http://statline.cbs.nl/Statweb/publication/?DM=SLNL&PA=70262ned&D1=0,24&D2=0,4,11,52,103-106,110,112-113,115-118,120,123,125,127-128,133-134,137-139,142-143,145-146,148-149,151-152,155,159-162,168-169,171-177,179,181,184-186,190,192-193,195-196,198,201,203,206-207,209-214,216-220,222,224-226,228-229,231,236,241-242,244-245,247-248,250-251,253,255,260-262,264-266,270-272,274-279,281,283-284,287-288,290,293,297-298,300,302-304,306,308,312,315,319-321,324-329,331,334-337,339,342,346-349,351,353,355-356,359-363,365-366,368-369,371-373,376-377,383-385,387-388,391-392,397,399-403,408-420,422,424-427,429-430,432-433,441-443,445-446,448,450-452,461-462,464-465,471-472,474,476,479-482,484-485,489,491,493,495-497,499,501-502,505,507,509,512,518-522,524-526,529-531,534-539,541-544,548,550-551,553-555,558-559,561,563-566,568,570,572,574-575,580-582,584-587,590,594-595,597-598,601-602,605,607-608,614,617-621,626,628-631,633,636-638,640,643-645,649,651-653,656-658,660-661,666-667,669-671,673-678,680,682-687,690,692-698,700-701,703,705-706,709,711,713,716-717,721-725,729,731,733-734,736,738,743-744,746-749,752-753,756,759-760,763-764,766-769,773-779,781,786-788,790,792-794,797-798&D3=a&HDR=T&STB=G1,G2&VW=T)<br/>

## Klimaat van de gemeentes:
- Als geklikt wordt op een van de gemeentes komen twee (of misschien twee in één) grafiek/grafieken in beeld. Een van de temperatuur sinds 2000 en een van de regenval sinds 2000. Data hiervoor is afkomstig van de KNMI. Deze data is helaas niet per gemeente beschikbaar maar per weerstation. Ik dacht hiervoor als oplossing de gemeente te linken aan het dichtstbijzijnde verkeerstation.<br/>
[http://projects.knmi.nl/klimatologie/daggegevens/selectie.cgi](http://projects.knmi.nl/klimatologie/daggegevens/selectie.cgi)<br/>

- Eigen csv bestandje voor optimale groententeelt:<br/>
[http://www.fao.org/potato-2008/en/potato/cultivation.html](http://www.fao.org/potato-2008/en/potato/cultivation.html
)<br/>
[http://www.fao.org/land-water/databases-and-software/crop-information/tomato/en/
](http://www.fao.org/land-water/databases-and-software/crop-information/tomato/en/
)<br/>
[http://www.fao.org/land-water/databases-and-software/crop-information/maize/en/
](http://www.fao.org/land-water/databases-and-software/crop-information/maize/en/
)<br/>
[http://www.fao.org/land-water/databases-and-software/crop-information/maize/en/
](http://www.fao.org/land-water/databases-and-software/crop-information/maize/en/
)<br/>
