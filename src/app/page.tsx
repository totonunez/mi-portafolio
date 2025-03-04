import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a mi portafolio</h1>
      <p>Explora mis proyectos</p>
      <Link href="/proyectos">Ver Proyectos</Link>
    </div>
  );
}
