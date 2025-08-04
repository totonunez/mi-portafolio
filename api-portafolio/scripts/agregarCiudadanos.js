const { PrismaClient } = require ("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Crear un ciudadano con sus preferencias políticas
  const ciudadano = await prisma.ciudadano.create({
    data: {
      edad: 32,
      sexo: "Masculino",
      educacion: "Universitaria",
      estadoCivil: "Soltero",
      hijos: 0,
      religion: "Ninguna",
      ocupacion: "Ingeniero de Software",
      region: "Metropolitana",
      comuna: "Santiago",
      preferencias: {
        create: {
          seguridad: 7,
          estado: 5,
          aborto: 3,
          ffaa: 8,
          afp: 6,
          partidos: 2,
          justicia_social: 9,
          meritocracia: 8,
        },
      },
    },
    include: {
      preferencias: true, // 🔍 Para traer también los datos de la relación
    },
  });

  console.log("✅ Ciudadano creado:", ciudadano);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
