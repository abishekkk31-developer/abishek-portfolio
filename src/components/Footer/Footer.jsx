import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  HiArrowUp,
  HiArrowTopRightOnSquare,
} from 'react-icons/hi2';
import './Footer.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="footer">

      {/* TOP ENERGY LINE */}
      <div className="footer__energy-line">
        <span />
      </div>

      {/* AMBIENT LIGHT */}
      <div className="footer__ambient footer__ambient--left" />
      <div className="footer__ambient footer__ambient--right" />

      <div className="footer__container container">

        {/* =========================================
            MAIN FOOTER CTA
        ========================================== */}

        <motion.div
          className="footer__hero"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="footer__hero-content">

            <div className="footer__status">
              <span className="footer__status-dot" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <h2>
              LET'S BUILD
              <span> SOMETHING GREAT.</span>
            </h2>

            <p>
              Open to Software Development, QA / Testing,
              and IT Support opportunities.
            </p>

          </div>

          <motion.a
            href="#contact"
            className="footer__contact-btn"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('#contact');
            }}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <span>LET'S TALK</span>
            <HiArrowTopRightOnSquare />
          </motion.a>

        </motion.div>

        {/* =========================================
            DIVIDER
        ========================================== */}

        <div className="footer__divider" />

        {/* =========================================
            FOOTER GRID
        ========================================== */}

        <div className="footer__grid">

          {/* BRAND */}

          <motion.div
            className="footer__brand"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <a
              href="#home"
              className="footer__logo"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('#home');
              }}
            >
              <span className="footer__logo-mark">
                AY
              </span>

              <span className="footer__logo-text">
                ABISHEK<span>Y</span>
              </span>
            </a>

            <p className="footer__brand-text">
              Software Engineer focused on building reliable
              applications, testing quality software, and
              solving technical problems.
            </p>

            <div className="footer__socials">

              <motion.a
                href="https://github.com/abishekkk31-developer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/y-abishek-a56420315"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://wa.me/919566172682"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
              >
                <FaWhatsapp />
              </motion.a>

            </div>

          </motion.div>

          {/* NAVIGATION */}

          <motion.div
            className="footer__column"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
          >

            <span className="footer__column-label">
              NAVIGATION
            </span>

            <div className="footer__links">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

          </motion.div>

          {/* STACK */}

          <motion.div
            className="footer__column"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
          >

            <span className="footer__column-label">
              CORE STACK
            </span>

            <div className="footer__stack">

              <span>Java</span>
              <span>React</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>Postman</span>

            </div>

          </motion.div>

          {/* AVAILABILITY */}

          <motion.div
            className="footer__column"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.24,
            }}
          >

            <span className="footer__column-label">
              STATUS
            </span>

            <div className="footer__availability">

              <div className="footer__availability-dot">
                <span />
              </div>

              <div>
                <strong>
                  Open to Work
                </strong>

                <small>
                  Chennai · India
                </small>
              </div>

            </div>

            <a
              href="mailto:abishekkk31@gmail.com"
              className="footer__email"
            >
              abishekkk31@gmail.com
            </a>

          </motion.div>

        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================== */}

        <div className="footer__bottom">

          <p>
            © {new Date().getFullYear()} ABISHEK Y.
            ALL RIGHTS RESERVED.
          </p>

          <span className="footer__bottom-center">
            DESIGNED · DEVELOPED · TESTED
          </span>

          <motion.button
            className="footer__top-btn"
            onClick={() => scrollToSection('#home')}
            aria-label="Back to top"
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.92,
            }}
          >
            <HiArrowUp />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}