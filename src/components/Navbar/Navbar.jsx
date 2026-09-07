import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiArrowDownTray } from 'react-icons/hi2';
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);

      const sections = navLinks
        .map((link) => link.href.replace('#', ''));

      let currentSection = 'home';

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const element = document.getElementById(sections[i]);

        if (
          element &&
          window.scrollY >= element.offsetTop - 180
        ) {
          currentSection = sections[i];
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const isExternal = (href) => href.startsWith('http');

  return (
    <>
      <motion.nav
        className={`navbar ${
          scrolled ? 'navbar--scrolled' : ''
        }`}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar__outer">
          <div className="navbar__inner container">

            {/* =========================================
                LOGO
            ========================================== */}

            <motion.a
              className="navbar__logo"
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick('#home');
              }}
              whileHover={{
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <span className="navbar__logo-mark">
                AY
              </span>

              <span className="navbar__logo-name">
                ABISHEK
                <span>Y</span>
              </span>
            </motion.a>

            {/* =========================================
                DESKTOP NAV
            ========================================== */}

            <div className="navbar__center">
              <ul className="navbar__links">
                {navLinks.map((link) => {
                  const section =
                    link.href.replace('#', '');

                  const isActive =
                    activeSection === section;

                  return (
                    <li key={link.href}>
                      <a
                        className={`navbar__link ${
                          isActive
                            ? 'navbar__link--active'
                            : ''
                        }`}
                        href={link.href}
                        onClick={(event) => {
                          event.preventDefault();
                          handleNavClick(link.href);
                        }}
                      >
                        <span>
                          {link.label}
                        </span>

                        {isActive && (
                          <motion.span
                            className="navbar__link-indicator"
                            layoutId="navbar-active"
                            transition={{
                              type: 'spring',
                              stiffness: 420,
                              damping: 30,
                            }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* =========================================
                RIGHT ACTIONS
            ========================================== */}

            <div className="navbar__actions">

              <motion.a
                className="navbar__social"
                href="https://github.com/abishekkk31-developer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -3,
                  rotate: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                className="navbar__social"
                href="https://www.linkedin.com/in/y-abishek-a56420315"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -3,
                  rotate: 3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                className="navbar__whatsapp"
                href="https://wa.me/919566172682"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <FaWhatsapp />
              </motion.a>

              <motion.a
                className="navbar__cta"
                href="/resume.pdf"
                download="Abishek_Y_Resume.pdf"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <HiArrowDownTray size={15} />
                <span>Resume</span>
              </motion.a>

            </div>

            {/* =========================================
                MOBILE TOGGLE
            ========================================== */}

            <motion.button
              className={`navbar__toggle ${
                mobileOpen
                  ? 'navbar__toggle--open'
                  : ''
              }`}
              onClick={() =>
                setMobileOpen(
                  (value) => !value
                )
              }
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              whileTap={{
                scale: 0.92,
              }}
            >
              {mobileOpen ? (
                <HiX size={24} />
              ) : (
                <HiMenu size={24} />
              )}
            </motion.button>

          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="navbar__mobile"
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="navbar__mobile-inner">

                <div className="navbar__mobile-top">
                  <span>
                    Navigation
                  </span>

                  <span className="navbar__mobile-status">
                    ONLINE
                  </span>
                </div>

                <ul className="navbar__mobile-links">
                  {navLinks.map((link, index) => {
                    const section =
                      link.href.replace('#', '');

                    const isActive =
                      activeSection === section;

                    return (
                      <motion.li
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.045,
                          duration: 0.35,
                        }}
                      >
                        <a
                          className={`navbar__mobile-link ${
                            isActive
                              ? 'navbar__mobile-link--active'
                              : ''
                          }`}
                          href={link.href}
                          onClick={(event) => {
                            event.preventDefault();
                            handleNavClick(
                              link.href
                            );
                          }}
                        >
                          <span className="navbar__mobile-index">
                            0{index + 1}
                          </span>

                          <span>
                            {link.label}
                          </span>

                          {isActive && (
                            <span className="navbar__mobile-active-dot" />
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="navbar__mobile-actions">

                  <a
                    href="/resume.pdf"
                    download="Abishek_Y_Resume.pdf"
                    className="navbar__mobile-resume"
                  >
                    <HiArrowDownTray size={17} />
                    Download Resume
                  </a>

                  <div className="navbar__mobile-socials">

                    <a
                      href="https://github.com/abishekkk31-developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/y-abishek-a56420315"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href="https://wa.me/919566172682"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>

                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}