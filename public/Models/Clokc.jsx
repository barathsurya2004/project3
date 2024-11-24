/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 clokc.glb 
*/
import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
export function NewClockModel(props) {
  const { nodes, materials } = useGLTF("/Models/clokc.glb");
  const ref = React.useRef();
  const changeRef = React.useRef();
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const minuteHand = React.useRef();
  const hourHand = React.useRef();
  const [active, setActive] = React.useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ref.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 12,
        y: 12,
        z: 12,
        duration: 0.0001,
        scrollTrigger: {
          trigger: ".food-is-beyond-time",
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
        x: 12,
        y: 12,
        z: 12,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.0001,
        scrollTrigger: {
          trigger: ".food-is-cutlure",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
        immediateRender: false,
      }
    );
  });
  useFrame(() => {
    var d = new Date();
    setHour(d.getHours());
    setMinute(d.getMinutes());
    hourHand.current.rotation.y = ((hour % 12) + minute / 60) * (Math.PI / 6);
    minuteHand.current.rotation.y =
      (-Math.PI * 18) / 180 + minute * (Math.PI / 30);
    if (active) {
      ref.current.rotation.y += 0.01;
    } else {
      return;
    }
  });
  return (
    <group {...props} ref={ref} dispose={null}>
      <group ref={changeRef}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Obj_Clock_0.geometry}
            material={materials.WhiteAndBlack}
          />
          <mesh
            geometry={nodes.Obj_Hand_0.geometry}
            material={materials.WhiteAndBlack}
            position={[0, -0.022, 0.029]}
            rotation={[0, 0.314, 0]}
            ref={minuteHand}
          />
          <mesh
            geometry={nodes.Obj_Hand001_0.geometry}
            material={materials.WhiteAndBlack}
            position={[0, -0.022, 0.029]}
            rotation={[0, 0.026, 0]}
            ref={hourHand}
          />
        </group>
        <mesh
          geometry={nodes.Mesh_0.geometry}
          material={materials["Material.002"]}
          position={[0, -0.027, -0.019]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[5.714, 5.714, 3.214]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/clokc.glb");