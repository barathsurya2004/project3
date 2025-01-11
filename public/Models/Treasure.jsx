/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 treasure.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { Context } from "../../src/context";

export function TreasureModel(props) {
  const { nodes, materials } = useGLTF("/Models/treasure.glb");

  const ref = React.useRef();
  const changeRef = React.useRef();
  const { speed } = React.useContext(Context);
  useGSAP(() => {
    gsap.fromTo(
      ref.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 0.6,
        y: 0.6,
        z: 0.6,
        duration: 0.0001,
        scrollTrigger: {
          trigger: ".food-is-adventure",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",

          // ,
        },
      }
    );

    gsap.fromTo(
      ref.current.scale,
      {
        x: 0.6,
        y: 0.6,
        z: 0.6,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.0001,
        scrollTrigger: {
          trigger: ".food-is-beyond-time",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          // ,
        },
        immediateRender: false,
      }
    );
  });
  useFrame(() => {
    ref.current.rotation.y += 0.01 * speed;
  });
  return (
    <group {...props} dispose={null} ref={ref}>
      <group>
        <group position={[0, -5, 0]}>
          <mesh
            geometry={nodes.Mesh_0002.geometry}
            material={nodes.Mesh_0002.material}
            position={[0, 6.294, -0.182]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[195.655, 195.655, 24.367]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Mesh_1002.geometry}
            material={materials["Material_1.002"]}
            position={[0, 6.294, -0.182]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[195.655, 195.655, 24.367]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Mesh_2002.geometry}
            material={materials["Material_2.002"]}
            position={[0, 6.294, -0.182]}
            rotation={[Math.PI, 0, Math.PI]}
            castShadow
            receiveShadow
            scale={[195.655, 195.655, 24.367]}
          />
          <mesh
            geometry={nodes.Mesh_3002.geometry}
            material={materials["Material_3.002"]}
            position={[0, 6.294, -0.182]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[195.655, 195.655, 24.367]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Mesh_4002.geometry}
            material={materials["Material_4.002"]}
            position={[0, 6.294, -0.182]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[195.655, 195.655, 24.367]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Mesh_5002.geometry}
            material={materials["Material_5.002"]}
            position={[0, 6.294, -0.182]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[195.655, 195.655, 24.367]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Mesh_6002.geometry}
            material={materials["Material_6.002"]}
            position={[0, 6.294, -0.182]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[195.655, 195.655, 24.367]}
            castShadow
            receiveShadow
          />
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.VR_Map_Cube029_1.geometry}
              castShadow
              receiveShadow
            >
              <meshStandardMaterial
                color={"#FFCC88"}
                roughness={0.6}
                metalness={0}
              />
            </mesh>
            <mesh
              geometry={nodes.VR_Map_Cube029_2.geometry}
              castShadow
              receiveShadow
            >
              <meshStandardMaterial
                color={"#5A5A5A"}
                roughness={0.6}
                metalness={0}
              />
            </mesh>
            <mesh
              geometry={nodes.VR_Map_Cube029_3.geometry}
              castShadow
              receiveShadow
            >
              <meshStandardMaterial
                color={"#FA8C7F"}
                roughness={0.6}
                metalness={0}
              />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/treasure.glb");
