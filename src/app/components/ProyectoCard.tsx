import Link from "next/link";

interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
}

interface ProyectoCardProps {
  proyecto: Proyecto;
}

export default function ProyectoCard({ proyecto }: ProyectoCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-[#5C4033] to-[#1E3A8A] rounded-2xl shadow-lg p-6 w-80 text-white transform transition duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold mb-2">{proyecto.nombre}</h2>
      <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
      <Link
        href={`/proyectos/${proyecto.id}`}
        className="inline-block bg-white text-[#1E3A8A] font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-300"
      >
        Ver más
      </Link>
    </div>
  );
}
