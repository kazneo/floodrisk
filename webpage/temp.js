import * as fs from 'fs';
import { parse } from 'csv-parse';
import fetch from 'node-fetch';


const getNextRequest = function* (data) {
  for (let i = 0; i < data.length; i++) {
    yield data[i];
  }
  console.log(data)
};

const NASA_API_PARAMS = [
    'T2M',          // Temperature at 2 Meters (Degrees Celculs)
    'PS',           // Surface Pressure (kPa)
    'WS2M',         // Wind Speed at 2 Meters (m/s)
    'WS10M',        // Wind Speed at 10 Meters (m/s)
    'PRECTOTCORR',  // Precipitation Corrected (mm/day)
    'QV2M',         // Specific Humidity at 2 Meters (g/kg)
    'TS',           // Earth Skin Temperature (Degrees Celculs)
    'GWETTOP',      // Surface Soil Wetness (Unit: 1)   [Surface to 10cm]
    'GWETROOT',     // Root Zone Soil Wetness (Unit: 1) [Surface to 100cm]
    'GWETPROF',     // Profile Soil Moisture (Units: 1) [Surface to Bedrock]
    // 'PEVAP',        // Evapotranspiration
    // 'Streamflow',   // Streamflow 
  ].join(',');

const NASA_API_COMMUNITY = 'AG';
const NASA_API_ENDPOINT = 'https://power.larc.nasa.gov/api/temporal/daily/point';

// const temp = 'parameters=GWETPROF,TS,PS,WS2M,PRECTOTCORR,T2M,QV2M,GWETROOT,GWETTOP&community=AG&longitude=-97.7263&latitude=30.3470&start=20210101&end=20210331&format=JSON'

const currentDateObj = new Date();
const endDateObj = new Date(currentDateObj.getTime() - 2 * 24 * 60 * 60 * 1000); // Current date - 2 days
const startDateObj = new Date(endDateObj.getTime() - 30 * 24 * 60 * 60 * 1000); // End date - 30 days

const formatDate = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to get the correct month (as months start from 0)
  const day = dateObj.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
};

const endDate = formatDate(endDateObj);
const startDate = formatDate(startDateObj);


const predict = function (r, d) {
    if (!r.properties?.parameter) {
      console.error('No data for', d);
      console.error(r);
      return;
    }
    const data = r.properties.parameter;
    const temperature = data.T2M;
    const pressure = data.PS;
    const windSpeed2M = data.WS2M;
    const windSpeed10M = data.WS10M;
    const precipitation = data.PRECTOTCORR;
    const humidity = data.QV2M;
    const soilTemp = data.TS;
    const surfaceSoilMoist = data.GWETTOP;
    const rootSoitMoist = data.GWETROOT;
    const profileSoilMoist = data.GWETPROF;
  
    const inputData = {
        temperature,
        pressure,
        windSpeed2M,
        windSpeed10M,
        precipitation,
        humidity,
        soilTemp,
        surfaceSoilMoist,
        rootSoitMoist,
        profileSoilMoist,
    };
    
    return new Promise((resolve, reject) => {
        exec('python XGBoost.py', { input: JSON.stringify(inputData) }, (err, stdout, stderr) => {
          if (err) {
          console.error(`Error executing Python script: ${err}`);
            reject('Error executing Python script');
            return;
          }

          const predictedValue = parseFloat(stdout.trim());
          if (!isNaN(predictedValue)) {
            console.log('Predicted Value:', predictedValue);
            resolve(predictedValue);
          } else {
            console.error('Invalid predicted value received');
            reject('Invalid predicted value received');
          }
        });
    });
};
  

const transform = async (data) => {
  const requestGenerator = getNextRequest(data);
  const transformed = [];
  let logged = false;
  let done = false;
  const requestInterval = setInterval(() => {
    for (let i = 0; i < 250; ++i) {
      const request = requestGenerator.next();
      const d = request.value;
      if (request.done) {
        done = true;
        clearInterval(requestInterval);
        break;
      }
      fetch(
        `${NASA_API_ENDPOINT}?parameters&community=${NASA_API_COMMUNITY}&longitude=${d.longitude}&latitude=${d.latitude}&=${NASA_API_PARAMS}&start=${startDate}&end${endDate}&format=JSON`,
        { method: 'GET' } // Add this line to specify the HTTP method
      )
        .then((r) => r.json())
        .then((r) => {
          // transformed.push(predict(r, d));
          if (!logged && done) {
            console.log(transformed);
            logged = true;
          }
        });
    }
  }, 60000);
};

const data = [];
let count = 0
fs.createReadStream('infra_data.csv')
.pipe(parse())
.on('data', (d) => {
    const toRow = {
      name: d[0],
      state: d[1],
      city: d[2],
      category: d[3],
      latitude: Number(d[4]),
      longitude: Number(d[5])
    };
    data.push(toRow);
    console.log(count);
    count ++;
})
.on('end', () => {
    data.shift();
    transform(data);
});

console.log(data)