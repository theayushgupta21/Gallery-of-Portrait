import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGalleryStore } from '../../store/useGalleryStore';
import Watermark from '../ui/Watermark';

interface ImageCardProps {
  image: {
    id: string;
    url: string;
    title: string;
    category: string;
    caption?: string;
    height: number;
  };
  index: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const openModal = useGalleryStore((state) => state.openModal);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.08, 
        zIndex: 50,
        boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(212, 175, 55, 0.5)"
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: (index % 5) * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        scale: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative group cursor-pointer overflow-hidden rounded-lg bg-navy-dark aspect-[4/5] border border-white/5 transition-colors duration-300"
      onClick={() => openModal(index)}
    >
      <motion.img
        src={image.url}
        alt={image.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.19, 1, 0.22, 1) group-hover:scale-110"
        loading="lazy"
      />
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-2 font-sans font-semibold">
            {image.category}
          </p>
          <h3 className="text-white font-serif text-2xl mb-3 italic">
            {image.title}
          </h3>
          <p className="text-white/60 font-serif text-xs italic line-clamp-2 leading-relaxed border-l border-gold/40 pl-4">
            {image.caption}
          </p>
        </motion.div>
      </div>

      {/* Subtle Corner Accents */}
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/0 group-hover:border-gold/30 transition-all duration-700" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/0 group-hover:border-gold/30 transition-all duration-700" />

      {/* Signature Watermark */}
      <div className="absolute bottom-4 right-4 z-10 scale-75 origin-bottom-right group-hover:opacity-100 transition-opacity duration-700 opacity-70">
        <Watermark variant={index % 5 === 0 ? 'gold' : 'white'} />
      </div>
    </motion.div>
  );
};

export default ImageCard;
