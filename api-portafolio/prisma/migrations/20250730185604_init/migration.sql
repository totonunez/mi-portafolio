/*
  Warnings:

  - You are about to drop the column `preferenciasId` on the `Ciudadano` table. All the data in the column will be lost.
  - Added the required column `ciudadanoId` to the `Preferencias` table without a default value. This is not possible if the table is not empty.

*/
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
    "creadoEn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Ciudadano" ("comuna", "creadoEn", "edad", "educacion", "estadoCivil", "hijos", "id", "ocupacion", "region", "religion", "sexo") SELECT "comuna", "creadoEn", "edad", "educacion", "estadoCivil", "hijos", "id", "ocupacion", "region", "religion", "sexo" FROM "Ciudadano";
DROP TABLE "Ciudadano";
ALTER TABLE "new_Ciudadano" RENAME TO "Ciudadano";
CREATE TABLE "new_Preferencias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "seguridad" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL,
    "aborto" INTEGER NOT NULL,
    "ffaa" INTEGER NOT NULL,
    "afp" INTEGER NOT NULL,
    "partidos" INTEGER NOT NULL,
    "justicia_social" INTEGER NOT NULL,
    "meritocracia" INTEGER NOT NULL,
    "ciudadanoId" INTEGER NOT NULL,
    CONSTRAINT "Preferencias_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "Ciudadano" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Preferencias" ("aborto", "afp", "estado", "ffaa", "id", "justicia_social", "meritocracia", "partidos", "seguridad") SELECT "aborto", "afp", "estado", "ffaa", "id", "justicia_social", "meritocracia", "partidos", "seguridad" FROM "Preferencias";
DROP TABLE "Preferencias";
ALTER TABLE "new_Preferencias" RENAME TO "Preferencias";
CREATE UNIQUE INDEX "Preferencias_ciudadanoId_key" ON "Preferencias"("ciudadanoId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
