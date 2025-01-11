/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 color.glb -k -K 
*/

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { Context } from "../../../src/context";

export function ChettiColorCard(props) {
  const { nodes, materials } = useGLTF("/Models/ChettiCards/color.glb");
  const { rot } = props;
  const group = React.useRef();
  const { speed } = React.useContext(Context);
  useFrame(() => {
    if (rot) {
      group.current.rotation.y += 0.01;
    }
  });
  useEffect(() => {
    gsap.to(group.current.rotation, {
      y: 0,
    });
  }, [rot]);
  return (
    <group {...props} ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Bhai_Cardtex019"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[10, 7.526, 10]}
        >
          <mesh
            name="Bhai_Card058"
            geometry={nodes.Bhai_Card058.geometry}
            material={materials["front.007"]}
          />
          <mesh
            name="Bhai_Card058_1"
            geometry={nodes.Bhai_Card058_1.geometry}
            material={materials["back.006"]}
          />
          <mesh
            name="Bhai_Cardout019"
            geometry={nodes.Bhai_Cardout019.geometry}
            material={materials["Material.006"]}
            scale={[1, 1.329, 1]}
          />
          <mesh
            name="Coin001"
            geometry={nodes.Coin001.geometry}
            position={[0, 0, -0.037]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.136, 0.136, 0.183]}
          >
            <meshStandardMaterial
              attach="material"
              color="#8b4027"
              roughness={0.1}
              metalness={0}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/color.glb");
