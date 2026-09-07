import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaArrowRight,
  FaCode,
  FaTerminal,
} from 'react-icons/fa';
import './Contact.css';

const contactItems = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'abishekkk31@gmail.com',
    href: 'mailto:abishekkk31@gmail.com',
    className: 'email',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: '+91 9566172682',
    href: 'https://wa.me/919566172682',
    className: 'whatsapp',
  },
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/y-abishek-a56420315',
    className: 'linkedin',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    value: 'View my work',
    href: 'https://github.com/abishekkk31-developer',
    className: 'github',
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

const contentVariants = {
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

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
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

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name || !email || !message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:abishekkk31@gmail.com?subject=${subject}&body=${body}`;

    setFormStatus('Opening your email application...');
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__ambient contact__ambient--one" />
      <div className="contact__ambient contact__ambient--two" />

      <div className="contact__particles">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.span
            key={index}
            style={{
              left: `${5 + ((index * 31) % 90)}%`,
              top: `${8 + ((index * 43) % 82)}%`,
            }}
            animate={{
              opacity: [0.12, 0.6, 0.12],
              y: [0, -10, 0],
              scale: [0.7, 1.15, 0.7],
            }}
            transition={{
              duration: 3 + (index % 4),
              delay: index * 0.18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          className="contact__header"
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
            <span className="contact__tag-icon">✦</span>
            Contact
          </motion.span>

          <motion.h2
            className="section-heading"
            variants={headerItem}
          >
            Let's Build Something Meaningful.
          </motion.h2>

          <motion.p
            className="section-subheading"
            variants={headerItem}
          >
            Whether you're looking for a software developer, QA engineer,
            or IT support professional, let's connect.
          </motion.p>

          <motion.div
            className="contact__heading-line"
            variants={headerItem}
          >
            <span />
          </motion.div>
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div className="contact__grid">

          {/* =================================================
              LEFT — CONNECT
          ================================================== */}

          <motion.div
            className="contact__connect"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
          >
            <div className="contact__connect-heading">
              <div className="contact__connect-icon">
                <FaTerminal />
              </div>

              <div>
                <span>
                  Get In Touch
                </span>

                <h3>
                  Let's start a conversation.
                </h3>
              </div>
            </div>

            <p className="contact__connect-description">
              I'm open to opportunities in software development,
              software testing / QA, and IT support. Feel free to reach
              out through any of the channels below.
            </p>

            {/* Contact cards */}
            <motion.div
              className="contact__items"
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.04,
              }}
            >
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    className={`contact__item ${item.className}`}
                    variants={cardItem}
                    target={
                      item.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    whileHover={{
                      y: -5,
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <div className="contact__item-icon">
                      <Icon />
                    </div>

                    <div className="contact__item-content">
                      <span>
                        {item.title}
                      </span>

                      <strong>
                        {item.value}
                      </strong>
                    </div>

                    <FaArrowRight className="contact__item-arrow" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919566172682"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
              whileHover={{
                y: -5,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <div className="contact__whatsapp-icon">
                <FaWhatsapp />
              </div>

              <div>
                <strong>
                  Message me on WhatsApp
                </strong>

                <span>
                  Quickest way to connect directly
                </span>
              </div>

              <FaArrowRight className="contact__whatsapp-arrow" />
            </motion.a>
          </motion.div>

          {/* =================================================
              RIGHT — FORM
          ================================================== */}

          <motion.div
            className="contact__form-card"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
          >
            <div className="contact__form-glow" />

            <div className="contact__form-header">
              <div>
                <span>
                  Send a Message
                </span>

                <h3>
                  Let's talk.
                </h3>
              </div>

              <motion.div
                className="contact__form-code"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FaCode />
              </motion.div>
            </div>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="contact__field-row">
                <label>
                  <span>
                    Name
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label>
                  <span>
                    Email
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label>
                <span>
                  Message
                </span>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about the opportunity or project..."
                />
              </label>

              <motion.button
                type="submit"
                className="contact__submit"
                whileHover={{
                  y: -4,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <FaPaperPlane />

                <span>
                  Send Message
                </span>

                <FaArrowRight />
              </motion.button>

              {formStatus && (
                <motion.p
                  className="contact__form-status"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  {formStatus}
                </motion.p>
              )}
            </form>

            <div className="contact__secure-note">
              <span />
              Your message opens securely in your default email
              application.
            </div>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM CONNECTION VISUAL
        ================================================== */}

        <motion.div
          className="contact__connection"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="contact__connection-line contact__connection-line--left" />

          <motion.div
            className="contact__connection-core"
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                '0 0 15px rgba(255,42,75,0.08)',
                '0 0 35px rgba(255,42,75,0.22)',
                '0 0 15px rgba(255,42,75,0.08)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaCode />
          </motion.div>

          <div className="contact__connection-text">
            <strong>
              Build • Test • Debug • Improve
            </strong>

            <span>
              Ready for the next challenge.
            </span>
          </div>

          <div className="contact__connection-line contact__connection-line--right" />
        </motion.div>
      </div>
    </section>
  );
}