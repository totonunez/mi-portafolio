const express = require('express');

const router = express.Router();

const { PrismaClient } = require('../generated/prisma'); // ← AJUSTADO A TU OUTPUT
const prisma = new PrismaClient();

// Ruta principal
router.get('/camino', async (req, res) => {
  res.send('Hola a todos los caminos desde el backend');
});

router.post('/testpost', async (req, res) => {
  try {
    // Aquí puedes realizar alguna operación con los datos recibidos
    res.status(200).json({ mensaje: 'Datos recibidos correctamente'});
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
}
);

router.post('/form', async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const {
      edad,
      sexo,
      educacion,
      estadoCivil,
      hijos,
      religion,
      ocupacion,
      region,
      comuna
    } = req.body;

    const data = await prisma.ciudadano.create({
      data: {
        edad: parseInt(edad, 10),
        sexo,
        educacion,
        estadoCivil,
        hijos: parseInt(hijos, 10),
        religion,
        ocupacion,
        region,
        comuna
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
