import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

const ALL_SKILLS = [
  // Programming
  { name: 'Python', icon: 'python', color: '#38bdf8' },
  { name: 'SQL', icon: 'mysql', color: '#0284c7' },
  { name: 'JavaScript', icon: 'javascript', color: '#facc15' },
  
  // Core Concepts
  { name: 'Data Structures', color: '#a855f7' },
  { name: 'OOPS', color: '#c084fc' },
  { name: 'Algorithms', color: '#a855f7' },
  { name: 'Probability', color: '#6366f1' },
  { name: 'Statistics', color: '#818cf8' },
  
  // Machine Learning
  { name: 'Scikit-learn', icon: 'python', color: '#fb923c' },
  { name: 'TensorFlow', icon: 'tensorflow', color: '#f97316' },
  { name: 'Keras', icon: 'tensorflow', color: '#ef4444' },
  { name: 'Classification', color: '#f97316' },
  { name: 'Regression', color: '#fb923c' },
  { name: 'Time Series', color: '#fb7185' },
  { name: 'Model Evaluation', color: '#f43f5e' },
  { name: 'Hyperparameter Tuning', color: '#fda4af' },

  // Data Analysis
  { name: 'Pandas', icon: 'pandas', color: '#15803d' },
  { name: 'NumPy', icon: 'numpy', color: '#22c55e' },
  { name: 'Matplotlib', color: '#4ade80' },
  { name: 'Seaborn', color: '#86efac' },
  { name: 'Excel', color: '#16a34a' },
  { name: 'Data Cleaning', color: '#10b981' },
  { name: 'EDA', color: '#34d399' },
  { name: 'Feature Engineering', color: '#059669' },

  // NLP & AI
  { name: 'TF-IDF', color: '#8b5cf6' },
  { name: 'Text Vectorization', color: '#a78bfa' },
  { name: 'LLMs (GPT/Claude)', color: '#d8b4fe' },
  { name: 'Prompt Engineering', color: '#c084fc' },
  { name: 'LLM Integration', color: '#a855f7' },

  // Backend & DevOps
  { name: 'Django', icon: 'django', color: '#097969' },
  { name: 'FastAPI', icon: 'fastapi', color: '#0d9488' },
  { name: 'Node.js', icon: 'nodejs', color: '#16a34a' },
  { name: 'Express.js', icon: 'express', color: '#ffffff' },
  { name: 'REST APIs', color: '#0ea5e9' },
  { name: 'JWT Auth', color: '#38bdf8' },
  { name: 'Docker', icon: 'docker', color: '#2563eb' },
  { name: 'Apache Kafka', color: '#ffffff' },

  // Frontend
  { name: 'HTML5', icon: 'html5', color: '#e34f26' },
  { name: 'CSS3', icon: 'css3', color: '#1572b6' },
  { name: 'React.js', icon: 'react', color: '#61dafb' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#38bdf8' },

  // Databases & Search
  { name: 'SQLite', icon: 'sqlite', color: '#003b57' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
  { name: 'Elasticsearch', icon: 'elasticsearch', color: '#00bfb3' },

  // Tools & Platforms
  { name: 'Git', icon: 'git', color: '#f05032' },
  { name: 'GitHub', icon: 'github', color: '#ffffff' },
  { name: 'VS Code', icon: 'vscode', color: '#007acc' },
  { name: 'Jupyter', icon: 'jupyter', color: '#f37626' },
  { name: 'Google Colab', color: '#f9ab00' },
  { name: 'Streamlit', color: '#ff4b4b' },
  { name: 'Logstash', color: '#00bfb3' },
  { name: 'Kibana', color: '#00bfb3' },
  { name: 'Vercel', color: '#ffffff' },
  { name: 'Render', color: '#4338ca' }
];

// Staggered Holographic Skill Node with Official Logo
function SkillNode({ name, icon, color, x, y, z }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.35 * delta;
      meshRef.current.rotation.y += 0.45 * delta;
    }
  });

  const wallX = x > 0 ? 5 : -5;
  
  // Official Devicon CDN URL
  const logoUrl = icon 
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg` 
    : null;

  return (
    <group>
      {/* Laser line to side wall */}
      <Line
        points={[[x, y, z], [wallX, y, z]]}
        color={color}
        lineWidth={0.5}
        transparent
        opacity={0.12}
      />

      {/* Rotating 3D node */}
      <mesh ref={meshRef} position={[x, y, z]}>
        <octahedronGeometry args={[0.22]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Glassmorphic HTML overlay badge */}
      <Html
        position={[x, y + 0.45, z]}
        center
        distanceFactor={7}
        className="pointer-events-none select-none"
      >
        <div 
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white border whitespace-nowrap shadow-md select-none transition-all duration-300"
          style={{ 
            background: 'rgba(10, 10, 10, 0.85)',
            borderColor: `${color}35`,
            boxShadow: `0 0 10px ${color}15`
          }}
        >
          {logoUrl ? (
            <img 
              src={logoUrl} 
              className="w-3.5 h-3.5 object-contain" 
              alt="" 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          ) : (
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          )}
          <span>{name}</span>
        </div>
      </Html>
    </group>
  );
}

// Gargantua-style 3D Black Hole at the bottom of the Z-axis
function BlackHole() {
  const diskRef = useRef();
  
  useFrame((state, delta) => {
    if (diskRef.current) {
      diskRef.current.rotation.z += 0.22 * delta; // rotate accretion disk
    }
  });

  return (
    <group position={[0, 0, -140]}>
      {/* Event Horizon (Pure Black Light-Absorbing Sphere) */}
      <mesh>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Tilted Accretion Disk (Swirling glowing ring) */}
      <mesh ref={diskRef} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[3.2, 0.38, 8, 64]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={2.8}
          transparent
          opacity={0.85}
        />
      </mesh>
      
      {/* Outer Corona glow */}
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <ringGeometry args={[2.4, 5.5, 32]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// 5D Tesseract Grid tunnel
function GridTunnel() {
  const count = 17;
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => {
        const z = -i * 9;
        const color = i % 2 === 0 ? '#3b82f6' : '#a855f7';
        return (
          <mesh key={i} position={[0, 0, z]}>
            <boxGeometry args={[10, 8.5, 9]} />
            <meshStandardMaterial
              color={color}
              wireframe
              emissive={color}
              emissiveIntensity={1.2}
              transparent
              opacity={0.35}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// High performance floating dust/particles
function StarParticles() {
  const count = 350;
  const pointsRef = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28; // y
      pos[i * 3 + 2] = -Math.random() * 160; // z
      sp[i] = 7 + Math.random() * 9; // speed
    }
    return [pos, sp];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    if (!geo || !geo.attributes || !geo.attributes.position) return;
    const array = geo.attributes.position.array;
    if (!array) return;

    for (let i = 0; i < count; i++) {
      const zIdx = i * 3 + 2;
      array[zIdx] += speeds[i] * delta; // move z forward
      
      // Reset far back when it flies behind camera
      if (array[zIdx] > 10) {
        array[zIdx] = -155;
      }
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.11}
        color="#c084fc"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Scrollytelling Scene Coordinator
function TesseractScene({ parentContainer }) {
  // Stagger all 50+ skills along the Z-axis in a spiral tunnel
  const skillNodes = useMemo(() => {
    return ALL_SKILLS.map((skill, index) => {
      // Circular spiral placement
      const angle = (index * 0.7) % (2 * Math.PI);
      const radius = 2.6 + (index % 3) * 0.4;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      // Distribute from Z = -8 down to Z = -130
      const z = -8 - index * 2.3;
      return {
        ...skill,
        x,
        y,
        z
      };
    });
  }, []);

  useFrame((state) => {
    if (!parentContainer.current) return;
    const rect = parentContainer.current.getBoundingClientRect();
    
    // Calculate native scroll percentage of this container
    const total = rect.height - window.innerHeight;
    const current = -rect.top;
    const progress = Math.max(0, Math.min(1, current / total));
    
    // Map progress to camera Z position: start at 5, fly to -135
    const targetZ = 5 - progress * 140;
    
    // Smooth camera Z movement
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);
  });

  return (
    <group>
      {/* 5D wireframe tunnel grid */}
      <GridTunnel />

      {/* Gargantua Black Hole Event Horizon & Accretion Disk */}
      <BlackHole />

      {/* Spiral list of 50+ skill badges */}
      {skillNodes.map((node, i) => (
        <SkillNode key={i} {...node} />
      ))}

      {/* Falling stars */}
      <StarParticles />
    </group>
  );
}

export default function SkillsTesseract() {
  const containerRef = useRef();

  return (
    <section ref={containerRef} id="skills" className="relative h-[300vh] bg-[#0a0a0a] overflow-visible">
      {/* Sticky layout container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Floating section descriptors */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none select-none">
          <span className="text-xs font-mono tracking-widest text-neonPurple uppercase">// 5D Space</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">Tech Stack</h2>
          <p className="text-gray-500 text-xs mt-1">Scroll down to traverse the skills dimension</p>
        </div>

        {/* 3D Canvas */}
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 60 }} 
          gl={{ antialias: true }}
          className="w-full h-full"
        >
          <color attach="background" args={['#0a0a0a']} />
          {/* Depth Fog prevents abrupt object popping */}
          <fog attach="fog" args={['#0a0a0a', 15, 55]} />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1.0} />

          <Suspense fallback={null}>
            <TesseractScene parentContainer={containerRef} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
