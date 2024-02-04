// const { application } = require('express');
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

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
app.get('/nasaData', async (req, res) => {
    try {
        const response = await axios.get(`${NASA_API_ENDPOINT}?parameters=${NASA_API_PARAMS}&community=${NASA_API_COMMUNITY}&longitude=${req.query.longitude}&latitude=${req.query.latitude}&start=${startDate}&end=${endDate}&format=JSON`);
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

app.get('/riskIndex', (req, res) => {
    try {
        const pythonProcess = spawn('python', ['model.py', '1.0', '2.0', '3.0', '4.0']);
        let output = '';
        pythonProcess.stdout.on('data', (data) => {
            output += data.toString();
        });
      
        pythonProcess.stdout.on('end', () => {
            res.send(output);
        });
  
        pythonProcess.on('error', (error) => {
            console.error(error);
            res.status(500).send(error.message);
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
	console.log('Listening on localhost:3000');
})