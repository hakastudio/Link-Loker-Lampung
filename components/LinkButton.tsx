
import React from 'react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  link: LinkItem;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  const getStyleClasses = () => {
    switch (link.type) {
      case 'success':
        return 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 border-none text-white shadow-lg hover:scale-[1.03] ring-2 ring-white/20';
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-indigo-700 border-none text-white shadow-lg hover:scale-[1.02]';
      case 'secondary':
        return 'bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 shadow-inner';
      default:
        return 'bg-white border-transparent text-gray-800';
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center w-full max-w-md p-4 mb-4 transition-all duration-500 border-2 rounded-2xl transform overflow-hidden ${getStyleClasses()}`}
    >
      <div className={`absolute left-2.5 flex items-center justify-center w-11 h-11 overflow-hidden rounded-xl`}>
        {link.image ? (
          <img src={link.image} alt="" className="w-full h-full object-cover" />
        ) : (
          <i className={`${link.icon} text-xl`}></i>
        )}
      </div>
      <span className="font-bold text-center px-12 text-sm md:text-base">
        {link.title}
      </span>
    </a>
  );
};

export default LinkButton;
