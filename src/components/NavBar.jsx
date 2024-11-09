import Lottie from "lottie-react";
import animdata from "../assets/lotties/new_reverse_navbar_5.json";
import nav from "../assets/icons/nav_bar.svg";
import testimg from "../assets/icons/goto.svg";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./NavBar.css";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();
  const image = <img src={testimg} alt="nav" />;
  useEffect(() => {
    if (ref.current) ref.current.stop();
  }, []);
  useEffect(() => {
    if (loaded) {
      const c1 = document.querySelector("#i1");

      c1.style.position = "relative";
      var z = document.createElement("path");
      z.setAttribute("d", "M 0 0 L 0 100 L 100 50 Z");
      z.setAttribute("fill", "white");
      z.setAttribute("stroke", "blue");

      c1.appendChild(z);
    }
  }, [isOpen, loaded]);
  return (
    <div
      className="nav-bar-cont"
      style={{
        mixBlendMode: "add",
        position: "absolute",
        height: "100vh",
        width: (45 * window.innerWidth) / 1920,
        top: 0,
        right: (35 * window.innerWidth) / 1920,

        // backgroundColor: "white",
      }}
    >
      <div
        className="actual-button"
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("clicked", isOpen);
          ref.current.play();
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          aspectRatio: "1.2/1",
          width: "100%",
          transform: "translate(0%,-50%)",
          borderRadius: "50%",
          // backgroundColor: "red",
          cursor: "pointer",
          zIndex: 101,
        }}
      ></div>
      <Lottie
        loop={false}
        autoplay={false}
        animationData={animdata}
        lottieRef={ref}
        onDOMLoaded={() => {
          setLoaded(true);
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          cursor: "pointer",
          transform: "translate(0%,-50%)",
          // backgroundColor: "white",
          mixBlendMode: "screen",
          zIndex: 100,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transform: "translate(0%,-50%)",
          // backgroundColor: "grey",
        }}
      >
        <img
          src={nav}
          alt="nav"
          style={{
            width: "94%",
            // height: 200,
            zIndex: 50,
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
