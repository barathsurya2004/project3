/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 intricate.glb -k -K 
*/

import React, { useEffect } from "react";
import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import gsap from "gsap";

import { Context } from "../../../src/context";
export function IntricateCard(props) {
  const { nodes, materials } = useGLTF("/Models/ChettiCards/intricate.glb");
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
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
          name="Bhai_Cardtex020"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[10, 7.526, 10]}
        >
          <mesh
            name="Bhai_Card061"
            geometry={nodes.Bhai_Card061.geometry}
            material={materials["front.008"]}
          />
          <mesh
            name="Bhai_Card061_1"
            geometry={nodes.Bhai_Card061_1.geometry}
            material={materials["back.007"]}
          />
          <mesh
            name="Bhai_Cardout020"
            geometry={nodes.Bhai_Cardout020.geometry}
            material={materials["Material.007"]}
            scale={[1, 1.329, 1]}
          />
          <mesh
            name="Jewel_02_Circle001"
            geometry={nodes.Jewel_02_Circle001.geometry}
            // material={materials["RAL Classic Red hues"]}
            position={[0, 0, -0.042]}
            scale={[0.018, 0.039, 0.018]}
          >
            <MeshRefractionMaterial
              envMap={texture}
              toneMapped={false}
              refractionRatio={0.98}
              roughness={0}
              color={"red"}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/intricate.glb");
