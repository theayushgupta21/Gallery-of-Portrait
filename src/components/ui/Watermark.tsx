import React from 'react';
import { motion } from 'framer-motion';

interface WatermarkProps {
  className?: string;
  variant?: 'white' | 'gold';
}

const Watermark: React.FC<WatermarkProps> = ({ className = '', variant = 'white' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg
        viewBox="0 0 200 60"
        className={`w-32 md:w-40 h-auto opacity-50 filter blur-[0.2px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${
          variant === 'gold' ? 'text-gold' : 'text-white'
        }`}
      >
        <defs>
          <linearGradient id="signature-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Abstract Signature Path (Handwritten feel) */}
        <path
          d="M20 40 Q 40 10, 60 40 T 100 40 T 140 30 T 180 40"
          fill="none"
          stroke="url(#signature-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <text
          x="100"
          y="52"
          textAnchor="middle"
          className="font-serif italic text-[10px] tracking-[0.3em] uppercase"
          fill="currentColor"
        >
          portraitwalagallery
        </text>
      </svg>
    </motion.div>
  );
};

export default Watermark;
