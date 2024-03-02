import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map(url => axios.get(url));
      const responses = await Promise.all(promises);
      const residentsData = responses.map(response => response.data);
      setResidents(residentsData);
    };

    fetchResidents();
  }, [planet]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <h3>Residents:</h3>
      <ul>
        {residents.map(resident => (
          <li key={resident.url}>
            {resident.name} - {resident.height}cm - {resident.mass}kg - {resident.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetCard;
