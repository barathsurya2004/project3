import { useState } from "react";
import arrow from "../assets/icons/navArrow.svg";
import toggleArrow from "../assets/icons/navToggleArrow.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useGSAP(() => {
    // gsap.to(".navBar", {
    //   x: isNavOpen ? 0 : 45 * (window.innerWidth / 1920),
    // });
  });
  const style = {
    navItem: {
      width: 45 * (window.innerWidth / 1920),
      height: 40 * (window.innerWidth / 1920),
      borderRadius: "50%",
      margin: 0,
      padding: 0,
      border: "solid 3px #D3AD62",
    },
  };
  return (
    <>
      <div
        className="navBar-toggle"
        style={{
          position: "absolute",
          top: "50%",
          right: 30 * (window.innerWidth / 1920),
          width: 45 * (window.innerWidth / 1920),
          height: 45 * (window.innerWidth / 1920),
          zIndex: 101,
          cursor: "pointer",
          opacity: 0.3,
        }}
        onPointerEnter={() => {
          if (!isNavOpen)
            gsap.fromTo(".navBar-toggle", { opacity: 0.3 }, { opacity: 1 });
        }}
        onPointerLeave={() => {
          if (!isNavOpen) {
            gsap.fromTo(".navBar-toggle", { opacity: 1 }, { opacity: 0.3 });
          }
        }}
        onClick={() => {
          if (!isNavOpen) {
            gsap.fromTo(
              ".navBar",
              { right: (-100 * window.innerWidth) / 1920 },
              { right: (30 * window.innerWidth) / 1920 }
            );
            gsap.fromTo(
              ".navBar-toggle",
              { y: 0, rotate: 0 },
              {
                y: 85 * (window.innerWidth / 1920),
                rotate: 180,
              }
            );
          } else {
            gsap.fromTo(
              ".navBar",
              { right: (30 * window.innerWidth) / 1920 },
              { right: (-100 * window.innerWidth) / 1920 }
            );
            gsap.fromTo(
              ".navBar-toggle",
              { y: 85 * (window.innerWidth / 1920), rotate: 180 },
              {
                y: 0,
                rotate: 0,
              }
            );
          }
          setIsNavOpen(!isNavOpen);
          // gsap.fromTo(".navBar-toggle", { zIndex: 101 }, { zIndex: 0 });
        }}
      >
        <img src={toggleArrow} alt="" />
      </div>
      <div
        className="navBar"
        style={{
          position: "absolute",
          zIndex: 100,
          top: "50%",
          right: -100 * (window.innerWidth / 1920),
          width: 45 * (window.innerWidth / 1920),
          height: 215 * (window.innerWidth / 1920),
          transform: "translateY(-40%)",
          border: "solid 3px #D3AD62",
          borderRadius: 45 * (window.innerWidth / 1920),
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="navBar-item"
          style={{
            ...style.navItem,
            marginTop: -2.5 * (window.innerWidth / 1920),
          }}
        ></div>
        <div className="navBar-item" style={style.navItem}></div>
        <div className="navBar-item" style={style.navItem}></div>
        <div className="navBar-item" style={style.navItem}></div>
        <div
          className="navBar-item"
          style={{
            width: 45 * (window.innerWidth / 1920),
            height: 40 * (window.innerWidth / 1920),
            borderRadius: "50%",
            margin: 0,
            padding: 0,
            marginBottom: -2.5 * (window.innerWidth / 1920),
            // position: "relative",
            // cursor: "pointer",
          }}
        ></div>
      </div>
    </>
  );
};

export default NavBar;
