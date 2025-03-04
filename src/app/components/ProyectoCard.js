import Link from "next/link";

export default function ProyectoCard({ proyecto }) {
  return (
    <div className="card">
      <h2>{proyecto.nombre}</h2>
      <p>{proyecto.descripcion}</p>
      <Link href={`/proyectos/${proyecto.id}`}>Ver más</Link>
    </div>
  );
}
