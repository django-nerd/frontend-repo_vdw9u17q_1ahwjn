import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  const handleExplore = () => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] w-full bg-[#121820] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#FF6DBA]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        >
          Fathi Al-Saadi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-3xl text-[#F0F0F0]/90 text-base sm:text-lg"
        >
          Software Engineer · Competitive Programmer · Builder of Intelligent Systems
        </motion.p>

        {/* Floating tags */}
        <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
          className="group mt-10 rounded-full bg-gradient-to-r from-[#FF6DBA] to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 ring-1 ring-white/10 hover:shadow-pink-500/30 focus:outline-none"
        >
          <span className="mr-1 inline-block transition-transform group-hover:translate-x-0.5">Explore My Work</span>
          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero3D;
