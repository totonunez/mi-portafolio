"use client";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProyectosSection";
import SobreMi from "./components/SobreMi";

export default function Home() {
  return (
    <div>
      <section id="inicio">
        <HeroSection></HeroSection>
      </section>

      <section id="proyectos">
        <ProjectsSection />
      </section>
      <section id="sobre-mi">
        <SobreMi />
      </section>
    </div>
  );
}
