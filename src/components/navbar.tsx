"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

interface NavbarProps {
  scrollToSection: (id: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = ["Inicio", "Propuestas", "Quién Soy", "Noticias", "Galería", "Contacto"]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-xl border-b border-yellow-200" : "bg-white shadow-sm border-b border-purple-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-yellow-400 font-bold text-xl animate-pulse">LLA</span>
              </div>
              <div>
                <span className="font-bold text-purple-700 text-lg hover:text-purple-600 transition-colors">
                  El Chapa Albornotz
                </span>
                <span className="block text-xs text-gray-500 font-medium">Intendente Puan 2024</span>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="relative text-gray-700 hover:text-purple-600 transition-all font-medium group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-purple-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay con blur */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Sidebar lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-purple-800 to-purple-900 text-white z-50 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <span className="text-purple-800 font-bold">LLA</span>
              </div>
              <div>
                <span className="font-bold text-lg">El Chapa</span>
                <span className="block text-xs text-purple-200">Para Puan</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                  setMobileMenuOpen(false)
                }}
                className="flex items-center w-full text-left py-3 px-4 rounded-lg hover:bg-purple-700 transition-all transform hover:translate-x-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg font-medium">{item}</span>
                <ArrowRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-purple-700/50 p-4 rounded-lg text-center">
              <p className="text-purple-200 text-sm mb-2">¡Sumate al cambio!</p>
              <button
                onClick={() => {
                  scrollToSection("contacto")
                  setMobileMenuOpen(false)
                }}
                className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors w-full"
              >
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
