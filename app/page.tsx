"use client";
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// ── Typewriter hook ──────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ── Floating particle canvas ─────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${d.alpha})`;
        ctx.fill();
      });
      // draw faint connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

// ── Glitch text ──────────────────────────────────────────────────
function GlitchText({ children }: { children: string }) {
  return (
    <span className="glitch" data-text={children}>
      {children}
    </span>
  );
}

// ── Skill card with hover reveal ─────────────────────────────────
function SkillCard({ title, tag, desc, color, icon, wide }: any) {
  const [hovered, setHovered] = useState(false);
  const colors: Record<string, string> = {
    blue: '#38bdf8', emerald: '#34d399', purple: '#a78bfa',
    rose: '#fb7185', yellow: '#fbbf24', orange: '#fb923c',
  };
  const accent = colors[color] || '#38bdf8';

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative bg-[#0f0f0f] border rounded-2xl p-6 overflow-hidden cursor-default transition-colors duration-300 ${wide}`}
      style={{ borderColor: hovered ? accent + '55' : '#1f1f1f' }}
    >
      {/* animated scan line */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ top: '-100%' }}
            animate={{ top: '200%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'linear' }}
            className="absolute left-0 w-full h-px pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}55, transparent)` }}
          />
        )}
      </AnimatePresence>

      {/* glow blob */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"
        style={{ background: accent + '18', opacity: hovered ? 1 : 0 }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 rounded-xl" style={{ background: accent + '15' }}>
            <svg className="w-5 h-5" fill="none" stroke={accent} strokeWidth="1.8" viewBox="0 0 24 24">{icon}</svg>
          </div>
          <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-gray-700 text-gray-500">{tag}</span>
        </div>
        <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ color: hovered ? accent : '#e5e7eb' }}>{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ── Project card ─────────────────────────────────────────────────
function ProjectCard({ title, role, desc, tags, accent = '#22d3ee', featured = false, delay = 0 }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      className={`relative bg-[#0f0f0f] border rounded-2xl p-8 overflow-hidden transition-colors duration-300 ${featured ? 'lg:col-span-2' : ''}`}
      style={{ borderColor: hovered ? accent + '66' : '#1f1f1f' }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top right, ${accent}08, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {featured && (
        <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10">
          <svg className="w-40 h-40 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
      )}

      <div className="relative z-10">
        {featured && (
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border" style={{ borderColor: accent + '44', color: accent, background: accent + '10' }}>
              Featured Architecture
            </span>
            <span className="text-gray-600 text-xs font-mono">Oct – Dec 2024</span>
          </div>
        )}
        <h3 className={`font-bold mb-1 tracking-tight transition-colors duration-300 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`} style={{ color: hovered ? accent : '#f3f4f6' }}>
          {title}
        </h3>
        <p className="font-mono text-sm mb-4" style={{ color: accent + 'cc' }}>{'>'} {role}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg border border-gray-800 text-gray-500 bg-[#1a1a1a]">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main export ──────────────────────────────────────────────────
export default function Home() {
  const headline = useTypewriter(['Cloud Engineer', 'ML Infrastructure', 'DevOps Architect', 'Next.js Developer']);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 60]);

  const skills = [
    {
      title: 'Cloud Computing', tag: 'Infrastructure', color: 'blue',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
      desc: 'Expertise in Google Cloud (GCE, Cloud Run, App Engine) and AWS. Building hybrid cloud strategies and scalable automated deployments.',
    },
    {
      title: 'Containerization', tag: 'DevOps', color: 'emerald',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
      desc: 'Packaging applications for portability and failover using Docker. Deploying to Cloud Run and managing cluster environments.',
    },
    {
      title: 'MLOps & Integration', tag: 'AI / ML', color: 'purple',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      desc: 'Deploying CNN models (TensorFlow), YOLOv11 systems, and local LLM/RAG applications into production-ready Flask backends.',
    },
    {
      title: 'Modern Web Dev', tag: 'Frontend', color: 'rose',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
      desc: 'Building fast, responsive frontends with Next.js, React, and TailwindCSS. Creating seamless APIs bridging UI and Cloud systems.',
    },
    {
      title: 'Languages & Databases', tag: 'Core', color: 'yellow', wide: 'lg:col-span-2',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />,
      desc: 'Proficient in Python, Java, JavaScript, and TypeScript. Extensive experience managing data across Firebase, MySQL, and SQLite within Linux environments.',
    },
    {
      title: 'IaC & Orchestration', tag: 'Automation', color: 'orange', wide: 'md:col-span-2 lg:col-span-3',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
      desc: 'Automating scalable infrastructure provisioning on Google Cloud using Terraform. Container orchestration and cluster management using Kubernetes.',
    },
  ];

  const projects = [
    {
      title: 'Automatic Number Plate Recognition (ANPR)',
      role: 'Team Lead & Cloud Engineer',
      desc: 'Designed and deployed a highly scalable, cloud-based ANPR system. Integrated YOLOv11 for object detection and PaddleOCR for text recognition on Compute Engine instances. Architected infrastructure for high availability by containerizing services with Docker and deploying to Cloud Run as failover. Secured using HTTPS, firewall rules, and integrated a Next.js frontend with Firebase.',
      tags: ['Google Cloud (GCE/Cloud Run)', 'Docker', 'YOLOv11', 'Next.js'],
      featured: true,
      accent: '#22d3ee',
    },
    {
      title: 'Cloud Infrastructure Automation',
      role: 'Infrastructure as Code (IaC)',
      desc: 'Automated complex infrastructure setup on Google Cloud using Terraform. Focused on modular scalability, immutable infrastructure principles, and enforcing cloud security best practices to eliminate manual provisioning errors.',
      tags: ['Terraform', 'GCP', 'Security Policies'],
      accent: '#fb923c',
    },
    {
      title: 'AgriScan AI Backend',
      role: 'MLOps & Cloud Engineer',
      desc: 'Engineered backend infrastructure for a mobile plant disease detection app. Containerized a TensorFlow/Keras classification model within a Flask API and deployed it to Google Cloud Run to handle fluctuating traffic loads efficiently.',
      tags: ['Docker', 'Cloud Run', 'TensorFlow'],
      accent: '#34d399',
    },
    {
      title: 'Car Brand Identifier AI',
      role: 'Cloud Engineer',
      desc: 'Managed the cloud deployment lifecycle for an AI identification tool. Packaged application services via Docker and orchestrated deployment on Cloud Run for high fault tolerance. Secured data storage with Firebase and GCP Cloud Buckets.',
      tags: ['Cloud Run', 'Firebase', 'Cloud Storage'],
      accent: '#a78bfa',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; }

        body {
          background: #080808;
          font-family: 'JetBrains Mono', monospace;
        }

        h1, h2, h3 {
          font-family: 'Syne', sans-serif;
        }

        /* Glitch effect */
        .glitch {
          position: relative;
          display: inline-block;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }
        .glitch::before {
          color: #22d3ee;
          animation: glitch1 3.5s infinite;
          clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
        }
        .glitch::after {
          color: #a78bfa;
          animation: glitch2 3.5s infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
        }
        @keyframes glitch1 {
          0%,90%,100% { transform: translateX(0); opacity: 0; }
          92% { transform: translateX(-3px); opacity: 0.7; }
          94% { transform: translateX(3px); opacity: 0.7; }
          96% { transform: translateX(0); opacity: 0; }
        }
        @keyframes glitch2 {
          0%,90%,100% { transform: translateX(0); opacity: 0; }
          93% { transform: translateX(3px); opacity: 0.6; }
          95% { transform: translateX(-3px); opacity: 0.6; }
          97% { transform: translateX(0); opacity: 0; }
        }

        /* Cursor blink */
        .cursor::after {
          content: '█';
          animation: blink 1s step-end infinite;
          color: #22d3ee;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Noise overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 999;
          opacity: 0.4;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #22d3ee44; border-radius: 2px; }

        /* Section divider grid line */
        .grid-line {
          background: linear-gradient(90deg, transparent, #22d3ee22, transparent);
          height: 1px;
          width: 100%;
        }

        /* Stat counter */
        .stat-card {
          background: #0f0f0f;
          border: 1px solid #1f1f1f;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: border-color 0.3s;
        }
        .stat-card:hover { border-color: #22d3ee44; }
      `}</style>

      <div className="min-h-screen text-gray-200 selection:bg-cyan-900/40 selection:text-cyan-50 relative">
        <ParticleCanvas />

        {/* ── NAV ── */}
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="sticky top-0 z-50"
        >
          <nav className="border-b border-gray-800/40 bg-[#080808]/70 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="font-bold text-lg tracking-tight text-white cursor-default"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                eric.<span className="text-cyan-400">io</span>
              </motion.span>
              <div className="hidden md:flex gap-8 text-xs font-mono text-gray-500">
                {['about', 'skills', 'projects', 'contact'].map(s => (
                  <a key={s} href={`#${s}`} className="hover:text-cyan-400 transition-colors uppercase tracking-widest">
                    {s}
                  </a>
                ))}
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ericvincentkho@gmail.com"
                className="hidden md:flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Available
              </motion.a>
            </div>
          </nav>
        </motion.header>

        <main className="max-w-5xl mx-auto px-6 relative z-10">

          {/* ── HERO ── */}
          <motion.section
            id="about"
            style={{ opacity: heroOpacity, y: heroY }}
            className="flex flex-col items-center text-center py-32 min-h-[90vh] justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-emerald-400/80 mb-8 tracking-widest uppercase border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 rounded-full"
            >
              $ deploy-cloud-infra --platform=gcp --scale=auto
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                <GlitchText>eric@cloud</GlitchText>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-gray-500">
                {'>'}&nbsp;
                <span className="text-cyan-400 cursor">{headline}</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-xl text-gray-500 leading-relaxed mb-12 text-base font-mono"
            >
              Architecting scalable cloud infrastructure, containerizing ML models, and building modern web applications. Focused on high-availability deployments and intelligent systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-2 mb-12 font-mono text-xs"
            >
              {[
                { label: 'Cloud Run & GCE', color: '#38bdf8' },
                { label: 'Docker & Orchestration', color: '#34d399' },
                { label: 'MLOps / AI', color: '#a78bfa' },
                { label: 'Next.js', color: '#fb7185' },
              ].map(({ label, color }) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 rounded-full border text-xs cursor-default"
                  style={{ borderColor: color + '44', color, background: color + '10' }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.25)' }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/ericvkho/"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ericvincentkho@gmail.com"
                className="border border-gray-700 hover:border-gray-500 text-gray-300 font-mono px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm hover:bg-white/5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Email Me
              </motion.a>
            </motion.div>

            {/* scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            >
              <span className="text-xs text-gray-700 font-mono tracking-widest uppercase">scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent"
              />
            </motion.div>
          </motion.section>

          <div className="grid-line mb-24" />

          {/* ── STATS ── */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { stat: '5+', label: 'Cloud Certifications' },
                { stat: '100%', label: 'Uptime on Deployments' },
                { stat: '4+', label: 'Major Projects' },
                { stat: '2024', label: 'Bangkit Academy' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                  className="stat-card"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{item.stat}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { stat: 'AWS Certified Practitioner', label: 'Jan 2025 – Jan 2029', link: '#' },
                { stat: 'AWS Certified Developer Associate', label: 'May 2025 – May 2029', link: '#' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, borderColor: '#22d3ee55' }}
                  className="stat-card flex items-center justify-between group cursor-pointer"
                  style={{ textAlign: 'left' }}
                >
                  <div>
                    <div className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">{item.stat}</div>
                    <div className="text-xs text-gray-600 mt-1">{item.label}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-700 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </motion.a>
              ))}
            </div>
          </motion.section>

          <div className="grid-line mb-24" />

          {/* ── SKILLS ── */}
          <section id="skills" className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="text-xs font-mono text-emerald-400/60 mb-4 tracking-widest uppercase">
                $ grep -r "expertise" /var/log/career.log
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                ./skills <span className="text-gray-600">--verbose</span>
              </h2>
              <p className="text-gray-600 font-mono text-sm">
                {'>'} Hover each card to explore
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={s.wide || ''}
                >
                  <SkillCard {...s} />
                </motion.div>
              ))}
            </div>
          </section>

          <div className="grid-line mb-24" />

          {/* ── PROJECTS ── */}
          <section id="projects" className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="text-xs font-mono text-blue-400/60 mb-4 tracking-widest uppercase">
                $ ls -la /var/www/deployments
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                ./projects <span className="text-gray-600">--production</span>
              </h2>
              <p className="text-gray-600 font-mono text-sm">
                {'>'} Architecting scalable systems and cloud-native applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} {...p} delay={i * 0.1} />
              ))}
            </div>
          </section>

          <div className="grid-line mb-24" />

          {/* ── CONTACT ── */}
          <section id="contact" className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Let's <span className="text-cyan-400">Connect</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6" />
              <p className="text-gray-500 max-w-lg mx-auto font-mono text-sm">
                Ready to discuss cloud infrastructure? Let's build something highly scalable together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Email', desc: 'ericvincentkho@gmail.com',
                  href: 'mailto:ericvincentkho@gmail.com', accent: '#22d3ee',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, stroke: true
                },
                {
                  title: 'GitHub', desc: 'github.com/khovincent',
                  href: 'https://github.com/khovincent', accent: '#34d399',
                  icon: <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />, stroke: false
                },
                {
                  title: 'LinkedIn', desc: 'linkedin.com/in/ericvkho',
                  href: 'https://linkedin.com/in/ericvkho/', accent: '#38bdf8',
                  icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />, stroke: false
                },
                {
                  title: 'Download Resume', desc: 'View full experience',
                  href: '/resume-ericvincentkho.pdf', accent: '#a78bfa',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />, stroke: true
                },
              ].map((c, i) => (
                <motion.a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="group flex items-center gap-5 bg-[#0f0f0f] border border-gray-800 hover:border-opacity-50 p-6 rounded-2xl transition-all duration-300"
                  style={{ ['--accent' as any]: c.accent }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = c.accent + '55')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1f2937')}
                >
                  <div className="p-3.5 rounded-xl transition-colors duration-300" style={{ background: c.accent + '10' }}>
                    <svg className="w-5 h-5 transition-colors" fill={c.stroke ? 'none' : 'currentColor'} stroke={c.stroke ? 'currentColor' : 'none'} viewBox="0 0 24 24" style={{ color: c.accent }}>
                      {c.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{c.title}</h4>
                    <p className="text-gray-600 text-xs font-mono mt-0.5">{c.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-700 group-hover:text-gray-400 transition-colors ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </section>
        </main>

        {/* ── FOOTER ── */}
        <footer className="border-t border-gray-800/40 bg-[#060606] pt-16 pb-8 px-6 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                eric.<span className="text-cyan-400">io</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-mono">
                Cloud Engineer & Informatics Student specializing in scalable architecture, containerization, and automated deployments.
              </p>
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">Navigation</h5>
              <ul className="space-y-3">
                {['about', 'skills', 'projects', 'contact'].map(l => (
                  <li key={l}>
                    <a href={`#${l}`} className="text-gray-600 text-sm font-mono hover:text-cyan-400 transition-colors capitalize">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">Resources</h5>
              <ul className="space-y-3">
                <li><a href="/resume-ericvincentkho.pdf" target="_blank" className="text-gray-600 text-sm font-mono hover:text-cyan-400 transition-colors">Resume.pdf</a></li>
                <li><a href="https://github.com/khovincent" target="_blank" className="text-gray-600 text-sm font-mono hover:text-cyan-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center text-gray-700 text-xs font-mono">
            <p>© 2026 Eric Vincent Kho — <span className="text-cyan-500/60">eric.io</span></p>
            <p className="mt-2 md:mt-0">Architecting Scalable Cloud Platforms</p>
          </div>
        </footer>
      </div>
    </>
  );
}