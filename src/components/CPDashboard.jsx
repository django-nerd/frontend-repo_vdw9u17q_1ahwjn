import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white">
    <div className="text-2xl font-bold">{value}</div>
    <div className="mt-1 text-xs text-white/70">{label}</div>
  </div>
);

const Bars = () => {
  const bars = useMemo(() => Array.from({ length: 18 }, () => Math.floor(20 + Math.random() * 80)), []);
  return (
    <div className="flex items-end gap-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0.5 }}
          whileInView={{ height: `${h}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.03 }}
          className="w-3 rounded-sm bg-gradient-to-t from-fuchsia-500 to-violet-400"
          style={{ minHeight: 8 }}
        />
      ))}
    </div>
  );
};

const Matrix = () => {
  const size = 8;
  return (
    <div className="grid grid-cols-8 gap-1">
      {Array.from({ length: size * size }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: [0.2, 1, 0.2] }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: (i % size) * 0.05 }}
          className="h-4 w-4 rounded-sm bg-cyan-400/30"
        />
      ))}
    </div>
  );
};

const Arena = () => {
  const nodes = 9;
  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-black/30">
      {/* nodes */}
      {Array.from({ length: nodes }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="absolute h-3 w-3 rounded-full bg-fuchsia-400"
          style={{
            left: `${10 + (i % 3) * 35}%`,
            top: `${15 + Math.floor(i / 3) * 28}%`,
            boxShadow: '0 0 12px rgba(244,114,182,0.7)'
          }}
        />
      ))}
      {/* moving particle */}
      <motion.div
        className="absolute h-1 w-1 rounded-full bg-cyan-300"
        animate={{ x: ["5%", "85%", "5%"], y: ["20%", "70%", "20%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: '0 0 10px rgba(103,232,249,0.9)' }}
      />
    </div>
  );
};

const CPDashboard = () => {
  return (
    <section id="cp" className="relative w-full bg-[#0b1020] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Algorithm Warzone
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <Stat label="Problems Solved" value="250+" />
            <Stat label="Avg Solve Time" value="12m" />
            <Stat label="Languages" value="C++ · Python" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
            <div className="mb-3 text-sm text-white/80">Ranking Progress</div>
            <div className="h-40"><Bars /></div>
            <div className="mt-4 text-xs text-white/70">Binary waves · Pulsing nodes</div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
              <div className="mb-2 text-sm text-white/80">Adjacency Matrix</div>
              <Matrix />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
              <div className="mb-2 text-sm text-white/80">Flow Network</div>
              <Arena />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPDashboard;
