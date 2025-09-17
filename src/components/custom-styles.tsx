"use client"

export const CustomStyles = () => (
  <style jsx global>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(3deg); }
      50% { transform: translateY(-20px) rotate(3deg); }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(10px); }
      20%, 80% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-10px); }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out;
    }
    
    .animate-fade-in-left {
      animation: fadeInLeft 0.8s ease-out;
    }
    
    .animate-fade-in-right {
      animation: fadeInRight 0.8s ease-out;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-slide-up {
      animation: slideUp 0.6s ease-out 0.3s both;
    }
    
    .animate-fade-in-out {
      animation: fadeInOut 3s ease-in-out infinite;
    }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .shadow-3xl {
      box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
    }
    
    /* Efecto de scroll smooth para navegadores más antiguos */
    html {
      scroll-behavior: smooth;
    }
    
    /* Responsive mejoras */
    @media (max-width: 640px) {
      .animate-fade-in-up {
        animation-duration: 0.6s;
      }
    }
  `}</style>
)
