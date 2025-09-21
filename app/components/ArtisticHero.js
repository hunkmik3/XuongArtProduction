'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { CircleMark, ArrowSplashing, WaveDivider } from './SVGElements';

export default function ArtisticHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" data-scroll-section>
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
        data-video
        onError={(e) => {
          // Fallback to gradient background if video fails to load
          e.target.style.display = 'none';
        }}
      />
      
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
      
      {/* Artistic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      
      {/* Brand Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle Marks */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <CircleMark size={48} color="#FFD200" />
        </motion.div>
        
        {/* Arrow Splashing */}
        <motion.div
          className="absolute top-40 right-20"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowSplashing size={40} color="#D0232E" />
        </motion.div>
        
        {/* Circle Mark */}
        <motion.div
          className="absolute bottom-40 left-20"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <CircleMark size={32} color="#00673A" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.5}>
            <motion.h1
              className="text-white font-heading text-display md:text-display-sm lg:text-display tracking-tight mb-6"
              data-scroll
              data-scroll-speed="0.5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="block">XƯỞNG</span>
              <span className="block text-accent">ART</span>
              <span className="block">PRODUCTION</span>
            </motion.h1>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <motion.p
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Nơi nghệ thuật và công nghệ hòa quyện, 
              tạo nên những tác phẩm video đầy cảm xúc và sáng tạo
            </motion.p>
          </ScrollReveal>

          <ScrollReveal delay={1.1}>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#featured-projects"
                className="px-8 py-4 bg-primary text-white rounded-full font-heading hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cta
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('featured-projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Khám phá dự án
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-heading hover:border-white/60 hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cta
              >
                Liên hệ ngay
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollReveal delay={1.5}>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-heading">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
