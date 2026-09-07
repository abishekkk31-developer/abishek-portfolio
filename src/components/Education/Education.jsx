import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from 'react-icons/fa';
import './Education.css';

const education = {
  degree: 'Bachelor of Computer Application (BCA)',
  college: 'St. Thomas College of Arts and Science',
  period: '2023 – 2026',
};

const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerItem = {
  hidden: {
    opacity: 0,
    y: 30,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <motion.div
          className="education__header"
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.span
            className="section-tag"
            variants={headerItem}
          >
            <span className="education__tag-icon">
              🎓
            </span>
            Education
          </motion.span>

          <motion.h2
            className="section-heading"
            variants={headerItem}
          >
            Academic Journey
          </motion.h2>

          <motion.p
            className="section-subheading"
            variants={headerItem}
          >
            Building a strong foundation in computer applications and
            software development.
          </motion.p>

          <motion.div
            className="education__heading-line"
            variants={headerItem}
          >
            <span />
          </motion.div>
        </motion.div>

        {/* =========================================
            TIMELINE
        ========================================== */}
        <div className="education__timeline">

          <motion.div
            className="education__timeline-line"
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.div
            className="education__timeline-dot"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <span />
          </motion.div>

          {/* =====================================
              EDUCATION CARD
          ====================================== */}
          <motion.article
            className="education__card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <div className="education__glow" />

            {/* Top icon */}
            <motion.div
              className="education__degree-icon"
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -10,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <FaGraduationCap />
            </motion.div>

            {/* Main content */}
            <div className="education__content">

              <motion.span
                className="education__label"
                variants={itemVariants}
              >
                Undergraduate Degree
              </motion.span>

              <motion.h3
                className="education__degree"
                variants={itemVariants}
              >
                {education.degree}
              </motion.h3>

              <motion.div
                className="education__college"
                variants={itemVariants}
              >
                <span className="education__college-icon">
                  <FaUniversity />
                </span>

                <span>
                  {education.college}
                </span>
              </motion.div>

              <motion.div
                className="education__details"
                variants={itemVariants}
              >
                <div className="education__detail">
                  <span className="education__detail-icon">
                    <FaCalendarAlt />
                  </span>

                  <div>
                    <small>Duration</small>
                    <strong>
                      {education.period}
                    </strong>
                  </div>
                </div>

                <div className="education__detail">
                  <span className="education__detail-icon education__detail-icon--live">
                    <span />
                  </span>

                  <div>
                    <small>Status</small>
                    <strong>
                      Currently Pursuing
                    </strong>
                  </div>
                </div>
              </motion.div>

              {/* Progress */}
              <motion.div
                className="education__progress"
                variants={itemVariants}
              >
                <div className="education__progress-top">
                  <span>
                    Academic Progress
                  </span>

                  <span>
                    2023 → 2026
                  </span>
                </div>

                <div className="education__progress-track">
                  <motion.div
                    className="education__progress-bar"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: '88%',
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.1,
                      delay: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>

            </div>

            {/* Right side 3D visual */}
            <motion.div
              className="education__visual"
              animate={{
                y: [0, -7, 0],
                rotateY: [-3, 3, -3],
                rotateX: [2, -2, 2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="education__visual-ring education__visual-ring--one" />
              <div className="education__visual-ring education__visual-ring--two" />

              <div className="education__visual-core">
                <FaGraduationCap />

                <span>
                  BCA
                </span>

                <small>
                  2023 — 2026
                </small>
              </div>

              <motion.div
                className="education__floating-node education__floating-node--one"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                CODE
              </motion.div>

              <motion.div
                className="education__floating-node education__floating-node--two"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                BUILD
              </motion.div>

              <motion.div
                className="education__floating-node education__floating-node--three"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                LEARN
              </motion.div>
            </motion.div>

            <div className="education__bottom-line" />
          </motion.article>
        </div>
      </div>
    </section>
  );
}