import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  Sky,
  useTexture,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Doors from "./Doors";
import floorTexture from "./floor.png";
import { Ground } from "./Ground";

const Experience = () => {
  const [speed, setSpeed] = useState(1.5);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 800) {
        setSpeed(15);
      } else {
        setSpeed(1.5);
      }
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Проверка размера экрана при первой загрузке страницы

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  const texture = useTexture(floorTexture);

  return (
    <PresentationControls  className="PresentationControls"
    speed={speed}
    global
    zoom={0.7}
    polar={[-0.02, Math.PI / 4]}>
      
      <color args={[0, 0, 0]} attach="background" />

      

      <spotLight
        color={[1, 1, 1]}
        intensity={10}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={10}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={10}
        angle={0.6}
        penumbra={0.5}
        position={[0, 5, 0]}
        
        shadow-bias={-0.0001}
      />

      
      <Stage environment="forest" intensity={0.2} castShadow={true}>
        <Suspense fallback={null}>
          <Doors />
          
        </Suspense>
      </Stage>

        <mesh position-y={-0.15}>
        <Ground />
        
        </mesh>
        <spotLight intensity={20} position-y={3} position-z={-10} />
        <spotLight intensity={20} position-y={2} position-z={10} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
        
        
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
