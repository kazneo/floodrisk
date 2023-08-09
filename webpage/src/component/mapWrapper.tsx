import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { getMap } from './map';
import Sidebar from './sideBar';

interface MapBoxWrapperProps {
  hidden: boolean;
}

export const MapBoxWrapper: React.FC<MapBoxWrapperProps> = ({ hidden }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    map.current = getMap(mapContainer);
  }, []);

  useEffect(() => {
    map.current?.resize();
  }, [hidden]);

  return (
    <div className='map-container' style={{ display: hidden ? 'none' : 'block' }}>
      <Sidebar />
      <div ref={mapContainer} className='map' />
    </div>
  );
};