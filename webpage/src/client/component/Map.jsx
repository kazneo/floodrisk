import React, { useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // Make sure to install mapbox-gl using npm or yarn

const Map = () => {
  const mapContainerRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const center = [-91.318359, 30.690782];
  const zoom = 4.5;

  async function getData(lat, lon, startDate, endDate) {
    // ...
  }

  // ... other variables and functions from the original code ...

  // Initialize the map when the component mounts
  React.useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: center,
      zoom: zoom,
    });

    // Add the existing code for adding sources, layers, and event listeners to the map

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="map-container" style={{ height: '500px' }} />;
};

export default MyMapComponent;