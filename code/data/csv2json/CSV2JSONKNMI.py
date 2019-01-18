# Jacob Vermeule 11328622
# Minor Programmeren Y2018
# University of Amsterdam

import csv
import json


# Open the CSV
f = open('code/data/csvs/weer.csv', 'r')

# Change column names
reader = csv.DictReader(f, fieldnames = ("Jaar","DeKooy","Eelde","DeBilt","Vlissingen","Maastricht","DeKooymm","Eeldemm","DeBiltmm","Vlissingenmm","Maastrichtmm"))

# Parse the CSV into JSON
out = json.dumps([row for row in reader])

# Save the JSON
f = open('code/data/jsons/weer.json', 'w')
f.write(out)
