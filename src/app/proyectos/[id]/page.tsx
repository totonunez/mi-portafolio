"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Importar Image de Next.js
import "./style.css";

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
        <div className="content">
            <div className="card">
                <h2 className="title">
                    {proyectoNombre || "Cargando..."}
                </h2>
            </div>
            <p className="description">
                {proyectoDescripcion || "Cargando..."}
            </p>

            <div className="images-container">
                {proyectoImagenes?.length ? (
                    proyectoImagenes.map((imagen, index) => (
                        <div key={index} className="image-wrapper">
                            <Image
                                src={imagen}
                                alt={`Imagen ${index + 1} de ${proyectoNombre}`}
                                layout="fill"
                                objectFit="fill"
                                className="image"
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
