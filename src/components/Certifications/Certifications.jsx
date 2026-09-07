import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCertificate,
  FaPython,
  FaBrain,
  FaDatabase,
  FaMicrosoft,
} from 'react-icons/fa';
import './Certifications.css';

const certifications = [
  {
    provider: 'Infosys',
    providerIcon: FaCertificate,
    providerClass: 'infosys',
    label: 'Certified Courses',
    courses: [
      {
        name: 'Basics of Python',
        icon: FaPython,
        className: 'python',
      },
      {
        name: 'Object-Oriented Programming using Python',
        icon: FaPython,
        className: 'python',
      },
    ],
  },
  {
    provider: 'Microsoft',
    providerIcon: FaMicrosoft,
    providerClass: 'microsoft',
    label: 'Certified Courses',
    courses: [
      {
        name: 'Artificial Intelligence',
        icon: FaBrain,
        className: 'ai',
      },
      {
        name: 'Data Science',
        icon: FaDatabase,
        className: 'data',
      },
    ],
  },
];

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
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const courseContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.18,
    },
  },
};

const courseItem = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications section"
    >
      <div className="certifications__ambient certifications__ambient--one" />
      <div className="certifications__ambient certifications__ambient--two" />

      <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          className="certifications__header"
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
        >
          <motion.span
            className="section-tag"
            variants={headerItem}
          >
            <span className="certifications__tag-icon">
              🏆
            </span>
            Certifications
          </motion.span>

          <motion.h2
            className="section-heading"
            variants={headerItem}
          >
            Continuous Learning
          </motion.h2>

          <motion.p
            className="section-subheading"
            variants={headerItem}
          >
            Courses and certifications that support my technical growth
            across programming, AI, and data science.
          </motion.p>

          <motion.div
            className="certifications__heading-line"
            variants={headerItem}
          >
            <span />
          </motion.div>
        </motion.div>

        {/* =========================================
            CERTIFICATION CARDS
        ========================================== */}

        <div className="certifications__grid">

          {certifications.map((certification, index) => {
            const ProviderIcon = certification.providerIcon;

            return (
              <motion.article
                key={certification.provider}
                className={`certification-card ${certification.providerClass}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  rotateX: 2.5,
                  rotateY: index === 0 ? -2 : 2,
                }}
              >
                <div className="certification-card__glow" />

                <div className="certification-card__top-line" />

                {/* Provider header */}

                <div className="certification-card__header">

                  <motion.div
                    className="certification-card__provider-icon"
                    whileHover={{
                      rotateY: 180,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.55,
                    }}
                  >
                    <ProviderIcon />
                  </motion.div>

                  <div className="certification-card__provider-info">
                    <span>
                      {certification.label}
                    </span>

                    <h3>
                      {certification.provider}
                    </h3>
                  </div>

                  <div className="certification-card__badge">
                    VERIFIED
                  </div>
                </div>

                {/* Separator */}

                <div className="certification-card__divider">
                  <span />
                </div>

                {/* Courses */}

                <motion.div
                  className="certification-card__courses"
                  variants={courseContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.05,
                  }}
                >
                  {certification.courses.map((course) => {
                    const CourseIcon = course.icon;

                    return (
                      <motion.div
                        key={course.name}
                        className={`certification-course ${course.className}`}
                        variants={courseItem}
                        whileHover={{
                          x: 6,
                          scale: 1.015,
                        }}
                      >
                        <div className="certification-course__icon">
                          <CourseIcon />
                        </div>

                        <div className="certification-course__content">
                          <strong>
                            {course.name}
                          </strong>

                          <span>
                            Completed Course
                          </span>
                        </div>

                        <span className="certification-course__check">
                          ✓
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Floating certificate seal */}

                <motion.div
                  className="certification-card__seal"
                  animate={{
                    rotate: [0, 4, -4, 0],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  <span>
                    CERT
                  </span>
                </motion.div>

                <div className="certification-card__bottom">
                  <span>
                    Learning • Growth • Progress
                  </span>
                </div>
              </motion.article>
            );
          })}

        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================== */}

        <motion.div
          className="certifications__message"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <div className="certifications__message-icon">
            <FaCertificate />
          </div>

          <div>
            <strong>
              Always learning. Always improving.
            </strong>

            <span>
              Continuously expanding my technical knowledge and engineering
              capabilities.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}