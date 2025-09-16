import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] text-white pt-0 font-sans">
      {/* Barra superior violeta con texto y redes alineados a los lados */}
      <div className="bg-[#3d1766] border-b-4 border-[#e91e63] py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 px-4 md:px-8">
        <span className="text-lg">Seguinos en nuestras redes</span>
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-[#FFD700] transition"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#FFD700] transition"><FaInstagram /></a>
          <a href="#" aria-label="YouTube" className="hover:text-[#FFD700] transition"><FaYoutube /></a>
          <a href="#" aria-label="TikTok" className="hover:text-[#FFD700] transition"><FaTiktok /></a>
          <a href="#" aria-label="X" className="hover:text-[#FFD700] transition"><FaXTwitter /></a>
        </div>
      </div>

      {/* Contenido principal del footer con logo y enlaces */}
      <div className="max-w-6xl mx-auto py-10 px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 items-start">
          {/* Columna 1: Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/galeria/logo.webp"
              alt="Logo"
              width={120}
              height={120}
              className="mx-auto md:mx-0"
            />
          </div>
          
          {/* Columna 2: Sobre Nosotros */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-black mb-3 text-2xl md:text-3xl text-[#FFD700] uppercase tracking-wide drop-shadow-lg">Sobre Nosotros</h3>
            <ul className="space-y-1 text-base font-medium">
                              <li><a href="#" className="hover:text-[#a78bfa] transition footer-link-hover-underline">Descripcion</a></li>
              <li><a href="#" className="hover:text-[#a78bfa] transition footer-link-hover-underline">Candidatos</a></li>
              <li><a href="#" className="hover:text-[#a78bfa] transition footer-link-hover-underline">Galeria</a></li>
            
            </ul>
          </div>
          
          {/* Columna 3: Información Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-black mb-3 text-2xl md:text-3xl text-[#FFD700] uppercase tracking-wide drop-shadow-lg">Información Legal</h3>
            <ul className="space-y-1 text-base font-medium">
              <li><a href="#" className="hover:text-[#a78bfa] transition footer-link-hover-underline">Contacto</a></li>
              <li><a href="#" className="hover:text-[#a78bfa] transition footer-link-hover-underline">Términos de uso</a></li>
              <li><a href="#" className="hover:text-[#a78bfa] transition footer-link-hover-underline">Política de privacidad</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Derechos */}
      <div className="text-center text-sm text-gray-300 py-6">
        © 2025 La Libertad Avanza. Todos los derechos reservados.
      </div>
    </footer>
  );
}