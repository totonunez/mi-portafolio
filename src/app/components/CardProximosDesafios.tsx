interface Desafio {
    id: string;
    titulo: string;
    descripcion: string;
  }
  
  interface CardProximosDesafiosProps {
    desafios: Desafio[];
  }
  
  export default function CardProximosDesafios({ desafios }: CardProximosDesafiosProps) {
    return (
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-6">
          Próximos desafíos
        </h2>
        <div className="space-y-4">
          {desafios.map((desafio) => (
            <div
              key={desafio.id}
              className="w-full bg-white border-l-4 border-[#1E3A8A] shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{desafio.titulo}</h3>
              <p className="text-gray-600">{desafio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  