-- CreateTable
CREATE TABLE "Ciudadano" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "edad" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "educacion" TEXT NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "hijos" INTEGER NOT NULL,
    "religion" TEXT NOT NULL,
    "ocupacion" TEXT NOT NULL,
    "tipoContrato" TEXT NOT NULL,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
