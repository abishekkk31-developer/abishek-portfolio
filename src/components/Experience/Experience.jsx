import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const responsibilities = [
  'Engineered enterprise-grade full-stack features using Java and SQL, contributing to the CMAC Enterprise Application.',
  'Applied unit testing and Git-based version control to ensure code quality, reliability, and structured collaboration.',
  'Improved workflow efficiency by approximately 20% through optimized backend logic and process improvements.',
  'Reduced rework by approximately 15% via systematic debugging, peer code reviews, and structured testing practices.',
  'Worked with SDLC-aligned backend design, supporting well-structured development lifecycles across the project.',
  'Performed structured debugging and regular code reviews to identify and resolve application issues proactively.',
  'Collaborated with senior developers to debug, troubleshoot, and resolve complex application problems effectively.',
  'Managed database operations and supported deployment pipelines to ensure stable application delivery.',
];

const technologies = ['Java', 'SQL', 'HTML5', 'CSS3', 'Git'];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">

        {/* SECTION TITLE */}
        <motion.div
          className="experience__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            className="section-tag"
            variants={headingVariants}
          >
            Career
          </motion.span>

          <motion.h2
            className="section-heading"
            variants={headingVariants}
          >
            Professional Experience
          </motion.h2>

          <motion.p
            className="section-subheading"
            variants={headingVariants}
          >
            Hands-on experience building, testing, debugging, and improving
            software in a professional environment.
          </motion.p>

          <motion.div
            className="experience__heading-line"
            variants={headingVariants}
          />
        </motion.div>

        {/* EXPERIENCE TIMELINE */}
        <div className="experience__timeline">

          <motion.div
            className="experience__timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.div
            className="experience__timeline-dot"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
          />

          {/* EXPERIENCE CARD */}
          <motion.article
            className="experience__card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            whileHover={{
              y: -6,
            }}
          >

            {/* Card glow */}
            <div className="experience__card-glow" />

            {/* TOP AREA */}
            <div className="experience__top">

              <div className="experience__main-info">

                <span className="experience__label">
                  Internship Experience
                </span>

                <h3 className="experience__role">
                  Software Developer Intern
                </h3>

                <p className="experience__company">
                  Eagle Hi-Tech Soft Cloud Pvt. Ltd.
                </p>

                <span className="experience__project">
                  CMAC Enterprise Application
                </span>

              </div>

              <div className="experience__details">

                <div className="experience__detail">
                  <span className="experience__detail-icon">
                    ◷
                  </span>
                  <div>
                    <small>Period</small>
                    <strong>May 2025 – June 2025</strong>
                  </div>
                </div>

                <div className="experience__detail">
                  <span className="experience__detail-icon">
                    ◉
                  </span>
                  <div>
                    <small>Location</small>
                    <strong>India</strong>
                  </div>
                </div>

              </div>
            </div>

            <div className="experience__divider" />

            {/* RESPONSIBILITIES */}
            <motion.ul
              className="experience__responsibilities"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.05,
              }}
            >
              {responsibilities.map((item, index) => (
                <motion.li
                  key={index}
                  className="experience__responsibility"
                  variants={itemVariants}
                >
                  <span className="experience__check">
                    ✓
                  </span>

                  <span>
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* TECHNOLOGIES */}
            <div className="experience__tech">

              <span className="experience__tech-title">
                Tech Stack
              </span>

              <div className="experience__tech-list">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="experience__tech-item"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </div>

            <div className="experience__bottom-line" />

          </motion.article>
        </div>
      </div>
    </section>
  );
}