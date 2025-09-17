"use client"
import type React from "react"
import { Calendar, Camera, ChevronRight } from "lucide-react"

export const NewsSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Plan de Reforma Impositiva para Puan",
      date: "2024-08-15",
      summary:
        "Presentamos un plan integral para reducir la carga tributaria y fomentar el crecimiento económico en nuestro querido Puan.",
      category: "ECONOMÍA",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Seguridad 24/7 para Todos los Barrios",
      date: "2024-08-10",
      summary:
        "Estrategias innovadoras para mejorar la seguridad en cada rincón de Puan, porque todos merecemos vivir tranquilos.",
      category: "SEGURIDAD",
      readTime: "3 min",
    },
    {
      id: 3,
      title: "Internet Gratuito para Todas las Escuelas",
      date: "2024-08-05",
      summary:
        "Proyecto para conectar todas las instituciones educativas de Puan con internet de alta velocidad sin costo.",
      category: "EDUCACIÓN",
      readTime: "4 min",
    },
  ]

  return (
    <section id="noticias" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-purple-100 px-6 py-2 rounded-full mb-6">
            <Calendar className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-700 font-semibold">ACTUALIDAD</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Últimas <span className="text-purple-600">Noticias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre nuestras propuestas y el avance de la campaña
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300 relative overflow-hidden">
                <Camera className="w-12 h-12 text-white/80" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold">{post.category}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs">{post.readTime}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-purple-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("es-AR")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.summary}</p>
                <button className="flex items-center text-purple-600 font-semibold hover:text-purple-700 group-hover:translate-x-1 transition-all">
                  <span>Leer más</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
