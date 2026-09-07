import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPostman,
} from 'react-icons/si';
import { FaJava, FaGithub } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import './Projects.css';

const techStack = [
  { name: 'React.js', icon: SiReact, color: '#61dafb' },
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
];

const highlights = [
  'Full-stack expense tracking with React.js frontend and Spring Boot backend',
  'Secure user authentication with RESTful API integration',
  'Real-time expense data handling with MySQL persistent storage',
  'API testing and debugging with Postman for endpoint validation',
  'Systematic error handling and troubleshooting across the full stack',
  'Deployed and accessible via Vercel with live demo available',
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">🚀 Featured Project</span>

          <h2 className="section-heading">
            Smart Expense Tracker
          </h2>

          <p className="section-subheading">
            A full-stack application designed to simplify personal expense management.
          </p>
        </motion.div>

        <motion.div
          className="projects__card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
          whileHover={{ y: -6 }}
        >
          {/* Browser Mockup Preview */}
          <div className="projects__preview">
            <div className="projects__browser">
              <div className="projects__browser-bar">
                <div className="projects__browser-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#ffbd2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>

                <div className="projects__browser-url">
                  <span className="projects__browser-lock">
                    🔒
                  </span>

                  smart-expenses-tracker-liart.vercel.app
                </div>
              </div>

              <div className="projects__browser-content">
                {/* Simulated dashboard UI */}
                <div className="projects__mock-ui">

                  <div className="projects__mock-sidebar">
                    <div className="projects__mock-logo">
                      💰 SmartTrack
                    </div>

                    <div className="projects__mock-nav-item projects__mock-nav-item--active">
                      Dashboard
                    </div>

                    <div className="projects__mock-nav-item">
                      Expenses
                    </div>

                    <div className="projects__mock-nav-item">
                      Reports
                    </div>

                    <div className="projects__mock-nav-item">
                      Settings
                    </div>
                  </div>

                  <div className="projects__mock-main">

                    <div className="projects__mock-header">
                      <h4>
                        Dashboard Overview
                      </h4>

                      <span className="projects__mock-date">
                        September 2025
                      </span>
                    </div>

                    <div className="projects__mock-stats">
                      {[
                        {
                          label: 'Total Expenses',
                          value: '₹12,450',
                          color: '#ff2a4b',
                        },
                        {
                          label: 'This Month',
                          value: '₹3,200',
                          color: '#ffffff',
                        },
                        {
                          label: 'Savings',
                          value: '₹8,750',
                          color: '#ff5e7e',
                        },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="projects__mock-stat"
                          style={{
                            borderColor: `${stat.color}33`,
                          }}
                        >
                          <span
                            className="projects__mock-stat-value"
                            style={{
                              color: stat.color,
                            }}
                          >
                            {stat.value}
                          </span>

                          <span className="projects__mock-stat-label">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="projects__mock-chart">
                      {[70, 45, 85, 55, 90, 40, 75].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="projects__mock-bar"
                            style={{
                              height: `${h}%`,
                              background:
                                'linear-gradient(to top, #ff2a4b, #ffffff)',
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        )
                      )}
                    </div>

                    <div className="projects__mock-label">
                      Monthly Expense Chart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="projects__info">
            <div className="projects__info-inner">

              <h3 className="projects__title">
                Smart Expense Tracker
              </h3>

              <p className="projects__description">
                Developed a full-stack expense tracking web application using
                React.js, HTML5, CSS3, and JavaScript on the frontend, with Java
                Spring Boot on the backend and MySQL for persistent data storage.
                Implemented secure user authentication and RESTful API
                integration to support real-time expense data handling.
              </p>

              <p className="projects__description">
                Performed comprehensive API testing and debugging using Postman
                to validate endpoints, verify request/response data, and identify
                bugs prior to deployment. Applied systematic troubleshooting and
                error handling across the stack to improve application stability
                and performance.
              </p>

              {/* Highlights */}
              <ul className="projects__highlights">
                {highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.3 + i * 0.07,
                    }}
                  >
                    <span className="projects__highlight-dot" />
                    {h}
                  </motion.li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="projects__tech">
                <span className="projects__tech-label">
                  Built with
                </span>

                <div className="projects__tech-icons">
                  {techStack.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <motion.div
                        key={tech.name}
                        className="projects__tech-icon"
                        title={tech.name}
                        whileHover={{
                          scale: 1.2,
                          y: -3,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                        }}
                      >
                        <Icon
                          size={22}
                          style={{
                            color: tech.color,
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Action buttons */}
              <div className="projects__actions">
                <a
                  className="btn-primary"
                  href="https://smart-expenses-tracker-liart.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiArrowTopRightOnSquare size={18} />
                  Live Demo
                </a>

                <a
                  className="btn-secondary"
                  href="https://github.com/abishekkk31-developer/SMART-EXPENSES-TRACKER"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={18} />
                  View on GitHub
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}