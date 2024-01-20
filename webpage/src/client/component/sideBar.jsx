import React from 'react';

const Sidebar = ({ selectedLocation }) => {
  return (
    <nav id='sidebar'>
      <h3>Risk Index</h3>
      <div id='riskIndex'></div>
      <div className='container'>
        <div>Low</div> 
        <div>High</div>
      </div>
      {/* <div className='container'>
        <div>0</div>
        <div>100</div>
      </div> */}
      {selectedLocation && (
        <div id='risk_info'>
          <h4>{selectedLocation.name}</h4>
          <p>City: {selectedLocation.city}</p>
          <p>State: {selectedLocation.state}</p>
          <p>Risk Index: {(Math.round(selectedLocation.risk_analysis * 100) / 100).toFixed(2)}</p>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;