const { PrismaClient } = require ("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const ciudadanos = await prisma.ciudadano.findMany({
    include: {
      preferencias: true,
    },
  });

  console.log("📌 Lista de ciudadanos:", ciudadanos);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
