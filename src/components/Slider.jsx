import { useState } from "react";
import PandiFlag from "./PandiFlag";
import ChettiFlag from "./ChettiFlag";
import left from "../assets/icons/left-station.svg";
import right from "../assets/icons/right-station.svg";
import center from "../assets/icons/center.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import button from "../assets/icons/slider-button.svg";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Slider = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".slider-component-input",
      {
        top: "150%",
      },
      {
        top: "50%",
        scrollTrigger: {
          trigger: ".slider-compare",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: 0.01,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".slider-component-input ",
      {
        top: "50%",
      },
      {
        top: "-50%",
        scrollTrigger: {
          trigger: ".slider-compare",
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: 0.01,
        },
        immediateRender: false,
        ease: "none",
      }
    );
  });
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <>
      <div
        className="slider-compare"
        style={{
          width: "100%",
          height: "250vh",
          position: "relative",
        }}
      >
        <div
          className="slider-component-input"
          style={{
            position: "fixed",
            top: "150%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={button}
            alt=""
            style={{
              width: (100 * window.innerWidth) / 1920,
              padding: "auto 0",
              position: "absolute",
              left: `${sliderValue}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              cursor: "pointer",
              opacity: 0.5,
            }}
          />
          <img
            style={{
              position: "absolute",
              // top: "-100%",
              // top: "-100%"
              height: "100vh",
              width: "50%",
              left: ` ${sliderValue - 25}%`,
              pointerEvents: "none",
            }}
            src={center}
            alt=""
          />
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            step={0.5}
            onScroll={(e) => {
              e.preventDefault();
            }}
            style={{
              width: "100%",
              cursor: "pointer",
              opacity: 0,
            }}
            onChange={(e) => {
              setSliderValue(e.target.value);
            }}
          />
        </div>
        <div
          className="slider-compare__container"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="slider-compare__container__left"
            style={{
              width: `${sliderValue}%`,
              height: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              className="slider-compare-content_left"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100%",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  // top: "-100%",
                  height: "300%",
                  width: "50%",
                  left: "-24.8%",
                }}
                src={left}
                alt=""
              />
              <PandiFlag />
            </div>
          </div>
          <div
            className="slider-compare__container__right"
            style={{
              width: `${100 - sliderValue}%`,
              height: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              className="slider-compare-content_right"
              style={{
                width: "100vw",
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  // top: "-100%",
                  height: "300%",
                  width: "50%",
                  stroke: "#bb8be8",
                  left: "74.8%",
                }}
                src={right}
                alt=""
              />
              <ChettiFlag />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
