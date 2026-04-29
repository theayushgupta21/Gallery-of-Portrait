
import { motion } from 'framer-motion';
import { Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Background Divine Aura */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-peacock/5 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Left Side: Story & Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-5"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase mb-6 block font-semibold">Get in Touch</span>
          <h1 className="text-6xl md:text-7xl font-serif gold-gradient mb-10 leading-[1.1] italic">
            Let’s Create Something Timeless
          </h1>
          <p className="text-xl text-white/50 font-serif leading-relaxed mb-16 italic border-l border-gold/30 pl-8">
            Every soul has a story. Every story deserves a frame that feels divine. Let's capture your essence in the most artistic way possible.
          </p>

          <div className="space-y-12">
            <div className="group cursor-pointer">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] mb-4">Official Email</p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-serif italic group-hover:text-gold transition-colors">hello@portraitwala.com</span>
                <ArrowUpRight className="text-gold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" size={20} />
              </div>
            </div>

            <div className="group cursor-pointer">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] mb-4">Instagram Presence</p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-serif italic group-hover:text-gold transition-colors">@portraitwalagallery</span>
                <ArrowUpRight className="text-gold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" size={20} />
              </div>
            </div>
          </div>
          
          {/* Decorative Flute-like thin lines */}
          <div className="mt-24 flex space-x-2">
             <div className="w-32 h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
             <div className="w-8 h-[1px] bg-gold/20" />
          </div>
        </motion.div>

        {/* Right Side: Cinematic Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-7"
        >
          <div className="glass p-12 md:p-16 rounded-sm relative overflow-hidden">
            {/* Subtle light leak effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-all text-white font-serif italic text-lg peer placeholder-transparent"
                    placeholder="Your Name"
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] text-gold uppercase tracking-[0.3em] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/20 peer-focus:-top-4 peer-focus:text-gold">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-all text-white font-serif italic text-lg peer placeholder-transparent"
                    placeholder="Email Address"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] text-gold uppercase tracking-[0.3em] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/20 peer-focus:-top-4 peer-focus:text-gold">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-all text-white font-serif italic text-lg peer placeholder-transparent resize-none"
                  placeholder="Tell your story..."
                  id="message"
                />
                <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] text-gold uppercase tracking-[0.3em] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/20 peer-focus:-top-4 peer-focus:text-gold">
                  Tell your story...
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 mt-8 flex items-center justify-center space-x-4 bg-gold text-navy font-bold uppercase tracking-[0.4em] text-xs hover:bg-gold-light transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)] group"
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </motion.button>
            </form>
          </div>
          
          <div className="mt-12 text-center md:text-right">
             <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Based in India • Available Worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
