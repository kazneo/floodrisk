const { application } = require('express');
const express = require('express');
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
app.get('/nasaData', (req, res) => {
    fetch(`${NASA_API_ENDPOINT}?parameters&community=${NASA_API_COMMUNITY}&longitude=${req.longitude}&latitude=${req.latitude}&=${NASA_API_PARAMS}&start=${req.startDate}&end${req.endDate}&format=JSON`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.send(data);
        console.log("done");
    })
    .catch(error => {
        console.error(error);
        res.status(500).send(error);
    })
});

app.get('/riskIndex', (req, res) => {
    try{
        const pythonProcess = spawn('python', ['model.py', '1.0', '2.0', '3.0', '4.0']);
        // Collect the output
        let output = '';
        pythonProcess.stdout.on('data', (data) => {
           output += data.toString();
        });
        
        // Send the response
        pythonProcess.stdout.on('end', () => {
            res.send(`Prediction: ${output}`);
        });
        console.log('done')
    } catch {
        console.error(error)
        res.status(500).send(error);
    }
})

app.listen(port, () => {
	console.log('Listening on localhost:3000');
})