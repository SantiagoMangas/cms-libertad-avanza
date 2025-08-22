"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, User, Shield, Briefcase, GraduationCap, Camera, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Youtube, ChevronRight } from 'lucide-react';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos del blog/noticias
  const blogPosts = [
    {
      id: 1,
      title: "Nuestra Propuesta de Reforma Impositiva Municipal",
      date: "2024-08-15",
      summary: "Presentamos un plan integral para reducir la carga tributaria y fomentar el crecimiento económico local.",
      image: "/blog1.jpg"
    },
    {
      id: 2,
      title: "Plan de Seguridad Ciudadana",
      date: "2024-08-10",
      summary: "Estrategias innovadoras para mejorar la seguridad en todos los barrios de nuestra ciudad.",
      image: "/blog2.jpg"
    },
    {
      id: 3,
      title: "Educación Digital para Todos",
      date: "2024-08-05",
      summary: "Proyecto para modernizar la educación municipal e incluir tecnología en todas las escuelas.",
      image: "/blog3.jpg"
    }
  ];

  // Datos de la galería
  const galleryImages = [
    { id: 1, url: "/gallery1.jpg", alt: "Evento en Plaza Central" },
    { id: 2, url: "/gallery2.jpg", alt: "Reunión con comerciantes" },
    { id: 3, url: "/gallery3.jpg", alt: "Visita a barrios" },
    { id: 4, url: "/gallery4.jpg", alt: "Debate público" },
    { id: 5, url: "/gallery5.jpg", alt: "Acto de campaña" },
    { id: 6, url: "/gallery6.jpg", alt: "Encuentro con jóvenes" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-2 rounded-lg shadow-md">
                <span className="text-yellow-400 font-bold text-xl">LLA</span>
              </div>
              <div>
                <span className="font-bold text-purple-700 text-lg">Juan Pérez</span>
                <span className="block text-xs text-gray-500">Candidato a Intendente</span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Propuestas', 'Quién Soy', 'Noticias', 'Galería', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Inicio', 'Propuestas', 'Quién Soy', 'Noticias', 'Galería', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Juan Pérez
                  <span className="block text-yellow-400 text-3xl lg:text-5xl mt-2">
                    Intendente 2024
                  </span>
                </h1>
                <div className="bg-purple-500/30 backdrop-blur-sm rounded-lg p-4 border border-purple-300/20">
                  <p className="text-xl lg:text-2xl text-yellow-200 font-medium mb-2">
                    La Libertad nos hace Libres
                  </p>
                  <p className="text-lg text-purple-100">
                    Un futuro próspero donde cada ciudadano pueda desarrollar su máximo potencial sin límites burocráticos.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
                >
                  Contactar Ahora
                </button>
                <button 
                  onClick={() => scrollToSection('propuestas')}
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-purple-800 transition-all"
                >
                  Ver Propuestas
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <User className="w-24 h-24 text-gray-500" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-purple-100">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <span className="text-purple-700 font-bold">LLA</span>
                    </div>
                    <div>
                      <p className="text-purple-800 font-bold">La Libertad Avanza</p>
                      <p className="text-gray-600 text-sm">Cambiemos juntos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuestas Section */}
      <section id="propuestas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestras <span className="text-purple-600">Propuestas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres pilares fundamentales para una ciudad próspera y libre
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Economía Libre",
                description: "Reducción drástica de impuestos municipales, eliminación de trabas burocráticas y promoción del emprendimiento local. Una ciudad que prospere sin límites."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Seguridad Efectiva",
                description: "Plan integral de seguridad con tecnología moderna, más iluminación, cámaras de vigilancia y patrullaje inteligente en todos los barrios."
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Educación Digital",
                description: "Modernización educativa con conectividad gratuita, tablets para estudiantes y capacitación docente en nuevas tecnologías."
              }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700 transition-colors">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quién Soy Section */}
      <section id="quién-soy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Quién <span className="text-purple-600">Soy</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Soy Juan Pérez, empresario local y defensor de la libertad económica. Durante los últimos 15 años he construido mi carrera profesional en nuestra ciudad, creando empleos y contribuyendo al desarrollo económico local.
                </p>
                <p>
                  Creo firmemente en los valores de La Libertad Avanza: menos Estado, más libertad individual y oportunidades para todos. Mi visión es transformar nuestra ciudad en un polo de desarrollo donde cada ciudadano pueda prosperar.
                </p>
                <p>
                  Como padre de familia y emprendedor, entiendo las necesidades reales de nuestros vecinos. Es hora de un cambio real, de una gestión eficiente y transparente.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <span className="text-purple-700 font-medium">Empresario</span>
                </div>
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <span className="text-purple-700 font-medium">Padre de Familia</span>
                </div>
                <div className="bg-purple-100 px-4 py-2 rounded-full">
                  <span className="text-purple-700 font-medium">Líder Local</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <User className="w-24 h-24 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias Section */}
      <section id="noticias" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Últimas <span className="text-purple-600">Noticias</span>
            </h2>
            <p className="text-xl text-gray-600">Mantente informado sobre nuestra campaña y propuestas</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-purple-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-purple-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('es-AR')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                    Leer más
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galería" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Galería</span> de Campaña
            </h2>
            <p className="text-xl text-gray-600">Momentos destacados de nuestra campaña</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-full h-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Contacto</span>
            </h2>
            <p className="text-xl text-gray-600">¿Tenés alguna propuesta o querés sumarte? ¡Escribinos!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-semibold">contacto@juanperez2024.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Teléfono</p>
                    <p className="font-semibold">+54 9 291 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Dirección</p>
                    <p className="font-semibold">Av. San Martín 1234, Bahía Blanca</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              
              <button 
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                onClick={() => alert('Formulario enviado. En un sitio real, esto se conectaría con un servicio de email.')}
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <span className="text-purple-800 font-bold text-xl">LLA</span>
                </div>
                <div>
                  <span className="font-bold text-xl">Juan Pérez</span>
                  <span className="block text-sm text-purple-200">Candidato a Intendente</span>
                </div>
              </div>
              <p className="text-purple-200">
                Trabajando juntos por una ciudad próspera y libre.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                {['Propuestas', 'Noticias', 'Galería', 'Contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-purple-200 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Redes Sociales</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="bg-purple-700 p-3 rounded-lg hover:bg-purple-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-700 mt-8 pt-8 text-center">
            <p className="text-purple-200">
              © 2024 Juan Pérez - La Libertad Avanza. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;