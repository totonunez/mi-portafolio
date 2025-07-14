/*
  Warnings:

  - You are about to drop the column `genero` on the `Ciudadano` table. All the data in the column will be lost.
  - You are about to drop the column `tipoContrato` on the `Ciudadano` table. All the data in the column will be lost.
  - Added the required column `comuna` to the `Ciudadano` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Ciudadano` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `Ciudadano` table without a default value. This is not possible if the table is not empty.

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
INSERT INTO "new_Ciudadano" ("creadoEn", "edad", "educacion", "estadoCivil", "hijos", "id", "ocupacion", "religion") SELECT "creadoEn", "edad", "educacion", "estadoCivil", "hijos", "id", "ocupacion", "religion" FROM "Ciudadano";
DROP TABLE "Ciudadano";
ALTER TABLE "new_Ciudadano" RENAME TO "Ciudadano";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
