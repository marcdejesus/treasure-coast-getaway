"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = ({ images, visibleCount = 6 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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
      {/* Gallery Grid - showing only visibleCount images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <div 
            key={index} 
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <div className="relative h-64 w-full">
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Photos Button */}
      <div className="text-center mt-8">
        <Button 
          className="bg-teal-600 hover:bg-teal-700 text-white"
          onClick={() => openGallery(0)}
        >
          View All Photos {images.length > visibleCount && `(${images.length})`}
        </Button>
      </div>

      {/* Fullscreen Gallery Modal - showing ALL images */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-4 sm:p-8"
          onClick={closeGallery}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-sm sm:text-base">
            {currentIndex + 1} / {images.length}
          </div>
          
          {/* Current Image */}
          <div 
            className="relative w-full max-w-5xl h-[70vh] my-4 overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-contain"
              priority
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white py-2">
              {images[currentIndex].alt}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="w-full max-w-5xl flex justify-between px-2">
            <button 
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-4 rounded-full transition-colors"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-4 rounded-full transition-colors"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Thumbnails - showing ALL images */}
          <div className="w-full max-w-5xl overflow-x-auto py-4 mt-2">
            <div className="flex space-x-2 min-w-min">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
                    index === currentIndex ? 'ring-2 ring-teal-500' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;