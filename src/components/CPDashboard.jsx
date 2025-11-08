import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-white">
    <div className="text-2xl font-bold">{value}</div>
    <div className="mt-1 text-xs text-[#F0F0F0]/70">{label}</div>
  </div>
);

const Graph = () => {
  // simple animated bars
  const bars = useMemo(() => Array.from({ length: 14 }, () => Math.floor(20 + Math.random() * 80)), []);
  return (
    <div className="flex items-end gap-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0.5 }}
          whileInView={{ height: `${h}%`, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.03 }}
          className="w-3 rounded-sm bg-gradient-to-t from-[#FF6DBA] to-fuchsia-400"
          style={{ minHeight: 8 }}
        />
      ))}
    </div>
  );
};

const AlgorithmArena = () => {
  const array = [5, 1, 4, 2, 8];
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white">
      <div className="mb-2 text-sm text-[#F0F0F0]/80">Algorithm Arena · Bubble Sort visualization</div>
      <div className="flex items-end gap-2">
        {array.map((n, i) => (
          <motion.div
            key={i}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex h-24 w-10 items-end justify-center rounded-md bg-gradient-to-t from-cyan-600/40 to-emerald-400/30"
          >
            <span className="mb-1 text-xs">{n}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CPDashboard = () => {
  return (
    <section id="cp" className="relative w-full bg-[#121820] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Competitive Programming
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <Stat label="Problems Solved" value="250+" />
            <Stat label="Contests" value="JCPC & National" />
            <Stat label="Languages" value="C++ | Python" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
            <div className="mb-3 text-sm text-[#F0F0F0]/80">Ranking Progress</div>
            <div className="h-40"><Graph /></div>
          </div>
          <AlgorithmArena />
        </div>
      </div>
    </section>
  );
};

export default CPDashboard;
