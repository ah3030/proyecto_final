
import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Lógica para cargar películas desde el servidor Node.js
  }, []);

  const handleSearch = () => {
    // Lógica para buscar películas y actualizar el estado
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {/* Renderizar películas y detalles aquí */}
    </div>
  );
}

useEffect(() => {
    // Lógica para cargar películas desde el servidor Node.js
    axios.get('/api/searchMovies?term=' + searchTerm)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);
  
  useEffect(() => {
    axios.get('/api/searchMovies?term=' + searchTerm)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert('Error al buscar películas. Inténtalo de nuevo más tarde.');
      });
  }, [searchTerm]);