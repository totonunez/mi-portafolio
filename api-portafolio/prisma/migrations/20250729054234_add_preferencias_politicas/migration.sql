-- CreateTable
CREATE TABLE "PreferenciasPoliticas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ciudadanoId" INTEGER NOT NULL,
    "seguridad" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL,
    "aborto" INTEGER NOT NULL,
    "ffaa" INTEGER NOT NULL,
    "afp" INTEGER NOT NULL,
    "partidos" INTEGER NOT NULL,
    "justicia_social" INTEGER NOT NULL,
    "meritocracia" INTEGER NOT NULL,
    CONSTRAINT "PreferenciasPoliticas_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "Ciudadano" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PreferenciasPoliticas_ciudadanoId_key" ON "PreferenciasPoliticas"("ciudadanoId");
