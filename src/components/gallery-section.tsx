import type React from "react"
import { Camera } from "lucide-react"

export const GallerySection: React.FC = () => {
  const galleryImages = [
    { id: 1, url: "/gallery1.jpg", alt: "Recorrida por el centro de Puan" },
    { id: 2, url: "/gallery2.jpg", alt: "Reunión con comerciantes locales" },
    { id: 3, url: "/gallery3.jpg", alt: "Visita a barrios periféricos" },
    { id: 4, url: "/gallery4.jpg", alt: "Debate en el Club Social" },
    { id: 5, url: "/gallery5.jpg", alt: "Acto de campaña en la plaza" },
    { id: 6, url: "/gallery6.jpg", alt: "Encuentro con jóvenes emprendedores" },
  ]

  return (
    <section id="galería" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Galería</span> de Campaña
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Momentos destacados recorriendo Puan</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-300 group-hover:to-purple-400 transition-all duration-300">
                <Camera className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
