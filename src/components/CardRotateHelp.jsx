import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const CardRotateHelp = ({ children, changed }) => {
  const ref = useRef();
  const objref = useRef();

  return (
    <>
      <group ref={objref}>{children}</group>
    </>
  );
};

export default CardRotateHelp;
