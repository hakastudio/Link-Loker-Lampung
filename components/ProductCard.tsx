
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
      className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
        <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-xl text-[9px] font-black text-white uppercase tracking-wider">
          {product.store}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[12px] md:text-sm font-bold text-gray-800 line-clamp-2 leading-snug mb-3">
          {product.title}
        </h3>
        <div className="mt-auto">
          {product.price && (
            <p className="text-sm md:text-base font-black text-gray-900 mb-2">
              {product.price.replace('IDR. ', 'Rp ')}
            </p>
          )}
          <div className="w-full py-3 bg-blue-600 text-white rounded-2xl text-[11px] font-black text-center shadow-lg">
            Beli
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
