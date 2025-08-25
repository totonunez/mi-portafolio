const express = require('express');

const router = express.Router();

const { PrismaClient } = require("@prisma/client");// ← AJUSTADO A TU OUTPUT
const prisma = new PrismaClient();

// Perfil base de cada candidato (ajusta valores según ideología)
const perfilesCandidatos = {
  "Jose Antonio Kast": { seguridad: 9, estado: 3, aborto: 1, ffaa: 9, afp: 9, partidos: 2, justicia_social: 2, meritocracia: 8 },
  "Evelyn Mathei": { seguridad: 8, estado: 5, aborto: 3, ffaa: 8, afp: 7, partidos: 4, justicia_social: 5, meritocracia: 7 },
  "Jeannette Jara": { seguridad: 3, estado: 9, aborto: 9, ffaa: 3, afp: 2, partidos: 8, justicia_social: 9, meritocracia: 4 },
  "Marco Enriquez-Ominami": { seguridad: 5, estado: 7, aborto: 8, ffaa: 5, afp: 4, partidos: 6, justicia_social: 8, meritocracia: 5 },
  "Franco Parisi": { seguridad: 6, estado: 5, aborto: 5, ffaa: 6, afp: 6, partidos: 5, justicia_social: 5, meritocracia: 7 },
  "Johannes Kaiser": { seguridad: 9, estado: 4, aborto: 2, ffaa: 9, afp: 8, partidos: 3, justicia_social: 3, meritocracia: 9 },

  // Nuevo candidato: Eduardo Artés (marxista, estatista, anti-mercado, muy pro justicia social)
  "Eduardo Artés": { seguridad: 2, estado: 10, aborto: 9, ffaa: 1, afp: 1, partidos: 9, justicia_social: 10, meritocracia: 2 },

  // Nuevo candidato: Harold Minichols (médico, académico, perfil técnico moderado, 
  // énfasis en meritocracia y salud pública, menos polarizado que el resto)
  "Harold Minichols": { seguridad: 5, estado: 6, aborto: 6, ffaa: 4, afp: 5, partidos: 5, justicia_social: 7, meritocracia: 9 }
};


function calcularCandidato(preferenciasUsuario) {
  let mejorCandidato = null;
  let menorDiferencia = Infinity;

  for (const [candidato, perfil] of Object.entries(perfilesCandidatos)) {
    let diferenciaTotal = 0;
    for (const key in perfil) {
      diferenciaTotal += Math.abs(preferenciasUsuario[key] - perfil[key]);
    }
    if (diferenciaTotal < menorDiferencia) {
      menorDiferencia = diferenciaTotal;
      mejorCandidato = candidato;
    }
  }

  return mejorCandidato;
}


// Ruta principal
router.get('/camino', async (req, res) => {
  res.send('Hola a todos los caminos desde el backend');
});

router.post('/testpost', async (req, res) => {
  try {
    // Aquí puedes realizar alguna operación con los datos recibidos
    res.status(200).json({ mensaje: 'Datos recibidos correctamente' });
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
      comuna,
      preferencias
    } = req.body;

    if (!edad || !sexo || !preferencias) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    // 🔹 Calcular candidato sugerido
    const candidatoSugerido = calcularCandidato(preferencias);
    console.log(`Candidato sugerido: ${candidatoSugerido}`);

    const data = await prisma.ciudadano.create({
      data: {
        edad,
        sexo,
        educacion,
        estadoCivil,
        hijos,
        religion,
        ocupacion,
        region,
        comuna,
        candidatoSugerido,
        preferencias: {
          create: preferencias // 👈 aquí va el objeto anidado
        }
      },
      include: { preferencias: true }
    });
    res.status(201).json({ mensaje: 'Ciudadano creado', candidatoSugerido, data });
  } catch (error) {
    console.error('Error al guardar:', error.message);
    console.error(error.stack);
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

router.get("/regiones", async (req, res) => {
  try {
    const response = await fetch("https://apis.digital.gob.cl/dpa/regiones");
    const data = await response.json();
    res.json(data); // Tu backend agrega CORS y reenvía
  } catch (error) {
    res.status(500).json({ error: "Error al obtener regiones" });
  }
});

router.get("/comunas/:codigo", async (req, res) => {
  try {
    const response = await fetch(`https://apis.digital.gob.cl/dpa/regiones/${req.params.codigo}/comunas`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener comunas" });
  }
});

module.exports = router;
