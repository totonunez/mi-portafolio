"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Importamos el archivo JSON
import proyectosData from '../../../data/proyectos.json';

export default function ProyectoPage() {
  const params = useParams(); // ✅ Get params safely
  const [id, setId] = useState<string | null>(null);
  const [proyectoNombre, setProyectoNombre] = useState<string | null>(null);


  useEffect(() => {
    if (params?.id) {
      const projectId = params.id as string;
      setId(projectId);

      // Buscar el proyecto en el archivo JSON por id
      const proyecto = proyectosData.find((p) => p.id === projectId);
      setProyectoNombre(proyecto ? proyecto.nombre : null); // Si no se encuentra, set null
    }
  }, [params]);

  return (
    <div>
      <h1>Project ID: {id || "Loading..."}</h1>
      <h2>Project Name: {proyectoNombre || "Loading..."}</h2>
      {/* Renderiza otros detalles del proyecto aquí */}
    </div>
  );
}
