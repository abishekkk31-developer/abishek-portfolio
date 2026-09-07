import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import {
  FaJava,
  FaCode,
  FaBug,
  FaFlask,
  FaTools,
  FaProjectDiagram,
  FaTerminal,
} from 'react-icons/fa';
import { MdOutlineSpeed, MdSecurity } from 'react-icons/md';
import './Skills.css';

const techSkills = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React.js', icon: SiReact, color: '#61dafb' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', icon: SiGithub, color: '#e6edf3' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
];

const professionalSkills = [
  { name: 'OOP Design', icon: FaProjectDiagram, color: '#a78bfa' },
  { name: 'RESTful APIs', icon: FaCode, color: '#38bdf8' },
  { name: 'Manual Testing', icon: FaFlask, color: '#34d399' },
  { name: 'API Testing', icon: SiPostman, color: '#ff6c37' },
  { name: 'Test Case Design', icon: MdOutlineSpeed, color: '#fbbf24' },
  { name: 'Debugging', icon: FaBug, color: '#f87171' },
  { name: 'Bug Reporting', icon: FaTerminal, color: '#c084fc' },
  { name: 'Troubleshooting', icon: FaTools, color: '#6ee7b7' },
  { name: 'SDLC', icon: FaProjectDiagram, color: '#93c5fd' },
  { name: 'Unit Testing', icon: MdSecurity, color: '#86efac' },
];

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingItem = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card"
      variants={cardVariants}
      custom={index}
      whileHover={{
        y: -8,
        rotateX: 7,
        rotateY: -7,
        scale: 1.06,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 18,
        mass: 0.7,
      }}
      style={{
        '--skill-color': skill.color,
        '--skill-glow': `${skill.color}22`,
      }}
    >
      <div className="skill-card__shine" />

      <motion.div
        className="skill-card__icon-wrap"
        whileHover={{
          rotateZ: 4,
          scale: 1.14,
          z: 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 16,
        }}
      >
        <div className="skill-card__icon">
          <Icon size={34} />
        </div>
      </motion.div>

      <span className="skill-card__name">{skill.name}</span>

      <span className="skill-card__orbit skill-card__orbit--one" />
      <span className="skill-card__orbit skill-card__orbit--two" />

      <div className="skill-card__glow" />
    </motion.div>
  );
}

function MarqueeRow({
  skills,
  direction = 'left',
  speed = 34,
  className = '',
}) {
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className={`marquee-wrapper ${className}`}>
      <div
        className={`marquee-track marquee-track--${direction}`}
        style={{
          '--marquee-speed': `${speed}s`,
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <SkillCard
            key={`${skill.name}-${direction}-${index}`}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="skills__header"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.span className="section-tag" variants={headingItem}>
            <span className="section-tag__icon">⚡</span>
            Expertise
          </motion.span>

          <motion.h2 className="section-heading" variants={headingItem}>
            Technical Skills
          </motion.h2>

          <motion.p
            className="section-subheading"
            variants={headingItem}
          >
            Technologies I use to build, test, debug, and troubleshoot
            reliable software.
          </motion.p>

          <motion.div
            className="skills__heading-line"
            variants={headingItem}
          >
            <span />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="skills__marquees"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
      >
        <MarqueeRow
          skills={techSkills}
          direction="left"
          speed={34}
          className="skills__marquee-row"
        />

        <MarqueeRow
          skills={professionalSkills}
          direction="right"
          speed={30}
          className="skills__marquee-row skills__marquee-row--second"
        />
      </motion.div>

      <div className="skills__bottom-glow" />
    </section>
  );
}