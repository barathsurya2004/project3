/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 pandiColor.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function PandiColorModel(props) {
  const { nodes, materials } = useGLTF(
    "/Models/Cards/new/Pandi/pandiColor.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_2713001.geometry}
        material={nodes.Mesh_2713001.material}
        rotation={[0, 0, -Math.PI]}
        scale={[-50, -50, -14.994]}
      >
        <mesh
          geometry={nodes.Coin.geometry}
          material={materials["Gold.001"]}
          position={[0, 0.043, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.136, -0.136, -0.46]}
        />
        <mesh
          geometry={nodes.Mesh_1402002.geometry}
          material={materials["Material.036"]}
          position={[-0.001, -0.041, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
        <mesh
          geometry={nodes.Mesh_2280002.geometry}
          material={materials["Material.036"]}
          position={[0, -0.063, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
        <mesh
          geometry={nodes.Mesh_2369002.geometry}
          material={materials["Material.034"]}
          position={[0, -0.001, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
        <mesh
          geometry={nodes.Mesh_2659001.geometry}
          material={materials["Material.036"]}
          position={[-0.006, -0.098, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pandiColor.glb");
