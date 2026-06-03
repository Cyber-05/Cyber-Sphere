import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface EarthSceneProps {
  zoomLevel?: number;
  onLoadComplete?: () => void;
}

export default function EarthScene({ zoomLevel = 1, onLoadComplete }: EarthSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(0, 0, 4 * zoomLevel);

    // Enhanced stars with twinkling
    const starCount = 12000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2500;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, sizeAttenuation: true });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Enhanced nebula with multiple colors
    const nebulaCount = 1000;
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);
    const nebulaColorsArr = [
      new THREE.Color(0x0044ff), new THREE.Color(0x00aaff), new THREE.Color(0x00ffcc),
      new THREE.Color(0x0066ff), new THREE.Color(0x6600ff), new THREE.Color(0xff0099),
    ];
    for (let i = 0; i < nebulaCount; i++) {
      nebulaPositions[i * 3] = (Math.random() - 0.5) * 1200;
      nebulaPositions[i * 3 + 1] = (Math.random() - 0.5) * 1200;
      nebulaPositions[i * 3 + 2] = (Math.random() - 0.5) * 1200;
      const c = nebulaColorsArr[Math.floor(Math.random() * nebulaColorsArr.length)];
      nebulaColors[i * 3] = c.r;
      nebulaColors[i * 3 + 1] = c.g;
      nebulaColors[i * 3 + 2] = c.b;
    }
    const nebulaGeo = new THREE.BufferGeometry();
    nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));
    const nebulaMat = new THREE.PointsMaterial({ size: 2.5, vertexColors: true, transparent: true, opacity: 0.4, sizeAttenuation: true });
    const nebula = new THREE.Points(nebulaGeo, nebulaMat);
    scene.add(nebula);

    // Shooting stars
    const createShootingStar = () => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array([
        (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000,
      ]);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      const line = new THREE.Line(geometry, material);
      scene.add(line);

      setTimeout(() => scene.remove(line), 2000);
    };
    setInterval(createShootingStar, 3000);

    // High-quality Earth with day/night texture
    const earthGeo = new THREE.SphereGeometry(1.5, 128, 128);

    const createEarthTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 4096;
      canvas.height = 2048;
      const ctx = canvas.getContext('2d')!;

      // Ocean gradient (night side darker)
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, 2048);
      oceanGrad.addColorStop(0, '#000a1a');
      oceanGrad.addColorStop(0.3, '#001a40');
      oceanGrad.addColorStop(0.5, '#003d80');
      oceanGrad.addColorStop(0.7, '#001a40');
      oceanGrad.addColorStop(1, '#000a1a');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, 4096, 2048);

      // Enhanced ocean with realistic shimmer
      for (let i = 0; i < 3000; i++) {
        const x = Math.random() * 4096;
        const y = Math.random() * 2048;
        const r = Math.random() * 5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,150,255,${Math.random() * 0.15})`;
        ctx.fill();
      }

      // Realistic continents with better colors
      const landColors = ['#1a5f2a', '#2d7a3a', '#3a9a4a', '#2a6a32'];

      // North America
      ctx.fillStyle = '#1a5f2a';
      ctx.beginPath();
      ctx.ellipse(700, 700, 360, 320, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#2d7a3a';
      ctx.beginPath();
      ctx.ellipse(760, 600, 240, 200, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // South America
      ctx.fillStyle = '#1a5f2a';
      ctx.beginPath();
      ctx.ellipse(960, 1240, 200, 320, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Europe
      ctx.fillStyle = '#2d7a3a';
      ctx.beginPath();
      ctx.ellipse(1800, 560, 180, 160, -0.1, 0, Math.PI * 2);
      ctx.fill();

      // Africa
      ctx.fillStyle = '#3a6a2a';
      ctx.beginPath();
      ctx.ellipse(1920, 1040, 260, 400, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8a7a2a';
      ctx.beginPath();
      ctx.ellipse(1900, 760, 220, 180, 0, 0, Math.PI * 2);
      ctx.fill();

      // Asia
      ctx.fillStyle = '#1a5f2a';
      ctx.beginPath();
      ctx.ellipse(2500, 600, 560, 400, -0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8a7020';
      ctx.beginPath();
      ctx.ellipse(2400, 560, 320, 240, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Australia
      ctx.fillStyle = '#8a7030';
      ctx.beginPath();
      ctx.ellipse(3100, 1360, 260, 180, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Antarctica
      ctx.fillStyle = '#e8f0ff';
      ctx.beginPath();
      ctx.ellipse(2048, 1960, 1600, 160, 0, 0, Math.PI * 2);
      ctx.fill();

      // City lights on night side
      for (let i = 0; i < 1200; i++) {
        const x = Math.random() * 4096;
        const y = Math.random() * 2048;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,220,100,${Math.random() * 0.4})`;
        ctx.fill();
      }

      return new THREE.CanvasTexture(canvas);
    };

    const createNormalMap = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 4096;
      canvas.height = 2048;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#8080ff';
      ctx.fillRect(0, 0, 4096, 2048);

      for (let i = 0; i < 500; i++) {
        const x = Math.random() * 4096;
        const y = Math.random() * 2048;
        const s = Math.random() * 100 + 20;
        ctx.fillStyle = `rgba(100,150,255,${Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.ellipse(x, y, s, s / 2, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }

      return new THREE.CanvasTexture(canvas);
    };

    const earthTexture = createEarthTexture();
    const normalMap = createNormalMap();

    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(0.5, 0.5),
      specular: new THREE.Color(0x224466),
      shininess: 25,
      emissive: new THREE.Color(0x112244),
      emissiveIntensity: 0.1,
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earthRef.current = earth;
    scene.add(earth);

    // Cloud layer
    const cloudGeo = new THREE.SphereGeometry(1.52, 128, 128);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: (() => {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, 2048, 1024);
        for (let i = 0; i < 400; i++) {
          const x = Math.random() * 2048;
          const y = Math.random() * 1024;
          const rx = Math.random() * 200 + 60;
          const ry = Math.random() * 80 + 20;
          const grad = ctx.createRadialGradient(x, y, 0, x, y, rx);
          grad.addColorStop(0, `rgba(255,255,255,${Math.random() * 0.8 + 0.3})`);
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
          ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
      })(),
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    scene.add(clouds);

    // Atmospheric glow
    const atmosphereGeo = new THREE.SphereGeometry(1.65, 128, 128);
    const atmosphereMat = new THREE.MeshPhongMaterial({
      color: 0x0066cc,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
      emissive: new THREE.Color(0x0044aa),
      emissiveIntensity: 0.15,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphere);

    // Outer atmosphere halo
    const outerGeo = new THREE.SphereGeometry(1.85, 128, 128);
    const outerMat = new THREE.MeshPhongMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
      emissive: new THREE.Color(0x0066ff),
      emissiveIntensity: 0.08,
    });
    const outerAtmosphere = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerAtmosphere);

    // Satellite orbits with security data streams
    const satelliteGroup = new THREE.Group();
    scene.add(satelliteGroup);

    const satelliteData = [
      { radius: 2.3, speed: 0.7, inclination: 0.3, phase: 0, color: 0x00d4ff },
      { radius: 2.6, speed: 0.45, inclination: -0.5, phase: Math.PI / 2, color: 0x00ff88 },
      { radius: 2.0, speed: 1.0, inclination: 0.8, phase: Math.PI, color: 0xff00ff },
      { radius: 2.8, speed: 0.35, inclination: -0.2, phase: Math.PI * 1.5, color: 0x00ffff },
    ];

    satelliteData.forEach(sat => {
      // Orbit ring
      const orbitGeo = new THREE.TorusGeometry(sat.radius, 0.004, 16, 256);
      const orbitMat = new THREE.MeshBasicMaterial({ color: sat.color, transparent: true, opacity: 0.2 });
      const orbit = new THREE.Mesh(orbitGeo, orbitMat);
      orbit.rotation.x = sat.inclination;
      satelliteGroup.add(orbit);

      // Satellite
      const satGeo = new THREE.SphereGeometry(0.025, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({ color: sat.color });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satelliteGroup.add(satMesh);

      // Store satellite data for animation
      (satMesh as any).satData = sat;
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1a3a, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.8);
    sunLight.position.set(8, 4, 6);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x0066ff, 0.8);
    rimLight.position.set(-8, 0, -4);
    scene.add(rimLight);

    // Security data stream particles
    const particleCount = 800;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 25;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Earth rotation
      earth.rotation.y = elapsed * 0.02;
      clouds.rotation.y = elapsed * 0.025;
      clouds.rotation.x = Math.sin(elapsed * 0.01) * 0.01;

      // Mouse interaction
      earth.rotation.x += (mousePos.y * 0.0001 - earth.rotation.x) * 0.05;
      earth.rotation.z += (mousePos.x * 0.0001 - earth.rotation.z) * 0.05;

      // Stars
      stars.rotation.y = elapsed * 0.0005;
      nebula.rotation.y = elapsed * 0.0002;
      nebula.rotation.x = Math.sin(elapsed * 0.001) * 0.02;

      // Satellites with orbits
      satelliteGroup.children.forEach(child => {
        if (child instanceof THREE.Mesh && 'satData' in child) {
          const satData = (child as any).satData;
          if (satData) {
            const angle = satData.phase + elapsed * satData.speed;
            child.position.set(
              satData.radius * Math.cos(angle),
              Math.sin(satData.inclination) * satData.radius * Math.sin(angle),
              satData.radius * Math.sin(angle) * Math.cos(satData.inclination)
            );
          }
        }
      });

      // Particles
      particles.rotation.y = elapsed * 0.008;
      particles.rotation.x = elapsed * 0.004;
      particles.rotation.z = elapsed * 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 });
    };

    // Scroll zoom
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newZoom = 1 + scrollY * 0.0003;
      if (cameraRef.current) {
        cameraRef.current.position.z = 4 * newZoom;
      }
    };

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Call completion callback after initial load
    if (onLoadComplete) {
      setTimeout(onLoadComplete, 500);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        try {
          mountRef.current.removeChild(renderer.domElement);
        } catch (e) {}
      }
      renderer.dispose();
    };
  }, [zoomLevel]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
