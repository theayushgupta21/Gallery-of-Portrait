import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

// Components
import Sidebar from './components/layout/Sidebar';
import Loader from './components/ui/Loader';
import ScrollToTop from './components/ui/ScrollToTop';
import Cursor from './components/ui/Cursor';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Grain Overlay */}
        <div className="grain-overlay" />
        
        <Cursor />
        
        <AnimatePresence>
          {loading && <Loader key="loader" />}
        </AnimatePresence>
        
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <ScrollToTop />
            <Sidebar />
            <main>
              <AnimatedRoutes />
            </main>
          </motion.div>
        )}
      </div>
    </Router>
  );
}

export default App;
