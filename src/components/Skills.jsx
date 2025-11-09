import React from 'react';
import { motion } from 'framer-motion';

const clusters = [
  { title: 'Programming', items: ['C++', 'PHP', 'Python', 'JavaScript'] },
  { title: 'Frameworks', items: ['Laravel', 'Yii2', 'Vue.js'] },
  { title: 'Systems', items: ['Redis', 'MySQL', 'Nginx'] },
  { title: 'Cloud', items: ['AWS'] },
  { title: 'Problem-Solving', items: ['Dynamic Programming', 'Graph Theory', 'Data Structures', 'Number Theory'] },
];

const Node = ({ label }) => (
  <div className="relative rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 shadow-sm">
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
    {label}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0b1020] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(236,72,153,0.12),transparent_60%)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Advanced Skill Matrix
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clusters.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-white backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
                    className="h-full bg-gradient-to-r from-fuchsia-500 to-violet-500"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <Node key={it} label={it} />
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pointer-events-none absolute -inset-px rounded-2xl [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)]"
                style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.2), rgba(99,102,241,0.2), rgba(34,211,238,0.2))' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
