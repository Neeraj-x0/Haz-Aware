import React, { useState, useEffect } from 'react';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene
  const computer = useGLTF("src/assets/rusty_barrel.glb");
  const [rotationY, setRotationY] = useState(0); // State to control Y rotation

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on window scroll position
      const rotation = (window.scrollY / window.innerHeight) * Math.PI; // Rotate 180 degrees (PI radians) across the full height of the window
      setRotationY(rotation);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={100} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight
        position={[-30, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? [2, 2, 2] : [12, 10, 10]}
        position={isMobile ? [-2, -1.5, -2.2] : [-7, -4, -7.5]}
        rotation={[0, rotationY, 0]} // Use rotationY state for dynamic rotation
      />
    </mesh>
  );
};

// ComputersCanvas remains the same
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
