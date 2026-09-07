import React, { useEffect, useRef } from 'react';
import './FuturisticBackground.css';

export default function FuturisticBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle collection (flowing energy + dust particles)
    const particleCount = 75;
    const particles = [];
    const colors = [
      'rgba(179, 0, 27, ',    // deep blood red
      'rgba(217, 4, 41, ',    // crimson
      'rgba(139, 0, 0, ',     // dark burgundy
      'rgba(255, 255, 255, ',  // faint crisp white stardust
    ];

    for (let i = 0; i < particleCount; i++) {
      // Concentrate more particles towards the perimeter/edges, keeping center clean
      const edgeBias = Math.random() > 0.35;
      let x = Math.random() * width;
      let y = Math.random() * height;

      if (edgeBias) {
        // Bias towards left/right margins or top/bottom edges
        if (Math.random() > 0.5) {
          x = Math.random() > 0.5 ? Math.random() * (width * 0.25) : width - Math.random() * (width * 0.25);
        } else {
          y = Math.random() > 0.5 ? Math.random() * (height * 0.25) : height - Math.random() * (height * 0.25);
        }
      }

      particles.push({
        x,
        y,
        radius: Math.random() * 2.2 + 0.6,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.1,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.45 - 0.15, // slight upward float
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // Light trails / streams
    const lightTrails = [
      { x: width * 0.08, y: height * 0.2, length: 140, speed: 0.8, angle: Math.PI / 4, alpha: 0.15 },
      { x: width * 0.92, y: height * 0.65, length: 180, speed: 0.6, angle: -Math.PI / 5, alpha: 0.12 },
      { x: width * 0.15, y: height * 0.82, length: 120, speed: 0.7, angle: Math.PI / 6, alpha: 0.14 },
      { x: width * 0.88, y: height * 0.25, length: 160, speed: 0.5, angle: -Math.PI / 4, alpha: 0.16 },
    ];

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw ultra-fine subtle geometric HUD vector lines near edges
      ctx.save();
      ctx.strokeStyle = 'rgba(179, 0, 27, 0.04)';
      ctx.lineWidth = 1;

      // Top-left HUD framing bracket
      ctx.beginPath();
      ctx.moveTo(30, 120);
      ctx.lineTo(30, 40);
      ctx.lineTo(120, 40);
      ctx.stroke();

      // Top-right HUD framing bracket
      ctx.beginPath();
      ctx.moveTo(width - 120, 40);
      ctx.lineTo(width - 30, 40);
      ctx.lineTo(width - 30, 120);
      ctx.stroke();

      // Bottom-left HUD framing bracket
      ctx.beginPath();
      ctx.moveTo(30, height - 120);
      ctx.lineTo(30, height - 40);
      ctx.lineTo(120, height - 40);
      ctx.stroke();

      // Bottom-right HUD framing bracket
      ctx.beginPath();
      ctx.moveTo(width - 120, height - 40);
      ctx.lineTo(width - 30, height - 40);
      ctx.lineTo(width - 30, height - 120);
      ctx.stroke();

      // Delicate outer edge orbital arcs
      ctx.strokeStyle = 'rgba(179, 0, 27, 0.05)';
      ctx.beginPath();
      ctx.arc(0, height * 0.5, 340, -Math.PI * 0.35, Math.PI * 0.35);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width, height * 0.4, 380, Math.PI * 0.65, Math.PI * 1.35);
      ctx.stroke();

      ctx.restore();

      // 2. Render subtle light trails
      lightTrails.forEach((trail) => {
        trail.y -= trail.speed;
        trail.x += Math.sin(time) * 0.2;

        if (trail.y < -trail.length) {
          trail.y = height + trail.length;
          trail.x = Math.random() > 0.5 ? Math.random() * (width * 0.2) : width - Math.random() * (width * 0.2);
        }

        const grad = ctx.createLinearGradient(
          trail.x,
          trail.y,
          trail.x + Math.cos(trail.angle) * trail.length,
          trail.y + Math.sin(trail.angle) * trail.length
        );
        grad.addColorStop(0, 'rgba(179, 0, 27, 0)');
        grad.addColorStop(0.5, `rgba(217, 4, 41, ${trail.alpha})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(trail.x, trail.y);
        ctx.lineTo(
          trail.x + Math.cos(trail.angle) * trail.length,
          trail.y + Math.sin(trail.angle) * trail.length
        );
        ctx.stroke();
        ctx.restore();
      });

      // 3. Render flowing red energy & dust particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulseVal += p.pulseSpeed;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulseVal));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${currentAlpha})`;
        ctx.fill();

        // Soft outer glow for select crimson particles
        if (p.radius > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(179, 0, 27, ${currentAlpha * 0.25})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="futuristic-bg" aria-hidden="true">
      {/* 1. Pure Matte Black base */}
      <div className="futuristic-bg__base" />

      {/* 2. Very subtle central radial glow (keeps center ultra dark & readable) */}
      <div className="futuristic-bg__center-radial" />

      {/* 3. Deep blood-red volumetric atmospheric edge glows */}
      <div className="futuristic-bg__glow-perimeter futuristic-bg__glow-perimeter--left" />
      <div className="futuristic-bg__glow-perimeter futuristic-bg__glow-perimeter--right" />
      <div className="futuristic-bg__glow-perimeter futuristic-bg__glow-perimeter--top" />
      <div className="futuristic-bg__glow-perimeter futuristic-bg__glow-perimeter--bottom" />

      {/* 4. Canvas rendering particles, orbital arcs, light trails, and HUD lines */}
      <canvas ref={canvasRef} className="futuristic-bg__canvas" />
    </div>
  );
}
