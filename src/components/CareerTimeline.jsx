import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  {
    title: 'Software Engineer',
    org: 'Altibbi',
    period: '2022 — Present',
    summary:
      'Built large-scale features, backend systems, APIs, RSS feeds, and CMS modules. Worked with production stacks and internal tooling.',
    tags: ['Yii2', 'Laravel', 'Vue', 'Redis', 'MySQL', 'Nginx', 'APIs', 'CMS'],
  },
  {
    title: 'Full-Stack Developer',
    org: 'TechQueen',
    period: '2021 — 2022',
    summary:
      'Developed web solutions end-to-end with modern frameworks. Led deployments and performance tuning.',
    tags: ['Laravel', 'Vue', 'Tailwind', 'CI/CD'],
  },
  {
    title: 'Full-Stack Engineer',
    org: 'AtTubi (Healthcare Startup)',
    period: '2020 — 2021',
    summary:
      'Built cross-platform features, optimized workflows, and scaled functionality for growing user base.',
    tags: ['Product', 'APIs', 'Performance', 'DX'],
  },
  {
    title: 'Freelance Developer',
    org: 'Independent',
    period: '2018 — 2020',
    summary:
      'Delivered websites, dashboards, and custom business solutions for SMEs.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Vue'],
  },
  {
    title: 'University Projects',
    org: 'HTU',
    period: 'Academics',
    summary:
      'Scheduling systems, LSTM-based weather prediction, and research platforms.',
    tags: ['Algorithms', 'ML', 'LSTM', 'Automation'],
  },
];

const Card = ({ role, expanded, onToggle }) => {
  return (
    <motion.div
      layout
      onClick={onToggle}
      className="group relative min-w-[260px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-24 bg-[conic-gradient(at_50%_50%,#8b5cf6_0deg,transparent_120deg,#ec4899_240deg,transparent_360deg)] opacity-30 blur-2xl" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold">{role.title}</h3>
          <div className="mt-0.5 text-xs text-[#F0F0F0]/70">{role.org}</div>
        </div>
        <span className="rounded-full bg-fuchsia-500/20 px-2 py-1 text-[10px] text-fuchsia-200 ring-1 ring-white/10">
          {role.period}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3"
          >
            <p className="text-sm text-[#F0F0F0]/85">{role.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 rounded-sm bg-gradient-to-r from-fuchsia-500/40 to-cyan-400/30"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CareerTimeline = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="career" className="relative w-full bg-[#121820] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-10%,rgba(168,85,247,0.12),transparent_60%)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Career Timeline
        </motion.h2>

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex gap-4">
            {roles.map((r, i) => (
              <Card
                key={r.title}
                role={r}
                expanded={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
