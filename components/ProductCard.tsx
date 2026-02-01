
import React, { useState, useEffect, useRef } from 'react';
import { ProductItem } from '../types';

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01, 
        rootMargin: '100px' // Load slightly before they come into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper to render stars with improved logic for "No Rating"
  const renderStars = (rating?: number) => {
    const hasRating = rating !== undefined && rating > 0;
    return (
      <div className={`flex items-center gap-0.5 ${hasRating ? 'text-yellow-400' : 'text-gray-300'} text-[10px]`}>
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fa-solid fa-star ${hasRating && i < Math.floor(rating) ? 'opacity-100' : 'opacity-30'}`}
          ></i>
        ))}
      </div>
    );
  };

  const formatCount = (count: number = 0) => {
    if (count >= 1000) return `${(count / 1000).toFixed(1)}rb+`;
    return count;
  };

  // Placeholder image (minimal base64)
  const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  return (
    <a 
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <img 
          ref={imgRef}
          src={isVisible ? product.imageUrl : placeholder}
          data-src={product.imageUrl}
          loading="lazy"
          alt={product.title} 
          className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        />
        {/* Store Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-xl text-[8px] font-black text-white uppercase tracking-widest z-10">
          {product.store}
        </div>
        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[11px] md:text-[13px] font-bold text-gray-800 line-clamp-2 leading-tight mb-2 min-h-[2.5em]">
          {product.title}
        </h3>
        
        {/* Refined Rating & Reviews Section */}
        <div className="flex items-center gap-2 mb-4">
          {renderStars(product.rating)}
          <span className="text-[9px] font-bold text-gray-400 mt-0.5">
            {product.reviewsCount ? `(${formatCount(product.reviewsCount)})` : 'Belum ada ulasan'}
          </span>
        </div>

        <div className="mt-auto space-y-3">
          {product.price ? (
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">Harga Terbaik</span>
              <p className="text-sm md:text-base font-black text-blue-600">
                {product.price.replace('IDR. ', 'Rp ')}
              </p>
            </div>
          ) : (
            <div className="h-[34px]"></div> // Spacing if no price
          )}
          
          <div className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black text-center shadow-lg group-hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
            <span>Cek Produk</span>
            <i className="fa-solid fa-arrow-right text-[8px] group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;