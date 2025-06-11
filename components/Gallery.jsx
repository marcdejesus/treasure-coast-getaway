"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = ({ images, visibleCount = 6 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState({});

  // Only show the first 'visibleCount' images in the grid
  const visibleImages = images.slice(0, visibleCount);

  const openGallery = (index = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsOpen(false);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  const goToNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = (index) => {
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  const handleImageStart = (index) => {
    setImageLoading(prev => ({ ...prev, [index]: true }));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          goToPrevious(e);
          break;
        case 'ArrowRight':
          goToNext(e);
          break;
        case 'Escape':
          closeGallery();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Gallery Grid - showing only visibleCount images with optimized loading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {visibleImages.map((image, index) => (
          <div 
            key={index} 
            className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2"
            onClick={() => openGallery(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGallery(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${image.alt} in gallery`}
          >
            <div className="relative h-48 sm:h-56 md:h-64 w-full bg-gray-100">
              {imageLoading[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
                </div>
              )}
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform group-hover:scale-105 duration-300"
                onLoadStart={() => handleImageStart(index)}
                onLoad={() => handleImageLoad(index)}
                priority={index < 3} // Prioritize first 3 images
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                quality={75}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Photos Button */}
      <div className="text-center mt-8">
        <Button 
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-base font-medium"
          onClick={() => openGallery(0)}
          aria-label={`View all ${images.length} photos in gallery`}
        >
          View All Photos {images.length > visibleCount && `(${images.length})`}
        </Button>
      </div>

      {/* Fullscreen Gallery Modal - showing ALL images with enhanced accessibility */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col justify-center items-center p-2 sm:p-4 md:p-8"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          {/* Close Button */}
          <button 
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-teal-400 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            onClick={closeGallery}
            aria-label="Close gallery"
            autoFocus
          >
            <X size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-white text-sm sm:text-base bg-black bg-opacity-50 px-3 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
          
          {/* Current Image */}
          <div 
            className="relative w-full max-w-6xl h-[60vh] sm:h-[70vh] my-2 sm:my-4 overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              className="object-contain"
              priority
              quality={85}
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-60 text-white py-2 px-4">
              <p className="text-sm sm:text-base">{images[currentIndex].alt}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="w-full max-w-6xl flex justify-between px-2 mb-2">
            <button 
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 sm:p-4 rounded-full transition-colors focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              onClick={goToPrevious}
              aria-label="Previous image"
              disabled={images.length <= 1}
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 sm:p-4 rounded-full transition-colors focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              onClick={goToNext}
              aria-label="Next image"
              disabled={images.length <= 1}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Thumbnails - showing ALL images with improved mobile experience */}
          <div className="w-full max-w-6xl overflow-x-auto py-2 mt-1">
            <div className="flex space-x-2 min-w-min px-2">
              {images.map((image, index) => (
                <button 
                  key={index}
                  className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden transition-all focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                    index === currentIndex ? 'ring-2 ring-teal-500 scale-110' : 'hover:scale-105'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  aria-label={`View image ${index + 1}: ${image.alt}`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                      quality={60}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;