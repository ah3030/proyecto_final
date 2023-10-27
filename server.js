const express = require('express');
const app = express();
const port = 3000;

// Configuración de rutas y middleware aquí

app.listen(port, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${port}`);
});

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configuración de rutas y middleware para el servidor aquí

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${port}`);
});





