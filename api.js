const axios = require('axios');

// Endpoint para buscar películas en la API de IMDb
app.get('/api/searchMovies', async (req, res) => {
  const searchTerm = req.query.term;
  try {
    const response = await axios.get(`https://api.imdb.com/search?q=${searchTerm}`);
    const movies = response.data.results;
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar películas en IMDb' });
  }
});