import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarshipList from '../components/StarshipList';
import SearchBar from '../components/SearchBar';
import LoadMoreButton from '../components/LoadMoreButton';

const HomePage = () => {
  const [starships, setStarships] = useState([]);
  const [next, setNext] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchStarships = async () => {
      const result = await axios.get('https://swapi.dev/api/starships/');
      setStarships(result.data.results);
      setNext(result.data.next);
    };
    fetchStarships();
  }, []);

  const loadMore = async () => {
    if (next) {
      const result = await axios.get(next);
      setStarships(prev => [...prev, ...result.data.results]);
      setNext(result.data.next);
    }
  };

  const handleSearch = async (query) => {
    setSearch(query);
    const result = await axios.get(`https://swapi.dev/api/starships/?search=${query}`);
    setStarships(result.data.results);
    setNext(result.data.next);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <StarshipList starships={starships} />
      <LoadMoreButton loadMore={loadMore} />
    </div>
  );
};

export default HomePage;
