import React from 'react';
import { useState, useEffect } from 'react';
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
              <h3>{character.name}</h3>
              <p>{character.gender}</p>
              <p>{character.status}</p>
              <p>{character.species}</p>
              <img src={character.image} height="150px" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
