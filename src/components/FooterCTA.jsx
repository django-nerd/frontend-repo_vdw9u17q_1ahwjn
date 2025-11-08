import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="relative w-full bg-[#0e141b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Let’s Build Something Remarkable.
        </motion.h3>
        <div className="mt-6 flex justify-center gap-4">
          <a href="mailto:fathi@example.com" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://www.youtube.com/@SolveXJo" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>
        <div className="mt-10 text-center text-xs text-[#999999]">© {new Date().getFullYear()} Fathi Al-Saadi · Crafted with passion.</div>
      </div>
    </footer>
  );
};

export default FooterCTA;
