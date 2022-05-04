import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../../services/fetch';
import styles from './CharacterList.css';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();

      setCharacters(data);

      setLoading(false);
    };
    getCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Character List</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className={styles.list}>
          {characters.map((character) => (
            <div key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
              <p>Gender: {character.gender}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <img
                src={character.image}
                alt={`Image of ${character.name}`}
                height="150px"
                border=" 3px solid black"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
