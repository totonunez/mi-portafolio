const express = require('express');

const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); // ← AJUSTADO A TU OUTPUT
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
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
    res.json({ message: 'Datos guardados con éxito', data });
  } catch (error) {
    console.error('Error al guardar:', error);
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

module.exports = router;
