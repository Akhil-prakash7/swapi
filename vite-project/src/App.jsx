import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PlanetsDirectory from './PlanetsDirectory';
import PlanetDetails from './PlanetDetails';

function App() {
  return (
    <>
     <h1>Star Wars Planets Directory</h1>
    <Router>
     
      <div className="App">
        
        <Routes>
          <Route path="/" element={<PlanetsDirectory />} />
          <Route path="/planet/:id" element={<PlanetDetails />} />
        </Routes>
      </div>
    </Router>
    </>
   
  );
}

export default App;
