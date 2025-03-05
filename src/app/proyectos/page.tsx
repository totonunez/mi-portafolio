"use client";

import { Typography } from "@mui/material";
import proyectos from "../../data/proyectos.json";
import ProyectoCard from "../components/ProyectoCard";

export default function ProyectosPage() {
    return (
        <div>
        <Typography variant="h4" gutterBottom align="center">
            Mis Proyectos
        </Typography>

        <div className="grid">
        {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}
        </div>

        </div>
    );
}
