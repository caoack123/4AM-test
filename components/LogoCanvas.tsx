
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const LogoCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x6366f1, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const accentLight = new THREE.PointLight(0xbef264, 2);
    accentLight.position.set(-5, -5, 5);
    scene.add(accentLight);

    // Group to hold our logo
    const group = new THREE.Group();
    scene.add(group);

    // Load Font and Create 3D Text
    const loader = new FontLoader();
    // Using helvetiker_bold typeface from three.js examples
    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.json', (font) => {
      const geometry = new TextGeometry('4AM', {
        font: font,
        size: 1.5,
        height: 0.4,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 5
      });
      geometry.center();

      const material = new THREE.MeshPhongMaterial({ 
        color: 0xffffff, 
        specular: 0x6366f1,
        shininess: 100,
        emissive: 0x1e293b
      });
      const textMesh = new THREE.Mesh(geometry, material);
      group.add(textMesh);

      // Add a wireframe clone for tech look
      const wireframeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xbef264, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
      wireframeMesh.scale.set(1.05, 1.05, 1.05);
      group.add(wireframeMesh);
    });

    // Particle System (Stars/Dust)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.8
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation towards mouse
      group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.1;
      group.rotation.x += (mouseY * 0.5 - group.rotation.x) * 0.1;

      // Constant slow rotation for life
      group.rotation.y += 0.005;

      // Particles animation
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[400px]" />;
};

export default LogoCanvas;
