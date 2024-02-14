import pandas as pd
import geojson
import random
import json

# Read CSV file
df = pd.read_csv('infra_data.csv')

# Create an empty list for features
features = []

# Iterate through each row in the dataframe
for i, row in df.iterrows():
    # Create a new feature
    feature = geojson.Feature(geometry=geojson.Point((row['LONGITUDE'], row['LATITUDE'])),
                              properties={
                                  'NAME': row['NAME'],
                                  'CATEGORY': row['CATEGORY'],
                                  'STATE': row['STATE'],
                                  'Elevation': row['Elevation'],
                                  'LC_Type2': row['LC_Type2'],
                                  'FLD_ELEV': row['FLD_ELEV'],
                                  'FLD_ZONE': row['FLD_ZONE'],
                                  'CFLD_RISKS': row['CFLD_RISKS'],
                                  'RFLD_RISKS': row['RFLD_RISKS'],
                                  'HRCN_RISKS': row['HRCN_RISKS'],
                                  'floodedFrac': random.uniform(0, 1)
                              })
    # Append the feature to the list
    features.append(feature)

# Create a FeatureCollection and add the features
fc = geojson.FeatureCollection(features)

# Save the FeatureCollection to a JSON file
with open('floodedFrac.json', 'w') as f:
    json.dump(fc, f)