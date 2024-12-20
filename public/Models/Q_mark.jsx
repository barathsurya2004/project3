/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 q_mark.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useFrame } from "@react-three/fiber";
gsap.registerPlugin(ScrollTrigger);

export function QuestionModel(props) {
  const ref = React.useRef();
  const { nodes, materials } = useGLTF("/Models/q_mark.glb");
  const [active, setActive] = React.useState(false);
  useGSAP(() => {
    gsap.fromTo(
      ref.current.position,
      {
        y: -1.92,
      },
      {
        y: -1.5,
        scrollTrigger: {
          trigger: ".scroll-control",
          start: "top bottom",
          end: "top 95%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-control",
        start: "top 95%",
        end: "top 25%",
        onLeave: () => {
          setActive(true);
        },
        onEnterBack: () => {
          setActive(false);
        },
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
    tl.fromTo(
      ref.current.position,
      {
        x: 2.03,
        y: -1.5,
      },
      {
        x: 3,
        y: 1,
        duration: 2,
        immediateRender: false,
      }
    )
      .fromTo(
        ref.current.scale,
        {
          x: 0.024,
          y: 0.024,
          z: 0.024,
        },
        {
          x: 0.1,
          y: 0.1,
          z: 0.1,
          duration: 2,
        },
        "<"
      )
      .fromTo(
        ref.current.position,
        {
          y: 1,
        },
        {
          y: -3,
          duration: 2,
          immediateRender: false,
        }
      )
      .fromTo(
        ref.current.scale,
        {
          x: 0.1,
          y: 0.1,
          z: 0.1,
        },
        {
          x: 0.4,
          y: 0.4,
          z: 0.4,
          duration: 2,
          immediateRender: false,
        },
        "<"
      );
  });
  useFrame(() => {
    if (active) {
      ref.current.rotation.y = (ref.current.rotation.y + 0.01) % (Math.PI * 2);
    } else {
      gsap.to(ref.current.rotation, {
        y: 0,
        duration: 1,
      });
    }
  });
  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={0.035}
      position={[2.03, -1.92, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.svgMeshShape3.geometry}
          material={materials["aiStandardSurface2.001"]}
          position={[-4.752, -0.788, -2]}
          scale={[1, 1.575, 1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/q_mark.glb");
