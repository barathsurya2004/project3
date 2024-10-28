/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 pepper.gltf 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function PepperModel(props) {
  const { nodes, materials } = useGLTF("/Models/Cards/new/Pandi/pepper.gltf");
  return (
    <group {...props} dispose={null} scale={20}>
      <group rotation={[0, 0, -Math.PI]} scale={[-2, -2, -0.6]}>
        <mesh
          geometry={nodes.Mesh_2708001_1.geometry}
          material={materials["Material_2708.001"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_2.geometry}
          material={materials["Material_52.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_3.geometry}
          material={materials["Material_55.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_4.geometry}
          material={materials["Material_61.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_5.geometry}
          material={materials["Material_63.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_6.geometry}
          material={materials["Material_73.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_7.geometry}
          material={materials["Material_111.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_8.geometry}
          material={materials["Material_112.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_9.geometry}
          material={materials["Material_160.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_10.geometry}
          material={materials["Material_168.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_11.geometry}
          material={materials["Material_336.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_12.geometry}
          material={materials["Material_457.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_13.geometry}
          material={materials["Material_461.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_14.geometry}
          material={materials["Material_532.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_15.geometry}
          material={materials["Material_536.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_16.geometry}
          material={materials["Material_550.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_17.geometry}
          material={materials["Material_551.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_18.geometry}
          material={materials["Material_558.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_19.geometry}
          material={materials["Material_563.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_20.geometry}
          material={materials["Material_570.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_21.geometry}
          material={materials["Material_617.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_22.geometry}
          material={materials["Material_620.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_23.geometry}
          material={materials["Material_625.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_24.geometry}
          material={materials["Material_635.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_25.geometry}
          material={materials["Material_638.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_26.geometry}
          material={materials["Material_953.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_27.geometry}
          material={materials["Material_954.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_28.geometry}
          material={materials["Material_994.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_29.geometry}
          material={materials["Material_1021.002"]}
        />
        <mesh
          geometry={nodes.Mesh_2708001_30.geometry}
          material={materials["Material_2784.001"]}
        />
        <mesh
          geometry={nodes.Mesh_2303002.geometry}
          material={materials["Material.007"]}
          position={[-0.002, -0.041, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
        <mesh
          geometry={nodes.Mesh_2375002.geometry}
          material={materials["Material.006"]}
          position={[0, -0.001, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
        <mesh
          geometry={nodes.Mesh_2506002.geometry}
          material={materials["Material.007"]}
          position={[0, -0.063, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
        <mesh
          geometry={nodes.Mesh_2651001.geometry}
          material={materials["Material.007"]}
          position={[-0.006, -0.098, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, -1, -1.501]}
        />
        <group
          position={[0, 0.026, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-0.326, -1.088, -0.326]}
        >
          <mesh
            geometry={nodes.model001_1.geometry}
            material={materials.mat21}
          />
          <mesh
            geometry={nodes.model001_2.geometry}
            material={materials.mat15}
          />
          <mesh
            geometry={nodes.model001_3.geometry}
            material={materials.mat24}
          />
          <mesh
            geometry={nodes.model001_4.geometry}
            material={materials.mat25}
          />
          <mesh
            geometry={nodes.model001_5.geometry}
            material={materials.mat23}
          />
          <mesh
            geometry={nodes.model001_6.geometry}
            material={materials.mat22}
          />
          <mesh
            geometry={nodes.model001_7.geometry}
            material={materials.mat17}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pepper.gltf");