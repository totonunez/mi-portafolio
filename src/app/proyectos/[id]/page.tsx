"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Importamos el archivo JSON
import proyectosData from '../../../data/proyectos.json';

export default function ProyectoPage() {
    const params = useParams(); // ✅ Get params safely
    const [id, setId] = useState<string | null>(null);
    const [proyectoNombre, setProyectoNombre] = useState<string | null>(null);
    const [proyectoDescripcion, setProyectoDescripcion] = useState<string | null>(null);
    const [proyectoImagenes, setProyectoImagenes] = useState<string[] | null>(null);


    useEffect(() => {
        if (params?.id) {
        const projectId = params.id as string;
        setId(projectId);

        // Buscar el proyecto en el archivo JSON por id
        const proyecto = proyectosData.find((p) => p.id === projectId);
        setProyectoNombre(proyecto ? proyecto.nombre : null); // Si no se encuentra, set null
        setProyectoDescripcion(proyecto ? proyecto.descripcion : null);
        setProyectoImagenes(proyecto ? proyecto.imagenes : null);
        }
    }, [params]);

    return (
        <div>
        <h1>Project ID: {id || "Loading..."}</h1>
        <h2>Project Name: {proyectoNombre || "Loading..."}</h2>
        <p>Project Description: {proyectoDescripcion || "Loading..."}</p>
             {/* Mostrar todas las imágenes */}
        <div className="galeria">
            {proyectoImagenes?.length ? (
                proyectoImagenes.map((imagen, index) => (
                    <div key={index}>
                    <img
                    className="galeria" // 
                    src={imagen}
                    alt={`Imagen ${index + 1} de ${proyectoNombre}`}
                    style={{ width: "80%", height: "center", marginBottom: "1rem" }}
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
