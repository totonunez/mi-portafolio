const express = require('express');

const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); // ← AJUSTADO A TU OUTPUT
const prisma = new PrismaClient();

// Ruta principal
router.get('/camino', async (req, res) => {
  res.send('Hola a todos los caminos desde el backend');
});

router.post('/form', async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const {
        edad,
        genero,
        educacion,
        estadoCivil,
        hijos,
        religion,
        ocupacion,
        tipoContrato,
      } = req.body;

    const data = await prisma.ciudadano.create({
      data: {
        edad: parseInt(edad, 10),
        genero,
        educacion,
        estadoCivil,
        hijos: parseInt(hijos, 10),
        religion,
        ocupacion,
        tipoContrato,
      },
    });
    res.status(200).json({ mensaje: 'Formulario recibido', data });
  } catch (error) {
    console.error('Error al guardar:', error.message);
    console.error(error.stack);
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

module.exports = router;
