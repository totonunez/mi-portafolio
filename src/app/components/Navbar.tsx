// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 bg-[#1b3e63] text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg">CN</span>
      </div>
      <ul className="flex space-x-8 text-sm font-medium">
        <li>
          <Link href="/" className="hover:underline text-[#f8e8c9]">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="#proyectos" className="hover:underline text-[#f8e8c9]">
            Proyectos
          </Link>
        </li>
        <li>
          <Link href="#sobre-mi" className="hover:underline text-[#f8e8c9]">
            Sobre mí
          </Link>
        </li>
      </ul>
    </nav>
  );
}
