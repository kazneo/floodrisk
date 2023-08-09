import React, { useState } from 'react';
// import '../Sidebar.css';

const Sidebar = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    onStateSelect(newState);
  };

  return (
    <nav id='sidebar'>
      <h3>Risk Index</h3>
      <div id='riskIndex'></div>
      <div className='container'>
        <div>Low</div>
        <div>High</div>
      </div>
      {/* <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        <option value="Texas">Texas</option>
        <option value="Florida">Florida</option>
        <option value="Alabama">Alabama</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Louisiana">Louisiana</option>
      </select> */}
    </nav>
  );
};

export default Sidebar;
