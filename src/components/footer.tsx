"use client"

import type React from "react"
import { Facebook, Instagram, MessageCircle, Youtube, Users } from "lucide-react"

interface FooterProps {
  scrollToSection: (id: string) => void
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gradient-to-br from-purple-800 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-yellow-400 p-2 rounded-lg hover:bg-yellow-300 transition-colors">
                <span className="text-purple-800 font-bold text-xl">LLA</span>
              </div>
              <div>
                <span className="font-bold text-xl">El Chapa Albornotz</span>
                <span className="block text-sm text-purple-200">Intendente Puan 2024</span>
              </div>
            </div>
            <p className="text-purple-200">Trabajando juntos por un Puan próspero y libre. ¡El cambio que merecemos!</p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {["Propuestas", "Noticias", "Galería", "Contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-purple-200 hover:text-white transition-all transform hover:translate-x-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h4 className="font-semibold text-lg mb-4">Seguinos en Redes</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Users className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 text-sm">Más de 5,000 puanenses nos apoyan</span>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center animate-fade-in-up">
          <p className="text-purple-200 mb-2">
            © 2024 El Chapa Albornotz - La Libertad Avanza Puan. Todos los derechos reservados.
          </p>
          <p className="text-purple-300 text-sm">"La libertad no se mendiga, se conquista" - Javier Milei</p>
        </div>
      </div>
    </footer>
  )
}
