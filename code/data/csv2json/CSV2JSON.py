# Jacob Vermeule 11328622
# Minor Programmeren Y2018
# University of Amsterdam

import csv
import json


# Open the CSV
f = open('code/data/landuse.csv', 'r')

# Change column names
reader = csv.DictReader(f, fieldnames = ("Regio's", "Perioden", "Totale oppervlakte (ha)", "Agrarisch terrein (ha)"
))

# Parse the CSV into JSON
out = json.dumps([row for row in reader])

# Save the JSON
f = open('code/data/landuse.json', 'w')
f.write(out)
