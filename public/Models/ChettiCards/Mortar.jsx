/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 mortar.glb -k -K 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function MortarCard(props) {
  const { nodes, materials } = useGLTF("/Models/ChettiCards/mortar.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Bhai_Cardtex017"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[10, 7.526, 10]}
        >
          <mesh
            name="Bhai_Card052"
            geometry={nodes.Bhai_Card052.geometry}
            material={materials["front.005"]}
          />
          <mesh
            name="Bhai_Card052_1"
            geometry={nodes.Bhai_Card052_1.geometry}
            material={materials["back.004"]}
          />
          <mesh
            name="Bhai_Cardout017"
            geometry={nodes.Bhai_Cardout017.geometry}
            material={materials["Material.003"]}
            scale={[1, 1.329, 1]}
          />
          <mesh
            name="mortar_and_pestle002"
            geometry={nodes.mortar_and_pestle002.geometry}
            material={materials.blinn1SG}
            position={[0, 0, -0.027]}
            rotation={[0, 0, 1.561]}
            scale={[0.05, 0.037, 0.037]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mortar.glb");
