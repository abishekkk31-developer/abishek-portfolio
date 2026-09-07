import React, { useEffect, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiArrowDownTray } from 'react-icons/hi2';
import { HiExternalLink } from 'react-icons/hi';
import './Hero.css';

const HeroScene = lazy(() => import('../../three/HeroScene'));

const codeSnippets = [
  { text: 'const developer = "Abishek";', delay: 0 },
  { text: 'function build() { return excellence; }', delay: 0.35 },
  { text: 'test() → ✓ All tests passed', delay: 0.7 },
  { text: 'debug() → No issues found', delay: 1.05 },
  { text: 'deploy() → Live ✓', delay: 1.4 },
];

/* Main hero reveal */
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const nameItem = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.96,
    filter: 'blur(14px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const visualItem = {
  hidden: {
    opacity: 0,
    scale: 0.78,
    rotateY: -12,
    rotateX: 6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.25,
    },
  },
};

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;

      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero__grid" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__inner container">
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          className="hero__content"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Availability */}
          <motion.div className="hero__badge" variants={heroItem}>
            <span className="hero__badge-dot" />
            <span>
              Open to Software Development, QA / Testing &amp; IT Support
              Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero__name" variants={nameItem}>
            ABISHEK
            <span className="hero__name-accent"> Y</span>
          </motion.h1>

          {/* Professional titles */}
          <motion.div className="hero__titles" variants={heroItem}>
            <span className="hero__title-line">Software Engineer</span>

            <span className="hero__title-sep">·</span>

            <span className="hero__title-line hero__title-line--dim">
              Full-Stack Developer
            </span>

            <span className="hero__title-sep">·</span>

            <span className="hero__title-line hero__title-line--dim">
              QA &amp; Testing
            </span>
          </motion.div>

          {/* Main tagline */}
          <motion.div className="hero__tagline-wrap" variants={heroItem}>
            <span className="hero__tagline-line" />
            <p className="hero__tagline">
              Building reliable, scalable, and user-focused software
              experiences.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p className="hero__description" variants={heroItem}>
            An aspiring Software Engineer with hands-on experience in
            full-stack development, software testing, and application
            troubleshooting. Passionate about writing clean code and
            delivering quality software.
          </motion.p>

          {/* CTA buttons */}
          <motion.div className="hero__ctas" variants={heroItem}>
            <motion.a
              className="btn-primary"
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('projects');
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              View My Work
              <HiExternalLink size={18} />
            </motion.a>

            <motion.a
              className="btn-secondary"
              href="/resume.pdf"
              download="Abishek_Y_Resume.pdf"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <HiArrowDownTray size={18} />
              Download Resume
            </motion.a>

            <motion.a
              className="hero__contact-link"
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('contact');
              }}
              whileHover={{
                x: 4,
              }}
            >
              Contact Me →
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            className="hero__scroll"
            onClick={() => scrollToSection('about')}
            variants={heroItem}
            whileHover={{
              y: 5,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <span>Explore my journey</span>
            <HiArrowDown size={16} />
          </motion.button>
        </motion.div>

        {/* =========================
            RIGHT 3D VISUAL
        ========================== */}
        <motion.div
          className="hero__visual"
          variants={visualItem}
          initial="hidden"
          animate="visible"
          style={{
            transform: `perspective(1200px)
              rotateY(${mousePos.x * 0.015}deg)
              rotateX(${-mousePos.y * 0.015}deg)`,
          }}
        >
          <div className="hero__visual-orbit orbit-one" />
          <div className="hero__visual-orbit orbit-two" />

          <div className="hero__canvas-wrapper">
            <Suspense fallback={<div className="hero__canvas-fallback" />}>
              <HeroScene />
            </Suspense>
          </div>

          {/* Floating code cards */}
          <div className="hero__code-snippets">
            {codeSnippets.map((snippet, index) => (
              <motion.div
                key={snippet.text}
                className="hero__code-snippet"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -35 : 35,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.9 + snippet.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  top: `${9 + index * 18}%`,
                  left: index % 2 === 0 ? '-12%' : 'auto',
                  right: index % 2 !== 0 ? '-10%' : 'auto',
                  animationDelay: `${index * 0.45}s`,
                }}
              >
                <span className="hero__code-prompt">&gt;</span>
                <span>{snippet.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Floating status card */}
          <motion.div
            className="hero__status-card"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="hero__status-dot" />

            <div>
              <strong>System Status</strong>
              <span>Ready to build</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}