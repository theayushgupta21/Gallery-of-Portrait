import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Share2, Maximize2 } from 'lucide-react';
import { useGalleryStore } from '../../store/useGalleryStore';
import Watermark from '../ui/Watermark';

const Lightbox = () => {
  const { images, isModalOpen, currentIndex, closeModal, nextImage, prevImage } = useGalleryStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, closeModal, nextImage, prevImage]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentImage?.title || 'Portraitwala Gallery',
          text: currentImage?.caption || 'Check out this beautiful portrait.',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!isModalOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[150] flex items-center justify-center bg-navy-dark/95 backdrop-blur-2xl px-6 md:px-12"
      >
        {/* Background Aura Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-10" />

        {/* Toolbar */}
        <div className="absolute top-8 left-0 w-full px-8 md:px-12 flex justify-between items-center z-[160]">
          <div className="flex items-center space-x-6">
             <div className="hidden md:block">
                <h4 className="text-gold text-[10px] tracking-[0.4em] uppercase font-sans font-semibold mb-1">Portraitwala</h4>
                <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase font-sans">Art Gallery</p>
             </div>
          </div>
          <div className="flex items-center space-x-8">
            <button 
              onClick={handleShare}
              className="text-white/40 hover:text-gold transition-colors flex items-center space-x-2 group"
            >
              <Share2 size={20}/>
              <span className="text-[9px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Share</span>
            </button>
            <button className="text-white/40 hover:text-gold transition-colors"><Maximize2 size={20}/></button>
            <button
              onClick={closeModal}
              className="group flex items-center space-x-3 text-white/50 hover:text-white transition-colors"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase hidden md:block">Close</span>
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-gold transition-all z-[160] p-4 hover:scale-110"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-gold transition-all z-[160] p-4 hover:scale-110"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 100 }}
            className="lg:col-span-8 relative group"
          >
            <div className="relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] rounded-sm overflow-hidden bg-navy">
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gold/20" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gold/20" />
              
              {/* Signature Watermark */}
              <div className="absolute bottom-8 right-8 z-10 opacity-90">
                <Watermark variant="gold" className="w-48" />
              </div>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            key={`info-${currentImage.id}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <p className="text-gold text-xs tracking-[0.5em] uppercase font-sans mb-4 font-semibold">
                  {currentImage.category}
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-white italic mb-6 leading-tight">
                  {currentImage.title}
                </h2>
                <div className="w-16 h-[2px] bg-gold/50" />
              </div>

              <div className="relative pt-8">
                 <svg className="absolute -top-4 -left-4 w-12 h-12 text-gold/10" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                 </svg>
                 <p className="text-white/80 font-serif text-xl md:text-2xl italic leading-relaxed pl-6 border-l border-gold/20">
                    {currentImage.caption}
                 </p>
              </div>

              <div className="pt-12 flex items-center justify-between text-white/30 text-[10px] tracking-[0.4em] uppercase font-sans">
                <span>{currentIndex + 1} / {images.length}</span>
                <span className="h-[1px] flex-grow mx-8 bg-white/5" />
                <span>Eternal Frame</span>
              </div>

              {/* AI Features Placeholder */}
              <div className="pt-8 opacity-20 hover:opacity-100 transition-opacity">
                <div className="flex items-center space-x-3 text-[9px] tracking-[0.3em] uppercase text-gold/60 border border-gold/10 p-3 rounded-sm cursor-help">
                   <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                   <span>AI Features Coming Soon: Auto-Caption & Emotion Detection</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-12 left-0 w-full px-12 flex justify-center pointer-events-none">
           <div className="flex space-x-2">
              {images.slice(Math.max(0, currentIndex - 2), Math.min(images.length, currentIndex + 3)).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-[2px] transition-all duration-500 ${i === 2 ? 'w-12 bg-gold' : 'w-4 bg-white/10'}`} 
                />
              ))}
           </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
