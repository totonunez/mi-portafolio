const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: 'http://atreusocean.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
 

app.use(cors(corsOptions));
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
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
