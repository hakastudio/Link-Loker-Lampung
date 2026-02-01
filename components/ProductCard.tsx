
import React from 'react';
import { ProductItem } from '../types';

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a 
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
          loading="lazy"
        />
        {/* Store Badge Overlay */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-xl text-[9px] font-black text-white uppercase tracking-wider shadow-lg border border-white/10">
          {product.store}
        </div>
        
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <h3 className="text-[12px] md:text-sm font-bold text-gray-800 line-clamp-2 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        <div className="mt-auto flex flex-col gap-3">
          {product.price && (
            <div className="flex items-baseline gap-1">
              <span className="text-[10px] font-bold text-blue-500">Rp</span>
              <p className="text-sm md:text-base font-black text-gray-900 tracking-tighter">
                {product.price.replace('IDR. ', '')}
              </p>
            </div>
          )}
          
          {/* Prominent Shop Now Button */}
          <div className="w-full py-3 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl text-[11px] md:text-xs font-black text-center shadow-lg group-hover:shadow-blue-200 group-hover:scale-[1.02] transition-all flex items-center justify-center gap-2 active:scale-95">
            <span>Beli Sekarang</span>
            <i className="fa-solid fa-cart-shopping text-[10px] opacity-80"></i>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
