// PlanetDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      setPlanet(response.data);
    };

    fetchPlanet();
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="planet-details">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      {/* Additional details as needed */}
    </div>
  );
};

export default PlanetDetails;
