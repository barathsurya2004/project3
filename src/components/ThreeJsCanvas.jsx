import { Canvas } from "@react-three/fiber";
import { HeartModel } from "../../public/Models/Heart";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ArtModel } from "../../public/Models/Art";
import { MapModel } from "../../public/Models/Treasure_map";
import { ClockModel } from "../../public/Models/Clock";
import { FaceModel } from "../../public/Models/Face1";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";
import { QuestionModel } from "../../public/Models/Q_mark";
import { NewClockModel } from "../../public/Models/Clokc";
import { TreasureModel } from "../../public/Models/Treasure";
import { CountriesModel } from "../../public/Models/Countries";
import { FGlobeModel } from "../../public/Models/FINAL_globe";
import { EffectComposer, Outline } from "@react-three/postprocessing";
const ThreeJsCanvas = () => {
  const [prog, setProg] = useState(0);
  const [change, setChange] = useState(0);
  useGSAP(() => {
    gsap.to(".globe-canvas", {
      scrollTrigger: {
        trigger: ".cuisines-of-India-trigger",
        start: "top bottom",
        end: "top top",
        onUpdate: (e) => {
          setChange(e.progress);
        },
        scrub: true,
      },
    });
    gsap.fromTo(
      ".face-model",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".face-reacting-page-helper",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ending-page-helper",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
    tl.fromTo(
      ".face-model",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.1,
        immediateRender: false,
      }
    )
      .to(".face-model", {
        x: "-19vw",
        duration: 0.01,
      })
      .to(".face-model", {
        opacity: 1,
        duration: 0.1,
      });
    gsap.to(".question-mark-canvas", {
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top 90%",
        end: "top 10%",
        scrub: 0.1,
        onUpdate: (e) => {
          setProg(e.progress);
        },
      },
    });
    gsap.fromTo(
      ".heart-canvas",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".food-is-love",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".art-canvas",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".food-is-art",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".clock-canvas",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".food-is-time",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".map-canvas",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".food-is-treasure",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".all-canvas",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.001,
        scrollTrigger: {
          trigger: ".food-is-culture",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".globe-canvas",
      {
        top: 0,
      },
      {
        top: "-100vh",
        scrollTrigger: {
          trigger: ".cuisines-of-TN-trigger",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
  });

  const [num, setNum] = useState(0);
  const { mode } = useContext(Context);
  useEffect(() => {
    if (mode == "Map" || mode == "Gallery" || mode == "Disclaimer") {
      gsap.to(".face-model", {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${100}%, rgba(0,0,0,1) ${100}%, rgba(0,0,0,1) 100%)`,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(".face-model", {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${-20}%, rgba(0,0,0,1) ${-20}%, rgba(0,0,0,1) 100%)`,
        ease: "power4.inOut",
      });
    }
  }, [mode]);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <Canvas
          className="heart-canvas all-canvas"
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          {/* <Perf position="top-left" /> */}
          <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
          <directionalLight
            intensity={2}
            position={[2.5, 0, 10]}
            color="#fff5b6"
          />
          <HeartModel position={[3, 0, 0]} />
        </Canvas>
        <Canvas
          className="art-canvas all-canvas"
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          {/* <Perf position="top-left" /> */}
          <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
          <directionalLight
            intensity={2}
            position={[2.5, 0, 10]}
            color="#fff5b6"
          />
          <ArtModel position={[3, 0, 0]} />
        </Canvas>
        <Canvas
          className="map-canvas all-canvas"
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          {/* <Perf position="top-left" /> */}
          <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
          <directionalLight
            intensity={2}
            position={[2.5, 0, 10]}
            color="#fff5b6"
          />

          {/* <MapModel position={[3, 0, 0]} /> */}
          <TreasureModel position={[3, 0, 0]} />
        </Canvas>
        <Canvas
          className="clock-canvas all-canvas"
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          {/* <Perf position="top-left" /> */}
          <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
          <directionalLight
            intensity={2}
            position={[2.5, 0, 10]}
            color="#fff5b6"
          />
          {/* <ClockModel position={[3, 0, 0]} /> */}
          <NewClockModel position={[3, 0, 0]} />
        </Canvas>
      </div>
      <div
        className="globe-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 100,
          // pointerEvents: "none",
        }}
      >
        <div
          className="globe-mask"
          style={{
            height: "100%",
            width: "100%",
            maskImage: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${
              15 * change
            }%, rgba(255,255,255,1) ${50 * change}%, rgba(255,255,255,1) 100%)`,
          }}
        >
          <Canvas
            style={
              {
                // pointerEvents: "none",
              }
            }
          >
            <EffectComposer>
              <ambientLight intensity={2} />
              <directionalLight intensity={3} position={[5, 10, 10]} />
              {/* <directionalLight intensity={2} position={[-5, -10, -10]} /> */}
              {/* 
          <OrthographicCamera
            makeDefault
            position={[0, 0, 20]}
            zoom={1000}
            // left={-1
          /> */}
              <PerspectiveCamera
                makeDefault={true}
                far={1000}
                near={0.001}
                fov={22.895}
                position={[0, 0, 2.212]}
                zoom={0.9}
              />

              <FGlobeModel position={[1, 0, 0]} />
            </EffectComposer>
            {/* <CountriesModel position={[1, 0, 0]} /> */}
          </Canvas>
        </div>
      </div>
      <div
        className="question-mark-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",

          maskImage: `radial-gradient(circle at center left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${
            30 + 70 * prog
          }%, rgba(255,255,255,1) ${
            30 + 90 * prog
          }%, rgba(255,255,255,1) 100%)`,

          zIndex: 500,
          pointerEvents: "none",
        }}
      >
        <Canvas
          style={{
            pointerEvents: "none",
          }}
        >
          <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
          <directionalLight
            intensity={2}
            position={[2.5, 0, 10]}
            color="#fff5b6"
          />
          <QuestionModel />
        </Canvas>
      </div>
      <div
        className="face-model"
        style={{
          width: "40vw",
          height: "40vw",
          position: "fixed",
          // display: "none",
          top: "50vh",
          zIndex: 510,
          maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${
            num * 100
          }%, rgba(0,0,0,1) ${num * 100}%, rgba(0,0,0,1) 100%)`,
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          opacity: 0,
        }}
      >
        <Canvas
          style={{
            pointerEvents: "none",
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight intensity={3} position={[10, 10, 10]} />
          <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={22} />
          <FaceModel />
        </Canvas>
      </div>
    </>
  );
};

export default ThreeJsCanvas;
