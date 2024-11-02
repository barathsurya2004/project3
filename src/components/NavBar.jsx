import Lottie from "lottie-react";
import animdata from "../assets/lotties/nav_final.json";
import nav from "../assets/icons/nav_bar.svg";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) ref.current.stop();
  }, []);
  return (
    <div>
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
          left: "50%",
          transform: "translate(-50%,-50%)",
          height: 40,
          width: 45,
          borderRadius: "50%",
          backgroundColor: "red",
          cursor: "pointer",
          zIndex: 100,
        }}
      ></div>
      <Lottie
        loop={false}
        autoplay={false}
        animationData={animdata}
        lottieRef={ref}
        style={{
          position: "absolute",
          top: "50%",
          right: "-5%",
          width: 160,
          cursor: "pointer",
          transform: "translate(-50%,-50%)",
          backgroundColor: "white",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 200,
          top: "50%",
          right: "-5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "translate(-50%,-50%)",
          backgroundColor: "grey",
        }}
      >
        <img
          src={nav}
          alt="nav"
          style={{
            width: 200,
            height: 200,
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
