import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

import journalImg1 from '../../assets/creative jornal/IMG20230508063801.jpg';
import journalImg2 from '../../assets/creative jornal/IMG_20230314_0851441.jpg';
import journalImg3 from '../../assets/creative jornal/IMG_8543.jpg';

const journalPosts = [
  {
    id: 1,
    date: "Oct 12, 2024",
    title: "The Silence of Shadows",
    excerpt: "In the quiet corners of the city, I found a story that wasn't being told. It was written in the way the light hit the ancient stone...",
    image: journalImg1,
    readTime: "4 min read"
  },
  {
    id: 2,
    date: "Sep 28, 2024",
    title: "Capturing the Divine Aura",
    excerpt: "There's a specific frequency of light that only exists at dawn. It's when the world is half-awake, and every soul feels a bit closer to the mystical...",
    image: journalImg2,
    readTime: "6 min read"
  },
  {
    id: 3,
    date: "Aug 15, 2024",
    title: "Stories Behind the Smile",
    excerpt: "Portraits are more than just faces. They are maps of experiences, etched in the subtle crinkle of an eye or the set of a jaw...",
    image: journalImg3,
    readTime: "5 min read"
  }
];

const JournalSection = () => {
  return (
    <section id="journal" className="container mx-auto px-6 py-32 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/5 pb-12">
        <div className="max-w-2xl">
          <span className="text-gold text-xs tracking-[0.5em] uppercase mb-4 block font-semibold flex items-center">
            <BookOpen size={14} className="mr-3" /> Creative Journal
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-white italic tracking-tighter">
            Stories & <span className="gold-gradient">Reflections</span>
          </h2>
          <p className="text-white/40 mt-6 font-sans tracking-wide leading-relaxed">
            A deeper dive into the thoughts, techniques, and emotions behind the frames. 
            Welcome to my digital diary of light and shadow.
          </p>
        </div>
        <motion.button
          whileHover={{ x: 10 }}
          className="mt-8 md:mt-0 flex items-center space-x-3 text-gold/60 text-[10px] tracking-[0.3em] uppercase group"
        >
          <span>View All Stories</span>
          <ArrowUpRight size={14} className="group-hover:text-gold transition-colors" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {journalPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8 glass">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1s] scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 left-4">
                 <span className="bg-navy/80 backdrop-blur-md text-gold text-[8px] tracking-[0.2em] px-3 py-1 uppercase rounded-full border border-gold/10">
                   {post.readTime}
                 </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gold/40 text-[9px] tracking-[0.3em] uppercase">{post.date}</p>
              <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors italic leading-tight">
                {post.title}
              </h3>
              <p className="text-white/40 text-sm font-sans leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="pt-4 overflow-hidden">
                <div className="w-8 h-[1px] bg-gold group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
};

export default JournalSection;
