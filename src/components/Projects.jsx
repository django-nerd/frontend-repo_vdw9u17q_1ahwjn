import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Altibbi Platform Contributions',
    stack: 'Yii2 · Laravel',
    desc: 'Built internal APIs, RSS feeds, CMS features, and patient data dashboards.',
  },
  {
    title: 'Gaming Tournament App',
    stack: 'Flutter · Firebase',
    desc: 'Connecting gamers to venues and tournaments across Jordan.',
  },
  {
    title: 'HTU Scheduling System',
    stack: 'Algorithmic Planning',
    desc: 'Automated instructor scheduling using FIFO and preference logic.',
  },
  {
    title: 'ERP for Patient Appointments',
    stack: 'Web · Backend',
    desc: 'Improved doctor-patient communication and appointment efficiency.',
  },
];

const TiltCard = ({ title, stack, desc, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: idx * 0.05 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur-xl"
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
      <div className="absolute -inset-24 bg-[conic-gradient(at_50%_50%,#FF6DBA_0deg,transparent_120deg,#FF6DBA_240deg,transparent_360deg)] opacity-30 blur-2xl" />
    </div>

    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="rounded-full bg-[#FF6DBA]/20 px-3 py-1 text-xs">{stack}</span>
    </div>
    <p className="mt-3 text-sm text-[#F0F0F0]/80">{desc}</p>

    {/* micro preview animation */}
    <div className="mt-5 h-28 overflow-hidden rounded-lg border border-white/10 bg-black/30">
      <motion.div
        initial={{ x: -30, opacity: 0.6 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex h-full items-center gap-2 p-3"
      >
        <div className="h-20 w-28 rounded-md bg-gradient-to-br from-[#FF6DBA]/40 to-fuchsia-500/20" />
        <div className="h-20 flex-1 rounded-md bg-gradient-to-br from-cyan-400/20 to-emerald-400/10" />
      </motion.div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#121820] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <TiltCard key={p.title} title={p.title} stack={p.stack} desc={p.desc} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
