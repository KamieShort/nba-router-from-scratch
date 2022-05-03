import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../../services/fetch';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();

      setCharacters(data);
      console.log(data);
      setLoading(false);
    };
    getCharacters();
  }, []);

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <>
      <h1>Character List</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {characters.map((character) => (
            <div key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
              <p>Gender: {character.gender}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <img src={character.image} height="150px" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
