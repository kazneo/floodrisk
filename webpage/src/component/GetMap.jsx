import mapboxgl from 'mapbox-gl';

useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-91.153564, 31.970804],
      zoom: 6,
  });
    // return () => map.remove();
  }, []);