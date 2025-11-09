import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    title: 'Altibbi Internal Features',
    stack: 'Yii2 · Laravel · Vue',
    desc: 'APIs, dashboards, CMS enhancements, and RSS integrations across large-scale codebases.',
  },
  {
    title: 'Gaming Tournament App',
    stack: 'Flutter · Firebase',
    desc: 'A platform connecting gamers to venues and tournaments with real-time updates.',
  },
  {
    title: 'HTU Instructor Scheduling System',
    stack: 'Algorithms · Automation',
    desc: 'FIFO logic and preference-based automation for academic scheduling.',
  },
  {
    title: 'ERP for Patient Appointments',
    stack: 'Full Stack',
    desc: 'End-to-end system for clinic operations, scheduling, and patient communications.',
  },
  {
    title: 'Jordanian Research Platform',
    stack: 'Web · Data',
    desc: 'Portal for curating and exploring local scientific content with search and analytics.',
  },
];

const ProjectCard = ({ p, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(p)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white backdrop-blur-xl"
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
      <div className="absolute -inset-24 bg-[conic-gradient(at_50%_50%,#8b5cf6_0deg,transparent_120deg,#ec4899_240deg,transparent_360deg)] opacity-30 blur-2xl" />
    </div>
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs">{p.stack}</span>
    </div>
    <p className="mt-3 text-sm text-white/80">{p.desc}</p>
    <div className="mt-5 h-28 overflow-hidden rounded-lg border border-white/10 bg-black/30">
      <motion.div
        initial={{ x: -30, opacity: 0.6 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex h-full items-center gap-2 p-3"
      >
        <div className="h-20 w-28 rounded-md bg-gradient-to-br from-fuchsia-500/40 to-violet-500/20" />
        <div className="h-20 flex-1 rounded-md bg-gradient-to-br from-cyan-400/20 to-emerald-400/10" />
      </motion.div>
    </div>
  </motion.button>
);

const Modal = ({ open, onClose, data }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 18 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] p-6 text-white"
        >
          <button onClick={onClose} className="absolute right-3 top-3 rounded-md bg-white/10 px-2 py-1 text-xs">Close</button>
          <h3 className="text-xl font-semibold">{data?.title}</h3>
          <div className="mt-1 text-xs text-white/70">{data?.stack}</div>
          <p className="mt-3 text-sm text-white/90">{data?.desc}</p>
          <div className="mt-6 h-64 overflow-hidden rounded-lg border border-white/10 bg-black/30">
            <div className="grid h-full grid-cols-3 gap-2 p-2">
              <div className="rounded-md bg-gradient-to-br from-fuchsia-500/30 to-violet-500/20" />
              <div className="rounded-md bg-gradient-to-br from-cyan-400/30 to-emerald-400/20" />
              <div className="rounded-md bg-gradient-to-br from-indigo-500/30 to-blue-500/20" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const onOpen = (p) => {
    setData(p);
    setOpen(true);
  };

  return (
    <section id="projects" className="relative w-full bg-[#0b1020] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Projects & Systems
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} p={p} onOpen={onOpen} />
          ))}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} data={data} />
    </section>
  );
};

export default Projects;
