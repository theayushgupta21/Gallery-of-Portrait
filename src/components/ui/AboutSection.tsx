import React from 'react';
import { motion } from 'framer-motion';

import profileImg from '../../assets/profile/photo_2026-01-13_20-47-52.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-6 pt-32 pb-12 relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Profile Image / Creative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass p-2 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden relative group border-2 border-gold/20">
                <img
                  src={profileImg}
                  alt="Ayush Gupta - Portraitwala"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              {/* Soft Divine Glow Border */}
              <div className="absolute -inset-4 rounded-full border border-gold/10 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-full border border-gold/5 animate-pulse-slow delay-700" />
            </div>

            {/* Floating Stats/Badges */}

          </motion.div>

          {/* Text Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-xs tracking-[0.5em] uppercase mb-4 block font-semibold">The Artist</span>
              <h2 className="text-6xl md:text-7xl font-serif gold-gradient italic mb-2 tracking-tighter">Ayush Gupta</h2>
              <p className="text-white/40 text-sm tracking-[0.3em] uppercase">aka Portraitwala</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed border-l-2 border-gold/30 pl-8"
                >
                  "I don’t just capture photos, I capture moments that speak.
                  Every frame holds a story, every expression holds a feeling."
                </motion.p>
              </div>

              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-gray-400 font-sans leading-relaxed text-lg whitespace-pre-line"
                >
                  Seven years ago, in 2019, I attended my uncle’s wedding. That was the first time I experienced a <strong className="text-gold">Google Pixel</strong>  it was a newly launched phone back then. I clicked a photo in low light, and surprisingly, it turned out beautifully. Everyone appreciated it  “Wow, that’s a good one!”

                  That moment stayed with me. My fufa ji even said in front of my father, “I’m sure he will become a great photographer.”
                  Those words meant everything.

                  From that day on, I started capturing emotions, moments, and frames that truly attracted me. Photography became more than just clicking pictures  it became a way of seeing life.

                  Over time, I kept learning by shooting and observing the work of inspiring photographers like <strong className="text-gold">Ganesh Vanare</strong>, <strong className="text-gold">Vineet Vohra</strong>, and <strong className="text-gold">Raghu Rai</strong>. Their vision helped me grow, but I always believed in one thing  never limit yourself.

                  Be free, like light.
                  Be real, like emotions.
                  Because memories aren’t created… they are felt.

                  This is my journey
                  <strong className="text-gold">Ayush Gupta</strong>
                  <span className="text-gold/60 italic"> (aka @portraitwalagallery)</span>
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center space-x-3 text-gold/60">
                <span className="text-xs">📸 Storytelling</span>
              </div>
              <div className="flex items-center space-x-3 text-gold/60">
                <span className="text-xs">❤️ Emotions</span>
              </div>
              <div className="flex items-center space-x-3 text-gold/60">
                <span className="text-xs">✨ Artistic Vibe</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <a
                href="https://instagram.com/portraitwalagallery"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-4 group"
              >
                <div className="p-4 rounded-full glass border border-gold/20 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <span className="text-xs font-bold">IG</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40 group-hover:text-gold transition-colors">Connect on Instagram</p>
                  <div className="w-full h-[1px] bg-gold/30 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Peacock Feather Divider */}
        <div className="mt-16 flex items-center justify-center space-x-12 opacity-10">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold" />
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-gold">
            <path d="M50 10 Q 30 50 50 90 Q 70 50 50 10" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="30" r="5" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
