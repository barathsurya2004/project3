import Lottie from "lottie-react";
import animdata from "../assets/lotties/new_reverse_navbar_5.json";
import nav from "../assets/icons/nav_bar.svg";
import testimg from "../assets/icons/goto.svg";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./NavBar.css";
import NavBarSvg from "./NavBarSvg";
const NavBar = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: 1900,
          top: "50%",
          right: "5%",
          transform: "translate(0%, -50%)",
          height: 500,
        }}
      >
        <NavBarSvg
          style={{
            height: "100%",
          }}
        />
      </div>
    </>
  );
};

export default NavBar;
