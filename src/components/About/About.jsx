import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaBug,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaTerminal,
  FaGithub,
  FaJava,
} from 'react-icons/fa';

import {
  SiReact,
  SiMysql,
  SiSpringboot,
} from 'react-icons/si';

import './About.css';

const strengths = [
  {
    icon: FaCode,
    title: 'Clean Development',
    text: 'Focused on structured, maintainable, and reliable software development.',
  },
  {
    icon: FaBug,
    title: 'Debugging & QA',
    text: 'Comfortable identifying issues, testing APIs, and troubleshooting application problems.',
  },
  {
    icon: FaLightbulb,
    title: 'Problem Solving',
    text: 'Approaches technical challenges with analytical thinking and practical solutions.',
  },
  {
    icon: FaUsers,
    title: 'Team Collaboration',
    text: 'Experienced in working with senior developers through reviews and issue resolution.',
  },
];

const techFloaters = [
  {
    name: 'React',
    icon: SiReact,
    className: 'react',
  },
  {
    name: 'Java',
    icon: FaJava,
    className: 'java',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    className: 'mysql',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    className: 'github',
  },
  {
    name: 'Spring Boot',
    icon: SiSpringboot,
    className: 'spring',
  },
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
    y: 35,
    filter: 'blur(8px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentItem = {
  hidden: {
    opacity: 0,
    y: 30,
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

const strengthContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const strengthItem = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="about section">

      <div className="about__ambient about__ambient--one" />
      <div className="about__ambient about__ambient--two" />

      <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          className="about__header"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
        >
          <motion.span
            className="section-tag"
            variants={headingItem}
          >
            <span className="about__tag-icon">✦</span>
            About Me
          </motion.span>

          <motion.h2
            className="section-heading"
            variants={headingItem}
          >
            Engineering with curiosity,
            <span> quality, and purpose.</span>
          </motion.h2>

          <motion.p
            className="section-subheading"
            variants={headingItem}
          >
            A developer who enjoys building, testing, debugging, and
            continuously improving software.
          </motion.p>

          <motion.div
            className="about__heading-line"
            variants={headingItem}
          >
            <span />
          </motion.div>
        </motion.div>

        {/* =========================================
            MAIN GRID
        ========================================== */}

        <div className="about__grid">

          {/* =====================================
              STORY
          ====================================== */}

          <motion.div
            className="about__story"
            variants={contentItem}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
          >

            <div className="about__story-heading">

              <div className="about__story-icon">
                <FaTerminal />
              </div>

              <div>
                <span>
                  Developer Profile
                </span>

                <h3>
                  Building with purpose.
                </h3>
              </div>

            </div>

            <div className="about__story-line" />

            <p>
              I am an aspiring Software Engineer currently pursuing a
              Bachelor of Computer Application, graduating in 2026.
            </p>

            <p>
              I have hands-on experience in full-stack development,
              software testing, and application troubleshooting, with
              practical exposure to Java, SQL, JavaScript, React.js,
              Spring Boot, RESTful APIs, and Postman.
            </p>

            <p>
              I enjoy understanding how applications work across the
              frontend, backend, and database layers, while also focusing
              on quality through testing, debugging, and structured
              troubleshooting.
            </p>

            <p>
              My goal is to contribute to reliable software, learn from
              experienced teams, and continuously grow as an engineer.
            </p>

            {/* TERMINAL */}

            <div className="about__terminal">

              <div className="about__terminal-top">

                <div className="about__terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <small>
                  abishek@developer
                </small>

                <span className="about__terminal-live">
                  ● LIVE
                </span>

              </div>

              <div className="about__terminal-body">

                <div className="about__terminal-row">
                  <span className="about__terminal-prompt">
                    $
                  </span>

                  <span>
                    whoami
                  </span>
                </div>

                <div className="about__terminal-value">
                  Software Engineer
                </div>

                <div className="about__terminal-row">
                  <span className="about__terminal-prompt">
                    $
                  </span>

                  <span>
                    stack
                  </span>
                </div>

                <div className="about__terminal-value">
                  Java • React • Spring Boot • MySQL
                </div>

                <div className="about__terminal-row">
                  <span className="about__terminal-prompt">
                    $
                  </span>

                  <span>
                    workflow
                  </span>
                </div>

                <div className="about__terminal-value">
                  Build → Test → Debug → Improve
                </div>

                <div className="about__terminal-row">
                  <span className="about__terminal-prompt">
                    $
                  </span>

                  <span>
                    status
                  </span>
                </div>

                <div className="about__terminal-value about__terminal-success">
                  Ready to build ✓
                </div>

              </div>

            </div>
          </motion.div>

          {/* =====================================
              3D DEVELOPER WORKSPACE
          ====================================== */}

          <motion.div
            className="about__workspace"
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="about__workspace-glow" />

            <div className="about__floor">
              <span />
              <span />
              <span />
              <span />
            </div>

            {/* PARTICLES */}

            <div className="about__workspace-particles">

              {Array.from({ length: 18 }).map((_, index) => (

                <motion.span
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.15, 0.75, 0.15],
                    scale: [0.7, 1.2, 0.7],
                  }}
                  transition={{
                    duration: 3 + (index % 4),
                    repeat: Infinity,
                    delay: index * 0.18,
                    ease: 'easeInOut',
                  }}
                  style={{
                    left: `${8 + ((index * 37) % 85)}%`,
                    top: `${8 + ((index * 53) % 78)}%`,
                  }}
                />

              ))}

            </div>

            {/* FLOATING TECHNOLOGY */}

            {techFloaters.map((tech, index) => {

              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  className={`about__tech-floater about__tech-floater--${index + 1} ${tech.className}`}
                  animate={{
                    y: [0, -8, 0],
                    rotateZ: [
                      index % 2 === 0 ? -2 : 2,
                      index % 2 === 0 ? 2 : -2,
                      index % 2 === 0 ? -2 : 2,
                    ],
                  }}
                  transition={{
                    duration: 4 + index * 0.45,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                >
                  <Icon />
                  <span>
                    {tech.name}
                  </span>
                </motion.div>
              );

            })}

            {/* =================================
                LAPTOP
            ================================== */}

            <motion.div
              className="about__laptop"
              animate={{
                rotateX: [3, -2, 3],
                rotateY: [-3, 3, -3],
                y: [0, -6, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >

              {/* SCREEN */}

              <div className="about__laptop-screen">

                <div className="about__screen-topbar">

                  <div>
                    <span />
                    <span />
                    <span />
                  </div>

                  <small>
                    portfolio.dev
                  </small>

                  <b>
                    ●
                  </b>

                </div>

                <div className="about__screen-body">

                  <div className="about__screen-sidebar">

                    <div className="about__screen-logo">
                      <FaCode />
                    </div>

                    <span className="active">
                      DEV
                    </span>

                    <span>
                      CODE
                    </span>

                    <span>
                      TEST
                    </span>

                    <span>
                      DEPLOY
                    </span>

                  </div>

                  <div className="about__screen-content">

                    <div className="about__code-line width-70">
                      <i>const</i>
                      <b> developer</b>
                      <span> = </span>
                      <em>
                        "Abishek"
                      </em>
                    </div>

                    <div className="about__code-line width-45">
                      <i>function</i>
                      <b> build()</b>
                      <span>
                        {' {'}
                      </span>
                    </div>

                    <div className="about__code-line width-82 indent">
                      <span>
                        react()
                      </span>

                      <span>
                        {' ✓'}
                      </span>
                    </div>

                    <div className="about__code-line width-68 indent">
                      <span>
                        springBoot()
                      </span>

                      <span>
                        {' ✓'}
                      </span>
                    </div>

                    <div className="about__code-line width-60 indent">
                      <span>
                        mysql()
                      </span>

                      <span>
                        {' ✓'}
                      </span>
                    </div>

                    <div className="about__code-line width-72 indent">
                      <span>
                        testWithPostman()
                      </span>

                      <span>
                        {' ✓'}
                      </span>
                    </div>

                    <div className="about__code-line width-35">
                      <span>
                        {'}'}
                      </span>
                    </div>

                    <motion.div
                      className="about__screen-status"
                      animate={{
                        opacity: [0.55, 1, 0.55],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                    >
                      <span />
                      SYSTEM READY
                    </motion.div>

                  </div>

                </div>

              </div>

              {/* BASE */}

              <div className="about__laptop-base">
                <div className="about__laptop-trackpad" />
              </div>

            </motion.div>

            {/* STATUS CARD 1 */}

            <motion.div
              className="about__status-card about__status-card--one"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >

              <span className="about__status-icon success">
                ✓
              </span>

              <div>
                <strong>
                  Build Complete
                </strong>

                <small>
                  Production ready
                </small>
              </div>

            </motion.div>

            {/* STATUS CARD 2 */}

            <motion.div
              className="about__status-card about__status-card--two"
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4.9,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >

              <span className="about__status-icon bug">
                ⚡
              </span>

              <div>
                <strong>
                  Quality First
                </strong>

                <small>
                  Test • Debug • Improve
                </small>
              </div>

            </motion.div>

            {/* CENTER BADGE */}

            <motion.div
              className="about__workspace-badge"
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaRocket />

              <span>
                BUILDING THE FUTURE
              </span>
            </motion.div>

          </motion.div>
        </div>

        {/* =========================================
            STRENGTHS
        ========================================== */}

        <motion.div
          className="about__strengths"
          variants={strengthContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {strengths.map((strength) => {

            const Icon = strength.icon;

            return (
              <motion.div
                key={strength.title}
                className="about__strength-card"
                variants={strengthItem}
                whileHover={{
                  y: -7,
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.025,
                }}
              >

                <div className="about__strength-icon">
                  <Icon />
                </div>

                <div>
                  <h4>
                    {strength.title}
                  </h4>

                  <p>
                    {strength.text}
                  </p>
                </div>

              </motion.div>
            );

          })}

        </motion.div>

      </div>
    </section>
  );
}