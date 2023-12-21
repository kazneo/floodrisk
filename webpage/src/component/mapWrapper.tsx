import React, { useEffect, useRef, useState } from 'react';
import { getMap } from './map';
import Sidebar from './Sidebar';

interface MapBoxWrapperProps {
  hidden: boolean;
}

export const MapBoxWrapper: React.FC<MapBoxWrapperProps> = ({ hidden }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  useEffect(() => {
    if (map.current) return;
    map.current = getMap(mapContainer, setSelectedLocation);
  }, []);

  useEffect(() => {
    map.current?.resize();
  }, [hidden]);

  return (
    <div className='map-container' style={{ display: hidden ? 'none' : 'block' }}>
      <Sidebar selectedLocation={selectedLocation} />
      <div ref={mapContainer} className='map' />
    </div>
  );
};
