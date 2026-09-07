import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Only enable on pointer-supported devices (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      posRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });

      // Dynamic light particles on movement
      if (Math.random() > 0.65) {
        const id = Date.now() + Math.random();
        const colors = ['#ff2a4b', '#ffffff', '#ff5e7e', '#ff1a3c', '#ffd1d9'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.floor(Math.random() * 5) + 3;

        setSparkles((prev) => [
          ...prev.slice(-15),
          {
            id,
            x: e.clientX + (Math.random() * 16 - 8),
            y: e.clientY + (Math.random() * 16 - 8),
            color: randomColor,
            size,
          },
        ]);

        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 600);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractiveOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, .skill-card, .cert-card, .projects__card, [role="button"]');
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleInteractiveOver);

    // Smooth physics-based spring lerp for the trailing 3D aura
    const animateTrail = () => {
      const dx = posRef.current.x - trailRef.current.x;
      const dy = posRef.current.y - trailRef.current.y;

      trailRef.current.x += dx * 0.18;
      trailRef.current.y += dy * 0.18;

      setTrailingPos({ x: trailRef.current.x, y: trailRef.current.y });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleInteractiveOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-container">
      {/* 3D Ambient Volumetric Spotlight (Moves behind cards and elements) */}
      <div
        className="cursor-ambient-glow"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Trailing 3D Prismatic Ring */}
      <div
        className={`cursor-trail-ring ${isHovered ? 'cursor-trail-ring--hover' : ''} ${isClicking ? 'cursor-trail-ring--click' : ''}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div className="cursor-trail-inner" />
      </div>

      {/* Sharp Core 3D Pointer Dot */}
      <div
        className={`cursor-dot ${isHovered ? 'cursor-dot--hover' : ''} ${isClicking ? 'cursor-dot--click' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Dynamic Starlight particles */}
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="cursor-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 10px ${sparkle.color}, 0 0 20px ${sparkle.color}`,
          }}
        />
      ))}
    </div>
  );
}
