import type React from "react"
import { Briefcase, Shield, GraduationCap} from "lucide-react"

export const ProposalsSection: React.FC = () => {
  const proposals = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Economía Libre",
      description:
        "Reducción drástica de impuestos municipales, eliminación de trabas burocráticas y promoción del emprendimiento local. Puan debe prosperar sin límites.",
      features: ["Menos impuestos", "Cero trabas", "Más emprendimientos"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad 24/7",
      description:
        "Plan integral de seguridad con tecnología moderna, más iluminación LED, cámaras de vigilancia y patrullaje inteligente en todos los barrios de Puan.",
      features: ["Cámaras HD", "Patrullaje inteligente", "Iluminación LED"],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educación Digital",
      description:
        "Modernización educativa con conectividad gratuita, tablets para estudiantes y capacitación docente en nuevas tecnologías para el futuro.",
      features: ["WiFi gratuito", "Tablets para todos", "Capacitación docente"],
    },
  ]

  return (
    <section id="propuestas" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-purple-100 px-6 py-2 rounded-full mb-6">
            <span className="text-purple-700 font-semibold">NUESTRO PLAN</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Propuestas que <span className="text-purple-600">Transforman</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tres pilares fundamentales para hacer de Puan el municipio más próspero y libre de la provincia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {proposals.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-purple-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-yellow-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <div className="text-white">{item.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed mb-6">{item.description}</p>

                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
