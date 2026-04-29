import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Journal', path: '#journal' },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* Cinematic Menu Trigger */}
      <motion.button
        onClick={toggleSidebar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-8 left-8 z-[100] w-14 h-14 glass flex items-center justify-center text-gold rounded-full transition-shadow hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
               <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex flex-col space-y-1.5 items-center">
              <div className="w-6 h-[1px] bg-gold group-hover:w-8 transition-all" />
              <div className="w-4 h-[1px] bg-gold group-hover:w-8 transition-all" />
              <div className="w-6 h-[1px] bg-gold group-hover:w-8 transition-all" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Fullscreen Blurred Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="fixed inset-0 bg-navy-dark/40 backdrop-blur-md z-[80]"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="fixed top-0 left-0 h-full w-full md:w-[450px] bg-navy/95 border-r border-white/5 z-[90] p-12 md:p-20 flex flex-col justify-between"
            >
              {/* Animated Flute Line Decoration */}
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-24"
                >
                  <h2 className="font-serif text-4xl gold-gradient tracking-tighter mb-2 italic">Portraitwala</h2>
                  <div className="w-12 h-[1px] bg-gold/50" />
                  <p className="text-gold/30 text-[10px] tracking-[0.4em] uppercase mt-4 font-sans">Frames that feel</p>
                </motion.div>

                <nav className="space-y-10">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {item.path.startsWith('#') ? (
                        <button
                          onClick={() => {
                            toggleSidebar();
                            document.getElementById(item.path.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="group relative flex items-center"
                        >
                          <span className="text-4xl md:text-5xl font-serif italic transition-all duration-500 text-white/40 hover:text-white">
                            {item.name}
                          </span>
                          <motion.div 
                            className="absolute -bottom-2 left-0 h-[1px] bg-gold"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.4 }}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={toggleSidebar}
                          className="group relative flex items-center"
                        >
                          <span className={`text-4xl md:text-5xl font-serif italic transition-all duration-500 ${
                            location.pathname === item.path ? 'text-gold' : 'text-white/40 hover:text-white'
                          }`}>
                            {item.name}
                          </span>
                          
                          {/* Animated Underline */}
                          <motion.div 
                            className="absolute -bottom-2 left-0 h-[1px] bg-gold"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.4 }}
                          />
                          
                          {location.pathname === item.path && (
                            <motion.div 
                              layoutId="activeNav"
                              className="absolute -left-8 w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                            />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex space-x-8 mb-12">
                    <span className="font-serif italic text-lg">IG</span>
                  <a href="mailto:hello@portraitwala.com" className="text-white/30 hover:text-gold transition-all hover:scale-110">
                    <Mail size={22} />
                  </a>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-sans">
                    © 2024 Portraitwala • Digital Art Space
                  </p>
                  <p className="text-gold/20 text-[9px] tracking-[0.2em] font-sans">
                    DIVINE • CALM • MYSTICAL • EMOTIONAL
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
