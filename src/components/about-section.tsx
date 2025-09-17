import type React from "react"
import { User, Heart } from "lucide-react"

export const AboutSection: React.FC = () => {
  return (
    <section id="quién-soy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-in-left">
            <div>
              <div className="inline-flex items-center bg-yellow-100 px-6 py-2 rounded-full mb-6">
                <User className="w-5 h-5 text-yellow-700 mr-2" />
                <span className="text-yellow-800 font-semibold">CONOCEME</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                Soy <span className="text-purple-600">El Chapa</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl">
                <strong>Un puanense de corazón</strong> que conoce cada calle, cada necesidad y cada sueño de nuestros
                vecinos.
              </p>
              <p>
                Durante más de 20 años he trabajado en nuestra querida ciudad, creando empleos, apoyando a emprendedores
                locales y construyendo el Puan que queremos ver crecer.
              </p>
              <p>
                Creo firmemente en los valores de <strong>La Libertad Avanza</strong>: menos Estado, más libertad
                individual y oportunidades reales para que cada puanense pueda prosperar sin límites burocráticos.
              </p>
              <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-600">
                <p className="text-purple-800 font-medium italic">
                  "No vine a la política por ambición personal, vine porque Puan merece un futuro próspero y libre. Es
                  hora del cambio que todos esperamos."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Empresario Local", icon: "💼" },
                { label: "Padre de Familia", icon: "👨‍👩‍👧‍👦" },
                { label: "Líder Comunitario", icon: "🤝" },
                { label: "Hijo de Puan", icon: "🏡" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-xl text-center hover:from-purple-200 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <span className="text-purple-800 font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[3/4] bg-gray-300 rounded-2xl flex items-center justify-center mb-6">
                  <User className="w-24 h-24 text-gray-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">El Chapa Albornotz</h3>
                  <p className="text-purple-700">Tu próximo Intendente</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-4 border-purple-600">
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">20+</div>
                  <div className="text-sm text-gray-600">Años sirviendo a Puan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
