import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  const handleExplore = () => {
    const el = document.getElementById('career');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] w-full bg-[#0b1020] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_70%_10%,rgba(99,102,241,0.18),transparent_60%)]" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        >
          Fathi Al-Saadi — <span className="text-fuchsia-400">Software Engineer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-3xl text-white/90 text-base sm:text-lg"
        >
          Competitive Programmer · Algorithm Architect · Systems Builder
        </motion.p>

        {/* Floating binary rain and tags */}
        <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {['C++', 'Laravel', 'Vue.js', 'Algorithms'].map((chip, idx) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.08 }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-md"
            >
              {chip}
            </motion.span>
          ))}
        </div>

        <motion.button
          onClick={handleExplore}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group mt-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 hover:shadow-fuchsia-500/30 focus:outline-none"
        >
          <span className="mr-1 inline-block transition-transform group-hover:translate-x-0.5">Explore</span>
          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero3D;
