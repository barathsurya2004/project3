import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import "./Cuisines.css";
const Cuisines = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".cuisines-of-the-world",
      {
        top: "100vh",
        zIndex: 10,
      },
      {
        top: "0vh",
        zIndex: 1100,
        scrollTrigger: {
          trigger: ".cuisines-of-the-world-trigger",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".cuisines-of-the-world",
      {
        opacity: 1,
        y: 0,
        zIndex: 1100,
      },
      {
        opacity: 0,
        y: -50,
        zIndex: 10,
        scrollTrigger: {
          trigger: ".cuisines-of-India-trigger",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".cuisines-of-India",
      {
        opacity: 0,
        x: -50,
        zIndex: 10,
      },
      {
        opacity: 1,
        x: 0,
        zIndex: 1100,
        scrollTrigger: {
          trigger: ".cuisines-of-India-trigger",
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".cuisines-of-India",
      {
        opacity: 1,
        x: 0,
        zIndex: 1100,
      },
      {
        opacity: 0,
        y: -50,
        zIndex: 10,
        scrollTrigger: {
          trigger: ".cuisines-of-TN-trigger",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".cuisines-of-TN",
      {
        opacity: 0,
        x: -50,
        zIndex: 10,
      },
      {
        opacity: 1,
        zIndex: 1100,
        x: 0,
        scrollTrigger: {
          trigger: ".cuisines-of-TN-trigger",
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".cuisines-of-TN",
      {
        top: "0vh",
      },
      {
        top: "-100vh",
        scrollTrigger: {
          trigger: ".cuisines-of-TN-trigger",
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
  });
  return (
    <>
      <div
        className="cuisines-of-the-world-trigger"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="reading-space"
        style={{
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div
        className="cuisines-of-India-trigger"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="reading-space"
        style={{
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div
        className="cuisines-of-TN-trigger"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="cuisines-of-the-world"
        style={{
          position: "fixed",
          top: "100vh",
          left: "0",
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          className="cuisines-of-the-world-title globe-overlay"
          style={{
            position: "absolute",
            right: 177 * (window.innerWidth / 1920),
            bottom: 118 * (window.innerHeight / 1080),
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <h1
            style={{
              fontSize: (144 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Bold",
              margin: 0,
              transform: `translate(${(13 * window.innerWidth) / 1280}px,${
                (20 * window.innerWidth) / 1280
              }px)`,
              color: "#D3AD62",
            }}
          >
            Cuisines
          </h1>
          <h3
            style={{
              fontSize: (89 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Demibold Italic",
              margin: 0,
              transform: `translate(${(15 * window.innerWidth) / 1280}px,0)`,
              color: "#D3AD62",
            }}
          >
            of the{" "}
            <span
              style={{
                fontSize: (144 * window.innerHeight) / 1080,
                fontFamily: "TTtravels Next Demibold Italic",
                color: "#D3AD62",
              }}
            >
              World
            </span>
          </h3>
        </div>
      </div>
      <div
        className="cuisines-of-India globe-overlay"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          opacity: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 122 * (window.innerHeight / 1080),
            left: 167 * (window.innerWidth / 1920),
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: (144 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Bold",
              margin: 0,
              color: "#D3AD62",
            }}
          >
            Cuisines
          </h2>
          <h3
            style={{
              fontSize: (89 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Demibold Italic",
              margin: 0,
              transform: `translate(0,${-(35 * window.innerHeight) / 1280}px`,
              color: "#D3AD62",
            }}
          >
            of
            <span
              style={{
                fontSize: (144 * window.innerHeight) / 1080,
                fontFamily: "TTtravels Next Demibold Italic",
                color: "#D3AD62",
              }}
            >
              India
            </span>
          </h3>
        </div>
      </div>
      <div
        className="cuisines-of-TN globe-overlay"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          opacity: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 70 * (window.innerHeight / 1080),
            left: 175 * (window.innerWidth / 1920),
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.2,
          }}
        >
          <h2
            style={{
              fontSize: (144 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Demibold Italic",
              margin: 0,
              color: "#D3AD62",
            }}
          >
            Tamil
          </h2>
          <h2
            style={{
              fontSize: (144 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Demibold Italic",
              margin: 0,
              color: "#D3AD62",
            }}
          >
            Nadu's
          </h2>
          <h2
            style={{
              fontSize: (144 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Bold",
              margin: 0,
              color: "#D3AD62",
            }}
          >
            Cuisines
          </h2>
        </div>
      </div>
    </>
  );
};

export default Cuisines;
