/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 color.glb -k -K 
*/

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function ChettiColorCard(props) {
  const { nodes, materials } = useGLTF("/Models/ChettiCards/color.glb");
  const { rot } = props;
  const group = React.useRef();
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
            material={materials["Game Gold Coin.001"]}
            position={[0, 0, -0.037]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.136, 0.136, 0.183]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/color.glb");
