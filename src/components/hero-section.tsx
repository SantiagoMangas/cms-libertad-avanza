"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (id: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 to-indigo-900 text-white px-6"
    >
      <div className="max-w-4xl text-center space-y-8">
        {/* Nombre y lema */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="block text-yellow-300">El Chapa Albornoz</span>
          <span className="block text-white mt-2">Por un Puan Mejor</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Nacido y criado en Puan, con la convicción de que nuestra ciudad merece más.
          <span className="block mt-2 text-yellow-300 font-semibold">
            ¡Es hora del cambio real!
          </span>
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("contacto")}
            className="group bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all flex items-center justify-center"
          >
            <span className="mr-2">Sumate al Cambio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("propuestas")}
            className="group border-2 border-yellow-300 text-yellow-300 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 hover:text-purple-900 transition-all flex items-center justify-center"
          >
            <span>Ver Propuestas</span>
          </button>
        </div>
      </div>
    </section>
  )
}
