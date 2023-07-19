import React, { useCallback } from 'react';

export default function Header({ viewSelector }) {
    const selectHomeView = useCallback(() => {
        viewSelector('home');
    });

    const selectMapView = useCallback(() => {
        viewSelector('map');
    });
    return(
        <header>
            <h1 onClick={selectHomeView}>Medical Infrastructure Flood Risk</h1>
            <nav>
                <ul>
                    <li><a href="#" onClick={selectHomeView}>Home</a></li>
                    <li><a href="#" onClick={selectMapView}>Maps</a></li>
                </ul>
            </nav>
        </header>
    ); 
}