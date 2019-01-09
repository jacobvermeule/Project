# Jacob Vermeule 11328622
# Minor Programmeren Y2018
# University of Amsterdam

import csv
import json


# Open the CSV
f = open('code/data/vegetables.csv', 'r')

# Change column names
reader = csv.DictReader(f, fieldnames = ("Vegetables", "Temperature (C)", "Precipitation (mm)", "Days", "Soil (pH)", "Yield (kg/m3)"
))

# Parse the CSV into JSON
out = json.dumps([row for row in reader])

# Save the JSON
f = open('code/data/vegetables.json', 'w')
f.write(out)
