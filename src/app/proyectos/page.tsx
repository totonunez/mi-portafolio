"use client";

import proyectos from "../../data/proyectos.json";
import ProyectoCard from "../components/ProyectoCard";

export default function ProyectosPage() {
    return (
        <div className="p-3">
            <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-6">
                Mis Proyectos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {proyectos.map((proyecto) => (
                <ProyectoCard key={proyecto.id} proyecto={proyecto} />
            ))}
            </div>
        </div>
    );
}
