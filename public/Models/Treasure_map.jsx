/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 treasure_map.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function MapModel(props) {
  const { nodes, materials } = useGLTF("/Models/treasure_map.glb");
  const [active, setActive] = React.useState(false);

  const ref = React.useRef();
  const changeRef = React.useRef();
  useGSAP(() => {
    gsap.fromTo(
      ref.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 0.4,
        y: 0.4,
        z: 0.4,
        duration: 0.0001,
        scrollTrigger: {
          trigger: ".food-is-adventure",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          onToggle: (self) => {
            setActive(self.isActive);
          },
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ref.current.scale,
      {
        x: 0.4,
        y: 0.4,
        z: 0.4,
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
          // markers: true,
        },
        immediateRender: false,
      }
    );

    // gsap.fromTo(
    //   ref.current.scale,
    //   {
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //   },
    //   {
    //     x: 0.4,
    //     y: 0.4,
    //     z: 0.4,
    //     duration: 0.0001,
    //     scrollTrigger: {
    //       trigger: ".food-is-adventure",
    //       start: "top bottom",
    //       end: "top top",
    //       toggleActions: "play none none reverse",
    //       onToggle: (self) => {
    //         setActive(self.isActive);
    //       },
    //       // markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   ref.current.scale,
    //   {
    //     x: 0.4,
    //     y: 0.4,
    //     z: 0.4,
    //   },
    //   {
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //     duration: 0.0001,
    //     scrollTrigger: {
    //       trigger: ".food-is-adventure",
    //       start: "top top",
    //       end: "top -100%",
    //       toggleActions: "play none none reverse",
    //       // markers: true,
    //     },
    //     immediateRender: false,
    //   }
    // );
  });
  useFrame(() => {
    if (active) {
      ref.current.rotation.z -= 0.01;
    } else {
      return;
    }
  });
  return (
    <group rotation={[Math.PI / 2, 0, 0]} scale={0} {...props} ref={ref}>
      <group ref={changeRef}>
        <mesh geometry={nodes.VR_Map_Cube029_1.geometry} scale={1.2}>
          <meshStandardMaterial transparent opacity={0.0} />
        </mesh>
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
  );
}

useGLTF.preload("/treasure_map.glb");
