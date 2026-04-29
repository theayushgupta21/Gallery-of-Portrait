import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGalleryStore } from '../store/useGalleryStore';
import ImageCard from '../components/gallery/ImageCard';
import Lightbox from '../components/gallery/Lightbox';
import AboutSection from '../components/ui/AboutSection';
import JournalSection from '../components/ui/JournalSection';

// Poetic Shayaris
const shayaris = [
  "Har aks ek kahani hai, har roshni ek dua hai.",
  "Khamoshi bhi kabhi kabhi sab kuch keh jaati hai.",
  "Roshni jab girti hai, to sach ubhar aata hai.",
  "Lamhe rukte nahi, bas mehsoos kiye jaate hain.",
  "Har chehra apni ek duniya chhupa ke rakhta hai.",
  "Hawaon mein bhi kuch ankahe alfaaz hote hain.",
  "Zameen par chalti zindagi aasman tak likhi hoti hai.",
  "Sukoon aksar shor ke beech milta hai.",
  "Har nazar mein ek adhoori kahani basi hoti hai.",
  "Waqt kabhi rukta nahi, par lamhe thahar jaate hain.",
  "Prarthna sirf alfaaz nahi, ek ehsaas hoti hai.",
  "Roshni aur saaye milkar sach banate hain.",
  "Zindagi har mod par khud ko likhti rehti hai.",
  "Har raasta kisi na kisi kahani tak le jaata hai.",
  "Khud se milna sabse gehra safar hota hai.",
  "Patton ki sar sar mein bhi ek geet chhupa hota hai.",
  "Har kadam ek nayi dastaan shuru karta hai.",
  "Chehre badalte hain, par ehsaas wahi rehte hain.",
  "Khushboo ki tarah kuch pal bas reh jaate hain.",
  "Har pal apni ek khamosh awaaz rakhta hai.",
  "Aankhon mein basi baatein kabhi puri nahi hoti.",
  "Sukoon kisi jagah nahi, ek mehsoos hai.",
  "Raat bhi kabhi kabhi roshni se bhari hoti hai.",
  "Har saans ek nayi kahani likhti hai.",
  "Jo dikhta hai, wo hamesha sach nahi hota.",
  "Har mod par zindagi thodi si badal jaati hai.",
  "Ehsaas lafzon se zyada gehre hote hain.",
  "Khamoshi mein bhi ek poori duniya hoti hai.",
  "Har muskurahat ke peeche ek kahani hoti hai.",
  "Roshni kabhi akeli nahi aati, saaye saath laati hai.",
  "Har lamha apne aap mein ek tasveer hai.",
  "Sukoon chhoti chhoti baaton mein milta hai.",
  "Har nazar kuch kehkar chali jaati hai.",
  "Zindagi kabhi seedhi nahi hoti, par khoobsurat zaroor hoti hai.",
  "Har kahani apna ek waqt maangti hai.",
  "Hawa bhi kabhi kabhi yaadein le aati hai.",
  "Har pal ka apna ek rang hota hai.",
  "Jo mehsoos hota hai, wahi asal mein zinda hota hai.",
  "Sukoon kisi shabd mein nahi, ek lamhe mein hota hai.",
  "Har safar khud se milne tak ka hota hai.",
  "Aksar jo chhup jata hai, wahi sabse gehra hota hai.",
  "Har din ek nayi roshni lekar aata hai.",
  "Har kahani kisi aankhon se shuru hoti hai.",
  "Waqt sab kuch sikha deta hai, bina bole.",
  "Har tasveer ek khamosh ehsaas hoti hai.",
  "Zindagi rukti nahi, bas badalti rehti hai.",
  "Har saaya bhi roshni ka hissa hota hai.",
  "Lamhe chhote hote hain, par yaadein gehri.",
  "Har dil apni kahani khud likhta hai.",
  "Sukoon wahi milta hai jahan dil thehar jaaye.",
];

const assetModules = import.meta.glob('../assets/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true, query: '?url', import: 'default' });
const assetUrls = Object.values(assetModules) as string[];

// Helper to generate asset data
const generateAssetImages = () => {
  const categories = ['Portrait', 'Street', 'Divine', 'Nature', 'Story'];

  return assetUrls.map((url, i) => ({
    id: `img-${i}`,
    url: url,
    title: `Eternal Frame ${i + 1}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    caption: shayaris[i] || shayaris[i % shayaris.length],
    height: i % 4 === 0 ? 550 : (i % 3 === 0 ? 400 : (i % 2 === 0 ? 300 : 480)),
  })).slice(0, 50); // The user requested 50 frames, so limit to 50
};

const Home = () => {
  const setImages = useGalleryStore((state) => state.setImages);
  const images = useGalleryStore((state) => state.images);

  useEffect(() => {
    if (images.length === 0) {
      setImages(generateAssetImages());
    }
  }, [images.length, setImages]);

  return (
    <div className="min-h-screen pb-24">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-navy-dark">
        {/* Divine Aura Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] aura-glow rounded-full -z-10"
        />

        {/* Floating Particles (CSS only for perf) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-pulse-slow opacity-30" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-peacock rounded-full animate-pulse-slow delay-700 opacity-20" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse-slow delay-1000 opacity-30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="z-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8"
          >
            <svg viewBox="0 0 100 20" className="w-40 h-auto text-gold/30 mx-auto">
              <path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif gold-gradient tracking-tighter leading-none italic">
              Portraitwalagallery
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-6 w-full max-w-2xl mx-auto"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl font-serif italic text-gold/60 tracking-[0.2em] uppercase"
          >
            Frames that feel. Stories that stay.
          </motion.p>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="w-[1px] bg-gradient-to-b from-gold/50 to-transparent mx-auto mt-16"
          />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-12"
        >
          <div>
            <span className="text-gold text-xs tracking-[0.5em] uppercase mb-4 block">Visual Journey</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-2 italic">The Showcase</h2>
          </div>
          <div className="mt-8 md:mt-0 flex space-x-12 text-[10px] tracking-[0.4em] uppercase text-white/30 font-sans">
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1"
            >
              Art Gallery
            </button>
            <button
              onClick={() => document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1"
            >
              Journal
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1"
            >
              About
            </button>
          </div>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <ImageCard key={image.id} image={image} index={index} />
          ))}
        </div>
      </section>

      {/* Journal / Blog Section */}
      <JournalSection />

      {/* About / Identity Section */}
      <AboutSection />

      <Lightbox />

      {/* Subtle Footer Quote */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="font-serif italic text-gold/60 text-lg max-w-xl mx-auto px-6">
          "Photography is the only language that can be understood anywhere in the world."
        </p>
        <p className="mt-8 text-[10px] tracking-[0.4em] text-white/50 uppercase">PortraitwalaGallery • Since 2026</p>
      </footer>
    </div>
  );
};

export default Home;
