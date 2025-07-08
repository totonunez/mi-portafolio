const express = require('express');
const cors = require('cors');
const app = express();

// Configurar CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://atreusocean.com'], // Ajusta según tu entorno
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.use(express.json());

// Ruta principal
app.get('/api', (req, res) => {
  res.send('Hola mundo desde el backend');
});

// Rutas de tu API
const formRoutes = require('./routes/form');
app.use('/api', formRoutes);

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en puerto ${PORT}`);
});
