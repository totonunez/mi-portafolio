/*
  Warnings:

  - You are about to drop the `PreferenciasPoliticas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "PreferenciasPoliticas_ciudadanoId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PreferenciasPoliticas";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Preferencias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "seguridad" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL,
    "aborto" INTEGER NOT NULL,
    "ffaa" INTEGER NOT NULL,
    "afp" INTEGER NOT NULL,
    "partidos" INTEGER NOT NULL,
    "justicia_social" INTEGER NOT NULL,
    "meritocracia" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ciudadano" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "edad" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "educacion" TEXT NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "hijos" INTEGER NOT NULL,
    "religion" TEXT NOT NULL,
    "ocupacion" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "comuna" TEXT NOT NULL,
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "preferenciasId" INTEGER,
    CONSTRAINT "Ciudadano_preferenciasId_fkey" FOREIGN KEY ("preferenciasId") REFERENCES "Preferencias" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ciudadano" ("comuna", "creadoEn", "edad", "educacion", "estadoCivil", "hijos", "id", "ocupacion", "region", "religion", "sexo") SELECT "comuna", "creadoEn", "edad", "educacion", "estadoCivil", "hijos", "id", "ocupacion", "region", "religion", "sexo" FROM "Ciudadano";
DROP TABLE "Ciudadano";
ALTER TABLE "new_Ciudadano" RENAME TO "Ciudadano";
CREATE UNIQUE INDEX "Ciudadano_preferenciasId_key" ON "Ciudadano"("preferenciasId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
