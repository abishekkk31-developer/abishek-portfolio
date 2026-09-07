import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.css';

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.92, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease },
  },
};

export default function SectionHeading({
  tag,
  title,
  subtitle,
  className = '',
}) {
  return (
    <motion.div
      className={`section-heading-animated ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
    >
      {tag && (
        <motion.span className="section-heading-animated__tag" variants={tagVariants}>
          <span className="section-heading-animated__tag-dot" />
          {tag}
        </motion.span>
      )}

      <motion.h2 className="section-heading section-heading-animated__title" variants={titleVariants}>
        {title}
        <span className="section-heading-animated__line" aria-hidden="true" />
      </motion.h2>

      {subtitle && (
        <motion.p className="section-subheading section-heading-animated__subtitle" variants={subtitleVariants}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
