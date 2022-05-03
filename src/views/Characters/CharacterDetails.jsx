import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../services/fetch';
import { Link } from 'react-router-dom';

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchDetails(id);

      setCharacter(data);

      setLoading(false);
    };
    getDetails();
  }, []);

  return (
    <>
      <h1>Character Detail</h1>
      <Link to="/">All Characters</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{character.name}</h3>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <img
            src={character.image}
            alt={`Image of ${character.name}`}
            height="350px"
            border=" 3px solid black"
          />
        </div>
      )}
    </>
  );
}
