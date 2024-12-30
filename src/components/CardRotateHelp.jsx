import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef, useState } from "react";

const CardRotateHelp = ({ children }) => {
  const ref = useRef();
  const objref = useRef();
  const [hovered, setHovered] = useState(false);
  useFrame(() => {
    if (ref.current) {
      if (hovered) {
        objref.current.rotation.y += 0.01;
      } else {
        gsap.to(objref.current.rotation, {
          y: 0,
          duration: 0.5,
        });
      }
    }
  });
  return (
    <>
      <group ref={objref}>{children}</group>
    </>
  );
};

export default CardRotateHelp;
