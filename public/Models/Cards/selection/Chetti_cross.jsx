/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 chetti_cross.glb -k -K 
*/

import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function ChettiCross(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(
    "/Models/Cards/selection/chetti_cross.glb"
  );

  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[0]].play();
  }, []);
  return (
    <group
      ref={group}
      {...props}
      position={[0, 0, 2]}
      scale={10}
      dispose={null}
    >
      <group name="Scene">
        <group name="Empty" scale={0.188}>
          <group name="C_cross" rotation={[Math.PI / 2, 0, 0]} scale={12.708}>
            <mesh
              name="Curve008"
              geometry={nodes.Curve008.geometry}
              material={materials["front.018"]}
            />
            <mesh
              name="Curve008_1"
              geometry={nodes.Curve008_1.geometry}
              material={materials["back.006"]}
            />
            <mesh
              name="Curve008_2"
              geometry={nodes.Curve008_2.geometry}
              material={materials["Material.019"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chetti_cross.glb");