import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0b3556] to-[#1e4776] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Cristóbal Núñez Vera
          </h1>
          <h2 className="text-xl md:text-2xl mt-4 text-[#f8e8c9]">
            Software Engineer & Backend Developer
          </h2>
          <p className="text-md md:text-lg mt-6 max-w-xl  text-[#e5f0ff]">
            Creando experiencias web únicas con un enfoque en diseño intuitivo y
            código limpio.
          </p>
        </div>
        <div className="flex  gap-4">
          <Link
            href="/proyectos"
            className="bg-[#a46b3b] hover:bg-[#895932] text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all"
          >
            Ver proyectos
          </Link>
          <a
            href="mailto:cristobalnunezvera@icloud.com"
            className="border border-white hover:bg-white hover:text-[#1e4776] text-white font-semibold py-2 px-6 rounded-xl transition-all"
          >
            Contactar
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24 md:h-32 -mb-1"
          preserveAspectRatio="none"
        >
          <path
            fill="#fcf0d8"
            d="M0,160L60,160C120,160,240,160,360,154.7C480,149,600,139,720,128C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
