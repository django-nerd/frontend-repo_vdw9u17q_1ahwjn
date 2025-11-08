import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Programming',
    items: ['C++', 'PHP', 'JavaScript', 'Python'],
  },
  {
    title: 'Frameworks',
    items: ['Laravel', 'Vue.js', 'Yii2'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'Redis'],
  },
  {
    title: 'Tools & Tech',
    items: ['Git', 'Nginx', 'AWS Cloud', 'Firebase'],
  },
  {
    title: 'Problem-Solving',
    items: ['Algorithms', 'Data Structures', 'Dynamic Programming', 'Graphs'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Responsive UI/UX'],
  },
];

const SkillCard = ({ title, items, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateX: -10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: 0.05 * idx }}
    className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 text-white shadow-xl backdrop-blur-xl"
  >
    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 + idx * 0.05 }}
          className="h-full bg-gradient-to-r from-[#FF6DBA] to-fuchsia-500"
        />
      </div>
    </div>
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((it) => (
        <li
          key={it}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#F0F0F0]/90"
        >
          {it}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#121820] py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-5xl rounded-full bg-[#FF6DBA]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Core Skills
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <SkillCard key={cat.title} title={cat.title} items={cat.items} idx={idx} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
