import axios from 'axios';

async function getData(lat: string, lon: string) {
    try {
        const url = 'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOT&community=RE&longitude='+lat+'&latitude='+lon+'&start=20220101&end=20221231&format=JSON'
        const response = await axios.get(url);
        return (response)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// const apiUrl = 'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOT&community=RE&longitude=-86.64644&latitude=32.532237&start=20220101&end=20221231&format=JSON';

