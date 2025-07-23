import { useState, useEffect } from 'react';
import { rickAndMortyService } from '../services/rickAndMortyService';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await rickAndMortyService.getCharacters();
        setCharacters(data);
      } catch (err) {
        setError('Error al cargar los personajes. Por favor, intenta de nuevo.');
        console.error('Error in hook:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading, error };
}; 