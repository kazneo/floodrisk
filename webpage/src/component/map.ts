import React from 'react'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F6bmVvIiwiYSI6ImNsZ2Q0NWYyZDA5dzUzbHBqbnU2cjZlNGMifQ.5NJfdTyPHDpp5WwL1DeHmw';

const center: [number, number] = [-91.318359, 30.690782];
const zoom = 4.5;

export const getMap = function (
  ref: React.RefObject<HTMLDivElement>,
  setSelectedLocation: React.Dispatch<React.SetStateAction<any>>
) {
  const map = new mapboxgl.Map({
    container: ref.current || '',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: center,
    zoom: zoom,
  });

  import('../assets/gz_2010_us_040_00_5m.json').then((USState: any) => {
    map.addSource('us-states', {
      type: 'geojson',
      data: USState,
      generateId: true,
    });

    map.addLayer({
      id: 'us-states',
      type: 'fill',
      source: 'us-states',
      paint: {
        'fill-color': '#8f8f8f',
        'fill-opacity': 0.2,
      },
      filter: ['in', 'NAME', 'Texas', 'Florida', 'Louisiana', 'Mississippi', 'Alabama'],
    });
  });

  import('../assets/risk.json').then((InfraLocation: any) => {
    map.addSource('infra-location', {
      type: 'geojson',
      data: InfraLocation,
      generateId: true,
    });

    map.addLayer({
      id: 'infra-location',
      type: 'circle',
      source: 'infra-location',
      paint: {
        'circle-color': [
          'interpolate',
          ['linear'],
          ['get', 'risk_analysis'],
          0, '#00FF00',
          21.39780032311679, '#FFAA00',
          60.204575017875776, '#FF0000',
        ],
        'circle-radius': 3,
        'circle-stroke-width': 1,
        'circle-stroke-color': 'black',
      },
    });

    map.on('click', 'infra-location', (e) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const properties = feature.properties as { [key: string]: any };

        const clickedLocation = {
          name: properties.name,
          city: properties.city,
          state: properties.state,
          risk_analysis: properties.risk_analysis,
        };

        // Change appearance of clicked location
        map.setFilter('infra-location-clicked', ['==', ['get', 'name'], clickedLocation.name]);

        setSelectedLocation(clickedLocation);
      }
    });

    // Add a new layer for clicked locations with increased size and different color
    map.addLayer({
      id: 'infra-location-clicked',
      type: 'circle',
      source: 'infra-location',
      paint: {
        'circle-color': '#0000FF', // Color for clicked location
        'circle-radius': 6,
        'circle-stroke-width': 1,
        'circle-stroke-color': 'black',
      },
      filter: ['==', ['get', 'name'], ''],
    });
  });

  return map;
};