import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-navy"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Aura */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-40 h-40 bg-gold/10 rounded-full blur-3xl"
        />

        {/* Peacock Feather Animation */}
        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-32 h-32 mb-8"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            {/* The feather spine */}
            <motion.path
              d="M50 90 Q 50 50 50 10"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            
            {/* Feather eye */}
            <motion.path
              d="M50 10 C 30 30, 20 50, 50 70 C 80 50, 70 30, 50 10"
              fill="currentColor"
              fillOpacity="0.05"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <motion.circle
              cx="50" cy="35" r="12"
              className="text-peacock"
              fill="currentColor"
              fillOpacity="0.2"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="50" cy="35" r="5" className="text-navy" fill="currentColor" />
          </svg>
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-3xl gold-gradient tracking-[0.2em] italic"
          >
            Portraitwala
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-4"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 text-[9px] tracking-[0.5em] text-gold/40 uppercase font-sans"
        >
          Entering Art Space
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
