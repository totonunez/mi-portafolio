"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Importar Image de Next.js

// Importamos el archivo JSON
import proyectosData from "../../../data/proyectos.json";

export default function ProyectoPage() {
    const params = useParams(); // ✅ Obtener parámetros
    const [proyectoNombre, setProyectoNombre] = useState<string | null>(null);
    const [proyectoDescripcion, setProyectoDescripcion] = useState<string | null>(null);
    const [proyectoImagenes, setProyectoImagenes] = useState<string[] | null>(null);

    useEffect(() => {
        if (params?.id) {
            const projectId = params.id as string;

            // Buscar el proyecto en el archivo JSON por id
            const proyecto = proyectosData.find((p) => p.id === projectId);
            setProyectoNombre(proyecto ? proyecto.nombre : null);
            setProyectoDescripcion(proyecto ? proyecto.descripcion : null);
            setProyectoImagenes(proyecto ? proyecto.imagenes : null);
        }
    }, [params]);

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {proyectoNombre || "Cargando..."}
                </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed p-4">
                {proyectoDescripcion || "Cargando..."}
            </p>

            <div className="flex flex-col items-center gap-4 p-4">
            {proyectoImagenes?.length ? (
                proyectoImagenes.map((imagen, index) => (
                <div key={index} className="relative w-150 h-100">
                    <Image
                    src={imagen}
                    alt={`Imagen ${index + 1} de ${proyectoNombre}`}
                    layout="fill" // ✅ Mantiene la proporción
                    objectFit="fill"
                    className="rounded-lg shadow-lg"
                    />
                </div>
                ))
            ) : (
                <p>No hay imágenes disponibles.</p>
            )}
            </div>

        </div>
    );
}
