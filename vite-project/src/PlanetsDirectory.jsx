// PlanetsDirectory.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import PlanetCard from './PlanetCard';

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await axios.get('https://swapi.dev/api/planets/?format=json');
      setPlanets(response.data.results);
      setNextPage(response.data.next);
    };

    fetchPlanets();
  }, []);

  const loadNextPage = async () => {
    if (nextPage) {
      const response = await axios.get(nextPage);
      setPlanets(prevPlanets => [...prevPlanets, ...response.data.results]);
      setNextPage(response.data.next);
    }
  };

  return (
    <div className="planets-directory">
      {planets.map(planet => (
        <Link key={planet.name} to={`/planet/${planet.url.split('/').slice(-2)[0]}`}>
          {/* Extracting the planet ID from the URL */}
          <PlanetCard planet={planet} />
        </Link>
      ))}
      {nextPage && <button onClick={loadNextPage}>Load More</button>}
    </div>
  );
};

export default PlanetsDirectory;
