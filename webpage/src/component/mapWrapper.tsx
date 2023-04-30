import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { getMap } from './map';

// interface MapBoxWrapperProps {
//   hidden: boolean;
// }

export const MapBoxWrapper = function ( { hidden } ) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    map.current = getMap(mapContainer);
  }, []);

  useEffect(() => {
    map.current?.resize();
  }, []);
  return (
    <div className='map-container'  hidden={hidden}>
      <div ref={mapContainer} className='map' />
    </div>
  );
};
