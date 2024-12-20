import { useGSAP } from "@gsap/react";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import gsap from "gsap";
import SvgComponent from "./TestingSvg";
import { useEffect } from "react";
// import CircularText from "./pages/CircularText";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const CircularAnimation = () => {
  const texts = [
    "Is food the same for all",
    "Is food only for the body",
    "Do food have habits",
    "Is food geo-taggeed",
    "Does food influence life",
    "Does food have mood",
    "Whats a meal and a feast",
    "What is good food for you",
    "Where is your food from",
    "Does food have history",
  ];
  useEffect(() => {
    gsap.set(".wheel-word", {
      opacity: 0,
    });
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-control",
        start: "top center",
        end: "bottom top",
        scrub: 0,
        // markers: true, // Debug markers, remove in production
      },
      defaults: {
        ease: "none",
      },
    });

    // Select all `.test` elements
    const divs = document.querySelectorAll(".wheel-word");
    const divsRef = document.querySelectorAll(".wheel-word-ref");
    let pathline = document.querySelector("#path-please");

    divsRef.forEach((div, index) => {
      gsap.set(div, {
        opacity: 0,
      });

      tl.to(
        div,
        {
          motionPath: {
            path: "#path-please",
            align: "#path-please",
            alignOrigin: [0, 1],
            start: 1.1,
            end: 0,
          },
        },
        index * 0.045
      );
    });

    // Apply animations with overlap using stagger-like delays
    divs.forEach((div, index) => {
      gsap.set(div, {
        opacity: 1,
      });
      tl.to(
        div,
        {
          motionPath: {
            path: "#path-please",
            align: "#path-please",
            autoRotate: true, // Ensures rotation aligns with the motion path
            alignOrigin: [0, 0],
            start: 1.1,
            end: 0,
          },

          onStart: () => {
            gsap.set(div, {
              opacity: 0.3,
            });
          },
          onUpdate: () => {
            let delta = MotionPathPlugin.getRelativePosition(
              pathline,
              div,
              [0, 0],
              [0, 0]
            );
            if (
              delta.y < window.innerHeight / 2 + 50 &&
              delta.y > window.innerHeight / 2 - 50
            ) {
              gsap.to(div, {
                opacity: 1,
                duration: 0.5,
              });
            } else {
              gsap.to(div, {
                opacity: 0.3,
                duration: 0.5,
              });
            }
          },
        },
        index * 0.045 // Overlap animations by starting the next one with a small delay
      );
    });
  });

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        {texts.map((text, index) => (
          <>
            <div
              className={`wheel-word-ref wheel-word-ref-${index}`}
              position="absolute"
              style={{
                height: 50,
                width: 50,
                backgroundColor: "red",
                // transform: `translate(0,-100%)`,
              }}
            ></div>
            <div
              key={index}
              className={`wheel-word wheel-word-${index}`}
              style={{
                position: "absolute",
                top: `${index * 100}px`,
                left: `${index * 100}px`,
                // backgroundColor: "red",
                opacity: 0.3,
              }}
            >
              <div
                className={`wheel-word-text-cont-${index}`}
                style={{
                  transform: "rotate(90deg) translate(0,-100%)", // Center the text
                  transformOrigin: "left top",
                  whiteSpace: "nowrap",
                  fontFamily: "TTtravels Next Demibold",
                  // opacity: 0.3,
                  fontSize: (55 * window.innerHeight) / 1080,
                }}
              >
                {text}
              </div>
            </div>
          </>
        ))}

        <SvgComponent
          style={{
            position: "absolute",
            height: "100vh",
            top: 0,
            left: (-336.4 * window.innerWidth) / 1920,
            opacity: 0,
          }}
        />
      </div>
      <div
        className="scroll-control"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      ></div>
    </>
  );
};

export default CircularAnimation;
