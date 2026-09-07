import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

/* =========================================================
   PARTICLE SPHERE
========================================================= */

function ParticleSphere() {
  const ref = useRef(null);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const [positions, colors] = useMemo(() => {
    const count = 1700;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = {
      r: 0.545,
      g: 0,
      b: 0,
    };

    const color2 = {
      r: 1,
      g: 1,
      b: 1,
    };

    const color3 = {
      r: 0.702,
      g: 0,
      b: 0.106,
    };

    for (let i = 0; i < count; i += 1) {
      const normalized = i / count;

      /* Fibonacci sphere distribution */
      const phi = Math.acos(1 - 2 * normalized);

      const theta =
        Math.PI *
        (1 + Math.sqrt(5)) *
        i;

      const radius =
        1.8 +
        (Math.random() - 0.5) * 0.4;

      const sinPhi = Math.sin(phi);

      positions[i * 3] =
        radius *
        sinPhi *
        Math.cos(theta);

      positions[i * 3 + 1] =
        radius *
        sinPhi *
        Math.sin(theta);

      positions[i * 3 + 2] =
        radius *
        Math.cos(phi);

      let r;
      let g;
      let b;

      if (normalized < 0.33) {
        const t = normalized * 3;

        r =
          color1.r +
          (color2.r - color1.r) * t;

        g =
          color1.g +
          (color2.g - color1.g) * t;

        b =
          color1.b +
          (color2.b - color1.b) * t;
      } else if (normalized < 0.66) {
        const t =
          (normalized - 0.33) * 3;

        r =
          color2.r +
          (color3.r - color2.r) * t;

        g =
          color2.g +
          (color3.g - color2.g) * t;

        b =
          color2.b +
          (color3.b - color2.b) * t;
      } else {
        const t =
          (normalized - 0.66) * 3;

        r =
          color3.r +
          (color1.r - color3.r) * t;

        g =
          color3.g +
          (color1.g - color3.g) * t;

        b =
          color3.b +
          (color1.b - color3.b) * t;
      }

      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    return [positions, colors];
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      mouseRef.current.y =
        -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    const time =
      state.clock.elapsedTime;

    ref.current.rotation.y =
      time * 0.08 +
      mouseRef.current.x * 0.15;

    ref.current.rotation.x =
      Math.sin(time * 0.05) * 0.12 +
      mouseRef.current.y * 0.08;

    ref.current.rotation.z =
      Math.cos(time * 0.03) * 0.05;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      colors={colors}
      stride={3}
    >
      <PointMaterial
        vertexColors
        size={0.024}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.86}
      />
    </Points>
  );
}

/* =========================================================
   INNER ORBIT
========================================================= */

function InnerOrbit() {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    const time =
      state.clock.elapsedTime;

    ref.current.rotation.z =
      time * 0.2;

    ref.current.rotation.x =
      Math.PI / 4;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry
        args={[
          1.1,
          0.006,
          12,
          80,
        ]}
      />

      <meshBasicMaterial
        color="#b3001b"
        transparent
        opacity={0.42}
      />
    </mesh>
  );
}

/* =========================================================
   OUTER ORBIT
========================================================= */

function OuterOrbit() {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    const time =
      state.clock.elapsedTime;

    ref.current.rotation.z =
      -time * 0.12;

    ref.current.rotation.x =
      Math.PI / 6;

    ref.current.rotation.y =
      time * 0.08;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry
        args={[
          2.2,
          0.004,
          12,
          80,
        ]}
      />

      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

/* =========================================================
   CORE
========================================================= */

function CoreGlow() {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    const time =
      state.clock.elapsedTime;

    const scale =
      1 +
      Math.sin(time * 1.5) * 0.06;

    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry
        args={[
          0.18,
          24,
          24,
        ]}
      />

      <meshBasicMaterial
        color="#8b0000"
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

/* =========================================================
   HERO SCENE
========================================================= */

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 60,
      }}
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 1.25]}
    >
      <ambientLight
        intensity={0.5}
      />

      <pointLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#b3001b"
      />

      <pointLight
        position={[-5, -3, -5]}
        intensity={0.6}
        color="#ffffff"
      />

      <ParticleSphere />

      <InnerOrbit />

      <OuterOrbit />

      <CoreGlow />
    </Canvas>
  );
}