/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 blender.glb -k -K 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function BlenderCard(props) {
  const { nodes, materials } = useGLTF("/Models/PandiCards/blender.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Bhai_Cardtex025"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[10, 7.526, 10]}
        >
          <mesh
            name="Bhai_Card076"
            geometry={nodes.Bhai_Card076.geometry}
            material={materials["front.011"]}
          />
          <mesh
            name="Bhai_Card076_1"
            geometry={nodes.Bhai_Card076_1.geometry}
            material={materials["back.011"]}
          />
          <mesh
            name="Bhai_Cardout025"
            geometry={nodes.Bhai_Cardout025.geometry}
            material={materials["Material.013"]}
            scale={[1, 1.329, 1]}
          />
          <group
            name="kitchenBlender003"
            position={[0, 0, -0.043]}
            rotation={[0, 0, Math.PI]}
            scale={[0.478, 0.635, 0.478]}
          >
            <mesh
              name="kitchenBlender2416"
              geometry={nodes.kitchenBlender2416.geometry}
              material={materials.metalMedium}
            />
            <mesh
              name="kitchenBlender2416_1"
              geometry={nodes.kitchenBlender2416_1.geometry}
              material={materials.metal}
            />
            <mesh
              name="kitchenBlender2416_2"
              geometry={nodes.kitchenBlender2416_2.geometry}
              material={materials.glass}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/blender.glb");
