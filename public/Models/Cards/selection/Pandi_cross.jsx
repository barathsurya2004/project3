/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 pandi_cross.glb 
*/

import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";

export function PandiCross({ int }) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(
    "/Models/Cards/selection/pandi_cross.glb"
  );
  const { actions, names } = useAnimations(animations, group);

  return (
    <group ref={group} position={[0, 0, 1]} scale={10} dispose={null}>
      <group name="Scene">
        <group name="Empty" scale={0.083}>
          <group
            name="P_cross"
            rotation={[Math.PI / 2, 0, 0]}
            scale={[28.665, 48.714, 28.665]}
          >
            <mesh
              name="Curve013"
              geometry={nodes.Curve013.geometry}
              material={materials["back.008"]}
            />
            <mesh
              name="Curve013_1"
              geometry={nodes.Curve013_1.geometry}
              material={materials["back.008"]}
            />
            <mesh
              name="Curve013_2"
              geometry={nodes.Curve013_2.geometry}
              material={materials["Material.024"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pandi_cross.glb");