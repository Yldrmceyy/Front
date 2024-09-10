import React from 'react';
import { Link } from 'react-router-dom';

const StarshipList = ({ starships }) => {
  return (
    <div>
      {starships.map(starship => (
        <div key={starship.url}>
          <h2>{starship.name}</h2>
          <p>Model: {starship.model}</p>
          <p>Speed: {starship.max_atmosphering_speed}</p>
          {/* Detay sayfasına yönlendirme */}
          <Link to={`/details/${starship.url.split('/')[5]}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
};

export default StarshipList;
