import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import arrow from "../assets/icons/navArrow.svg";
import color1 from "../assets/icons/navbar/color1.svg";
import color2 from "../assets/icons/navbar/color2.svg";
import speed1 from "../assets/icons/navbar/speed1.svg";
import speed2 from "../assets/icons/navbar/speed2.svg";
import speed3 from "../assets/icons/navbar/speed3.svg";
import zoom1 from "../assets/icons/navbar/zoom1.svg";
import zoom2 from "../assets/icons/navbar/zoom2.svg";
import int1 from "../assets/icons/navbar/int1.svg";
import int2 from "../assets/icons/navbar/int2.svg";
import { Context } from "../context";
const NavBarSvg = (props) => {
  const [show, setShow] = React.useState(false);

  const {
    invert,
    setInvert,
    speed,
    setSpeed,
    light,
    setLight,
    interaction,
    setInteraction,
  } = React.useContext(Context);

  useGSAP(() => {
    if (!show) {
      gsap.to(".hide-on-click", {
        duration: 0.5,
        y: "100%",
        ease: "power1.inOut",
      });
      gsap.to(".on-click", {
        duration: 0.5,
        y: 270,
        ease: "power1.inOut",
      });
      gsap.to("#arrow-nav-bar", {
        duration: 0.5,
        rotate: 180,
        ease: "power1.inOut",
      });
      gsap.to(".nav-bar-cont-2", {
        duration: 0.5,
        y: 0,
        opacity: 0.3,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(".hide-on-click", {
        duration: 0.5,
        y: "0%",
        ease: "power1.inOut",
      });
      gsap.to(".on-click", {
        duration: 0.5,
        y: 0,
        ease: "power1.inOut",
      });
      gsap.to("#arrow-nav-bar", {
        duration: 0.5,
        rotate: 0,
        ease: "power1.inOut",
      });
      gsap.to(".nav-bar-cont-2", {
        duration: 0.5,
        y: "40%",
        opacity: 1,
        ease: "power1.inOut",
      });
    }
  }, [show]);
  const containerStyle = {
    position: "relative",
    width: 50,
    height: 270,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // overflow: "hidden",
  };

  const pillarStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "3px solid #d3ad62",
    borderRadius: 50,
    transform: "translate(0%, 0%)",
  };

  const ringStyle = {
    // padding: "15%",
    // overflow: "hidden",
    width: "100%",
    aspectRatio: "1.15/1",
    // border: "3px solid #d3ad62",
    borderRadius: "50%",
    position: "relative",
    cursor: "pointer",
    // zIndex: topPercentage === 90 ? 1 : 0,
    // transform: "translate(0%, " + topPercentage + "%)",
  };

  return (
    <div style={{ ...containerStyle }} className="nav-bar-cont-2">
      <div
        style={{
          clipPath: "polygon(0 0%, 100% 0, 100% 92%, 70% 80%, 30% 80%, 0 92%)",
          height: "100%",
          width: "100%",
          position: "absolute",
          //   backgroundColor: "rgba(255, 255, 255, 1)",
          zIndex: -0,
        }}
      >
        <div className="hide-on-click" style={pillarStyle}></div>
      </div>
      <div
        className="ring-hide"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",

          clipPath:
            "polygon(0 0%, 100% 0, 100% 90%, 70% 82.5%, 30% 82.5%, 0 90%)",

          //   backgroundColor: "rgba(255,255,255, 0.5)",
        }}
      >
        <div
          className="on-click"
          style={ringStyle}
          onClick={() => {
            setInvert(!invert);
          }}
        >
          {invert ? (
            <img
              src={color1}
              alt="color1"
              //   style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <img
              src={color2}
              alt="color2"
              //   style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          )}
        </div>
        <div
          className="on-click"
          style={ringStyle}
          onClick={() => {
            setSpeed(speed === 3 ? 1 : speed + 1);
          }}
        >
          {speed === 1 ? (
            <img src={speed1} alt="speed1" />
          ) : speed === 2 ? (
            <img src={speed2} alt="speed2" />
          ) : (
            <img src={speed3} alt="speed3" />
          )}
        </div>
        <div
          className="on-click"
          style={ringStyle}
          onClick={() => {
            setLight(!light);
          }}
        >
          {light ? (
            <img src={zoom1} alt="zoom1" />
          ) : (
            <img src={zoom2} alt="zoom2" />
          )}
        </div>
        <div
          className="on-click"
          style={ringStyle}
          onClick={() => {
            setInteraction(interaction === 1 ? 2 : 1);
          }}
        >
          {interaction === 1 ? (
            <img
              src={int1}
              alt="int1"
              onClick={() => {
                setInteraction(2);
              }}
            />
          ) : (
            <img
              src={int2}
              alt="int2"
              onClick={() => {
                setInteraction(1);
              }}
            />
          )}
        </div>
        <div className="on-click" style={{ ...ringStyle, opacity: 0 }}></div>
      </div>
      <div
        style={{
          width: "100%",
          aspectRatio: "1.15/1",
          borderRadius: "50%",
          border: "3px solid #d3ad62",
          padding: "15%",
          cursor: "pointer",
          position: "absolute",
          zIndex: 2,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   background: "red",
        }}
        onClick={() => {
          setShow(!show);
        }}
        onPointerEnter={() => {
          gsap.to(".nav-bar-cont-2", {
            duration: 0.5,
            opacity: 1,
            ease: "power1.inOut",
          });
        }}
        onPointerLeave={() => {
          if (!show) {
            gsap.to(".nav-bar-cont-2", {
              duration: 0.5,
              opacity: 0.3,
              ease: "power1.inOut",
            });
          }
        }}
      >
        <img
          id="arrow-nav-bar"
          src={arrow}
          alt="arrow"
          style={{
            width: "100%",
            // height: "100%",

            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};
export default NavBarSvg;
