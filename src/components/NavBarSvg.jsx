import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";
import arrow from "../assets/icons/navArrow.svg";
const NavBarSvg = (props) => {
  const [show, setShow] = React.useState(false);

  useGSAP(() => {
    if (show) {
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
    }
  }, [show]);
  const containerStyle = {
    position: "relative",
    width: 50,
    height: 270,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const pillarStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "3px solid #d3ad62",
    borderRadius: 50,
    transform: "translate(0%, 0%)",
  };

  const ringStyle = (topPercentage) => ({
    padding: "15%",
    width: "100%",
    aspectRatio: "1.01/1",
    border: "3px solid #d3ad62",
    borderRadius: "50%",
    position: "relative",
    zIndex: topPercentage === 90 ? 1 : 0,
    // transform: "translate(0%, " + topPercentage + "%)",
  });

  return (
    <div style={{ ...containerStyle }}>
      <div
        style={{
          clipPath: "polygon(0 1%, 100% 0, 100% 90%, 70% 60%, 30% 60%, 0 90%)",
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 1)",
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
          paddingBottom: "10%",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

          //   backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="on-click" style={ringStyle(0)}></div>
        <div className="on-click" style={ringStyle(30)}></div>
        <div className="on-click" style={ringStyle(50)}></div>
        <div className="on-click" style={ringStyle(70)}></div>
      </div>
      <div
        style={{
          ...ringStyle(90),
          cursor: "pointer",
          //   background: "red",
        }}
        onClick={() => {
          setShow(!show);
          show ? onHide() : onShow();
        }}
      >
        <img
          src={arrow}
          alt="arrow"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};
export default NavBarSvg;
