import pickle
import sys

# load model
model = pickle.load(open('xgboost.model', 'rb'))

data = sys.argv[1:]

# Perform prediction using input data
result = model.predict(data)

print(result)
