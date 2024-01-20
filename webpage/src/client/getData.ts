import axios from 'axios';

async function getData(lat: string, lon: string, startDate: string, endDate: string) {
    try {
        const url = 'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOT&community=RE&longitude='+lat+'&latitude='+lon+'&start={'+ startDate +'}&end='+ endDate + '&format=JSON'
        const response = await axios.get(url);
        console.log(response)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// const apiUrl = 'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOT&community=RE&longitude=-86.64644&latitude=32.532237&start=20220101&end=20221231&format=JSON';

function toYYYYMMDD (dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}${month}${day}`;
  }
  
  function getDate30DaysAgoFromDateString(dateString: string): string {
    const currentDate = new Date(dateString);
    const thirtyDaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
    return toYYYYMMDD(thirtyDaysAgo.toLocaleDateString());
  }
  
  let date = new Date().toLocaleDateString();
  
  const date30 = getDate30DaysAgoFromDateString(date);
  console.log(date30)
  date = toYYYYMMDD(date)