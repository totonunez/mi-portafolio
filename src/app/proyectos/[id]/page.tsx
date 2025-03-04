"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import proyectos from "../../../data/proyectos.json";

export default function ProyectoPage({ params }: { params: { id: string } }) {
    const proyecto = proyectos.find((p) => p.id === params.id);

    if (!proyecto) {
        return notFound(); // Muestra una página 404 si no encuentra el proyecto
    }

    return (
        <div>
        <h1>{proyecto.nombre}</h1>
        <p>{proyecto.descripcion}</p>
        <div className="galeria">
            {proyecto.imagenes.map((src, index) => (
            <Image key={index} src={src} alt={`Imagen ${index + 1}`} width={400} height={300} />
            ))}
        </div>
        </div>
    );
}
