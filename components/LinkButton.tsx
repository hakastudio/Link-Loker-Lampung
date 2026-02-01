
import React from 'react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  link: LinkItem;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  const getStyleClasses = () => {
    switch (link.type) {
      case 'success':
        // Vibrant glowing gradient for the most important CTA (Pasang Loker)
        return 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 border-none text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-[1.03] ring-2 ring-white/20';
      case 'primary':
        // Modern blue to indigo gradient
        return 'bg-gradient-to-r from-blue-600 to-indigo-700 border-none text-white shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02]';
      case 'secondary':
        // Premium glassmorphism with subtle border glow
        return 'bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:border-white/40 shadow-inner';
      case 'warning':
        return 'bg-gradient-to-r from-amber-400 to-orange-500 border-none text-white shadow-lg';
      case 'store':
        return 'bg-white border-blue-100 text-gray-800 hover:border-blue-300';
      default:
        return 'bg-white border-transparent text-gray-800 hover:bg-gray-50';
    }
  };

  const getIconContainerClasses = () => {
    switch (link.type) {
      case 'success':
        return 'bg-white/20 text-white';
      case 'primary':
        return 'bg-white/10 text-white';
      case 'secondary':
        return 'bg-blue-400/20 text-blue-300';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center w-full max-w-md p-4 mb-4 transition-all duration-500 border-2 rounded-2xl transform overflow-hidden ${getStyleClasses()}`}
    >
      {/* Animated Shine Effect */}
      <div className="absolute inset-0 w-1/2 h-full bg-white/10 -skew-x-12 -translate-x-full group-hover:animate-[shine_0.75s_ease-in-out]"></div>
      
      <div className={`absolute left-2.5 flex items-center justify-center w-11 h-11 overflow-hidden rounded-xl transition-all duration-300 group-hover:rotate-12 ${getIconContainerClasses()}`}>
        {link.image ? (
          <img 
            src={link.image} 
            alt="" 
            className="w-full h-full object-cover" 
            loading="lazy"
            decoding="async"
          />
        ) : (
          <i className={`${link.icon} text-xl`}></i>
        )}
      </div>
      <span className="font-bold text-center px-12 text-sm md:text-base tracking-tight drop-shadow-sm">
        {link.title}
      </span>
      <div className="absolute right-5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
        <i className="fa-solid fa-chevron-right text-[10px]"></i>
      </div>

      <style>{`
        @keyframes shine {
          100% {
            transform: skewX(-12deg) translateX(250%);
          }
        }
      `}</style>
    </a>
  );
};

export default LinkButton;
