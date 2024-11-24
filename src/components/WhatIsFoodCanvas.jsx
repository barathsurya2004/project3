import { Canvas } from "@react-three/fiber";

import { PerspectiveCamera } from "@react-three/drei";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { CustomEase, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { AnimaFinal } from "../../public/Models/FinalAnim.jsx";
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const WhatIsFoodCanvas = () => {
  const [prog, setProg] = useState(0);
  useGSAP(() => {
    gsap.to(".foods-canvas", {
      duration: 1,
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top 40%",
        end: "top -50%",
        onUpdate: (progress) => {
          setProg(progress.progress);
        },
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div
      className="foods-canvas canvas"
      style={{
        maskImage: `radial-gradient(circle at center left, rgba(255,255,255,1) ${
          (prog + 0.1) * 100
        }%, rgba(255,255,255,1) ${10 + 90 * prog}%, rgba(255,255,255,0) ${
          50 + 50 * prog
        }%, rgba(255,255,255,0) 100%)`,
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100%",
      }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
        <directionalLight
          intensity={2.5}
          position={[2.5, 0, 10]}
          color="#fff5b6"
        />
        <ambientLight intensity={0.3} />
        <group dispose={null} scale={5} position={[3, 0, 0]}>
          <AnimaFinal />
        </group>
      </Canvas>
    </div>
  );
};

export default WhatIsFoodCanvas;
