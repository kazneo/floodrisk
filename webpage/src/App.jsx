import { useState, useEffect } from 'react'

import Header from './component/Header'
import Footer from './component/Footer'
import Goal from './component/Goal'
import Model from './component/Model'
import Dataset from './component/Dataset'
import Main from './component/Main'
// import Map from './component/Map'
import { MapBoxWrapper } from './component/mapWrapper'
import './App.css'



function App() {
  // const [datasets, setDataSets] = useState(null);
  const [view, setView] = useState('home');
  // const height = window.visualViewport.height - 80;
  console.log(view);
  return (
    <div className="App">
      <Header viewSelector={setView} />
      
      {/* <Main hidden={view !== 'home'} />   */}
      <Goal hidden={view !== 'home'}/>
      <Model hidden={view !== 'home'}/>
      <Dataset hidden={view !== 'home'}/>
      <MapBoxWrapper hidden={view !== 'map'}/>

      <Footer/>
    </div>
  )
}

export default App
