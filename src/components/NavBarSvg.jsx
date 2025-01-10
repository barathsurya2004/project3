import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import arrow from "../assets/icons/navArrow.svg";
import invert1 from "../assets/icons/navbar/invert1.svg";
import invert2 from "../assets/icons/navbar/invert2.svg";
import play1 from "../assets/icons/navbar/play1.svg";
import play2 from "../assets/icons/navbar/play2.svg";
import play3 from "../assets/icons/navbar/play3.svg";
import lightOn from "../assets/icons/navbar/lightOn.svg";
import lightOff from "../assets/icons/navbar/lightOff.svg";
import showInt from "../assets/icons/navbar/showInt.svg";
import noInt from "../assets/icons/navbar/noInt.svg";
import navOn from "../assets/icons/navbar/navOn.svg";
import navOff from "../assets/icons/navbar/navOff.svg";
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
      const tl = gsap.timeline();
      gsap.to(".hide-on-click", {
        duration: 0.5,
        y: "100%",
        ease: "power1.inOut",
      });
      gsap.to(".on-click", {
        duration: 0.5,
        y: (270 * innerHeight) / 1080,
        ease: "power1.inOut",
      });

      tl.to(".nav-bar-cont-2", {
        duration: 0.5,
        y: 0,
        ease: "power1.inOut",
      }).to(".nav-bar-cont-2", {
        opacity: 0.2,
      });
    } else {
      gsap.fromTo(
        ".hide-on-click",
        {
          y: "100%",
        },
        {
          duration: 0.5,
          y: "0%",
          ease: "power1.inOut",
        }
      );
      gsap.fromTo(
        ".on-click",
        {
          y: (270 * innerHeight) / 1080,
        },
        {
          duration: 0.5,
          y: 0,
          ease: "power1.inOut",
        }
      );
      const tl = gsap.timeline();
      tl.to(".nav-bar-cont-2", {
        duration: 0.5,
        y: "40%",
        ease: "power1.inOut",
      }).to(
        ".nav-bar-cont-2",
        {
          opacity: 1,
        },
        "<"
      );
    }
  }, [show]);
  const containerStyle = {
    position: "relative",
    width: 50 * (innerWidth / 1920),
    height: (270 * innerHeight) / 1080,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // overflow: "hidden",
  };

  const pillarStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "3px solid #facd74",
    borderRadius: 50,
    transform: "translate(0%, 0%)",
  };

  const ringStyle = {
    // padding: "15%",
    // overflow: "hidden",
    width: "100%",
    aspectRatio: "1.15/1",
    // border: "3px solid #facd74",
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
              src={invert1}
              alt="invert1"
              //   style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <img
              src={invert2}
              alt="invert2"
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
            <img src={play1} alt="play1" />
          ) : speed === 2 ? (
            <img src={play2} alt="play2" />
          ) : (
            <img src={play3} alt="play3" />
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
            <img src={lightOn} alt="lightOn" />
          ) : (
            <img src={lightOff} alt="lightOff" />
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
              src={showInt}
              alt="showInt"
              onClick={() => {
                setInteraction(2);
              }}
            />
          ) : (
            <img
              src={noInt}
              alt="noInt"
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
        // onPointerEnter={() => {
        //   gsap.to(".nav-bar-cont-2", {
        //     duration: 0.5,
        //     opacity: 1,
        //     ease: "power1.inOut",
        //   });
        // }}
        // onPointerLeave={() => {
        //   if (!show) {
        //     gsap.to(".nav-bar-cont-2", {
        //       duration: 0.5,
        //       opacity: 0.2,
        //       ease: "power1.inOut",
        //     });
        //   }
        // }}
      >
        {invert || speed !== 1 || light || interaction !== 1 ? (
          <img
            src={navOn}
            alt="arrow"
            style={{
              width: "100%",
              // height: "100%",

              objectFit: "contain",
            }}
          />
        ) : (
          <img
            src={navOff}
            alt="arrow"
            style={{
              width: "100%",
              // height: "100%",

              objectFit: "contain",
            }}
          />
        )}
      </div>
    </div>
  );
};
export default NavBarSvg;
