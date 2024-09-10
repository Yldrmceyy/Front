import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarship = async () => {
      const result = await axios.get(`https://swapi.dev/api/starships/${id}/`);
      setStarship(result.data);
    };
    fetchStarship();
  }, [id]);

  if (!starship) return <p>Loading...</p>;

  return (
    <div className="container">
    <div className="card">
    <h1>{starship.name}</h1>
    <p>Model: {starship.model}</p>
    <p>Passengers: {starship.passengers}</p>
    <p>Max Speed: {starship.max_atmosphering_speed}</p>
    <p>Manufacturer: {starship.manufacturer}</p>
    <p>Crew: {starship.crew}</p>
    <p>Cargo Capacity: {starship.cargo_capacity}</p>
    </div>
    <Link to="/" className="back-button">Back to Home</Link>
</div>
  );
};

export default DetailPage;
