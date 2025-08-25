"use client";

import { useState, useEffect } from "react";
import Paso1Presidencial, {
  FormularioCiudadanoData,
} from "./pasos/Paso1Presidencial";
import Paso2Presidencial from "./pasos/Paso2Presidencial"; // Tu siguiente paso personalizado

export default function FormularioPresidencial() {
  const [paso, setPaso] = useState(1);
  const [datosCiudadano, setDatosCiudadano] =
    useState<FormularioCiudadanoData | null>(null);

  type PreferenciasPoliticas = {
    seguridad: number;
    estado: number;
    aborto: number;
    ffaa: number;
    afp: number;
    partidos: number;
    justicia_social: number;
    meritocracia: number;
  };

  const [preferencias, setPreferencias] = useState<PreferenciasPoliticas>({
    seguridad: 5,
    estado: 5,
    aborto: 5,
    ffaa: 5,
    afp: 5,
    partidos: 5,
    justicia_social: 5,
    meritocracia: 5,
  });

  const [candidatoSugerido, setCandidatoSugerido] = useState<string | null>(
    null
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [paso]);

  const handlePaso1Submit = (data: FormularioCiudadanoData) => {
    setDatosCiudadano(data);
    setPaso(2);
  };

  const handlePasoFinal = async (opinionFinal: PreferenciasPoliticas) => {
    const payload = {
      ...datosCiudadano,
      preferencias: opinionFinal,
    };

    console.log("Enviando todos los datos:", payload);

    // Aquí puedes hacer un fetch/axios al backend con `payload`

    try {
      const baseUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000"
          : "https://atreusocean.com";

      const res = await fetch(`${baseUrl}/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al enviar datos");

      const data = await res.json();
      console.log("✅ Ciudadano creado en la base de datos:", data);

      // Guardar candidato sugerido desde backend
      if (data.candidatoSugerido) {
        setCandidatoSugerido(data.candidatoSugerido);
      } else {
        console.log(
          "⚠️ No se encontró candidato sugerido en la respuesta del backend"
        );
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  const reiniciarEncuesta = () => {
    setPaso(1);
    setDatosCiudadano(null);
    setPreferencias({
      seguridad: 5,
      estado: 5,
      aborto: 5,
      ffaa: 5,
      afp: 5,
      partidos: 5,
      justicia_social: 5,
      meritocracia: 5,
    });
    setCandidatoSugerido(null);
  };

  return (
    <>
      {paso === 1 && <Paso1Presidencial onNext={handlePaso1Submit} />}
      {paso === 2 && (
        <Paso2Presidencial
          onFinish={handlePasoFinal}
          datos={preferencias}
          pasoAnterior={() => setPaso(1)}
          onReiniciar={reiniciarEncuesta}
          candidatoSugerido={candidatoSugerido}
        />
      )}
    </>
  );
}
