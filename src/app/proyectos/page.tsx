"use client";

import { Typography } from "@mui/material";
import proyectos from "../../data/proyectos.json";
import ProyectoCard from "../components/ProyectoCard";

export default function ProyectosPage() {
    return (
        <div className="p-3">
        <Typography variant="h4" gutterBottom align="center">
            Mis Proyectos
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
        </div>


        </div>
    );
}
