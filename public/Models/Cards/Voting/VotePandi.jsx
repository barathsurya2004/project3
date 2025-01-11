/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 votePandi.glb -k -K 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export function VotePandi(props) {
  const { selected } = props;
  const { nodes, materials } = useGLTF("/Models/Cards/Voting/votePandi.glb");
  const ref = useRef();
  useEffect(() => {
    if (selected === "pandi") {
      gsap.to(ref.current.rotation, {
        y: Math.PI,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(ref.current.rotation, {
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [selected]);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group name="Scene">
        <group
          name="Curve003"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[47.722, 81.1, 47.722]}
        >
          <mesh
            name="Curve002_1"
            geometry={nodes.Curve002_1.geometry}
            material={materials["front.017"]}
          />
          <mesh
            name="Curve002_2"
            geometry={nodes.Curve002_2.geometry}
            material={materials["back.017"]}
          />
        </group>
        <mesh
          name="Curve002"
          geometry={nodes.Curve002.geometry}
          material={materials["Material.023"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={47.722}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/votePandi.glb");
