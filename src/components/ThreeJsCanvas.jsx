import { Canvas } from "@react-three/fiber";
import { HeartModel } from "../../public/Models/Heart";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ArtModel } from "../../public/Models/Art";
import { MapModel } from "../../public/Models/Treasure_map";
import { ClockModel } from "../../public/Models/Clock";
import { FaceModel } from "../../public/Models/Face1";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Bloom, EffectComposer, SMAA } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";
import { QuestionModel } from "../../public/Models/Q_mark";
import { NewClockModel } from "../../public/Models/Clokc";
import { TreasureModel } from "../../public/Models/Treasure";
import { CountriesModel } from "../../public/Models/Countries";
import { FGlobeModel } from "../../public/Models/FINAL_globe";
import { TrialModel } from "../../public/Models/Triallllllllll";
import { GlobeModel } from "../../public/Models/Globe";
import { GlobeModelBack } from "../../public/Models/Globe copy";

const ThreeJsCanvas = () => {
  const [prog, setProg] = useState(0);
  const [change, setChange] = useState(0);
  const { loading } = useContext(Context);
  const lightRef = useRef();
  useGSAP(() => {
    gsap.set(".question-mark-canvas", {
      y: "100vh",
    });
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
    // console.log(lightRef.current);

    // gsap.fromTo(
    //   ".face-model",
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 0.2,
    //     scrollTrigger: {
    //       trigger: ".face-reacting-page-helper",
    //       start: "top 90%",
    //       toggleActions: "none none none reverse",
    //     },
    //     immediateRender: false,
    //   }
    // );
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
          trigger: ".pandiyaNadu-intro",
          start: "bottom 50%",
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".globe-mask2",
      {
        maskImage: `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)`,
      },
      {
        maskImage: `linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%)`,
        scrollTrigger: {
          trigger: ".pandiyaNadu-intro",
          start: "bottom bottom",
          end: "bottom 50%",
          scrub: true,
          // markers: true,
        },
        ease: "none",
      }
    );
  });
  useEffect(() => {
    if (!loading) {
      gsap.to(".question-mark-canvas", {
        y: 0,
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [loading]);
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

          <HeartModel position={[3, 0, 0]} />

          {/* <Perf position="top-left" /> */}

          <ArtModel position={[3, 0, 0]} />

          {/* <Perf position="top-left" /> */}

          {/* <MapModel position={[3, 0, 0]} /> */}
          <TreasureModel position={[5, 0, -5]} scale={0.6} />

          {/* <Perf position="top-left" /> */}
          <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
          <spotLight
            intensity={50}
            position={[5, 0, 5]}
            color="#f4e7cb"
            angle={Math.PI / 2}
          />
          <spotLight
            intensity={20}
            position={[1, 0, 4]}
            color={"#f4e7cb"}
            angle={Math.PI / 2}
          />

          <spotLight intensity={80} position={[3, 3, 5]} color="#f4e7cb" />
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
          zIndex: 10,

          // pointerEvents: "none",
        }}
      >
        <div
          className="globe-mask2"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div
            className="globe-mask"
            style={{
              height: "100%",
              width: "100%",
              maskImage: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) ${
                15 * change
              }%, rgba(255,255,255,1) ${
                50 * change
              }%, rgba(255,255,255,1) 100%)`,
            }}
          >
            <Canvas
              style={
                {
                  // pointerEvents: "none",
                }
              }
            >
              <EffectComposer multisampling={0}>
                {/* <SMAA /> */}
                {/* <Bloom
                  intensity={1.0} // The bloom intensity.
                  kernelSize={KernelSize.LARGE} // blur kernel size
                  luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
                  luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                  mipmapBlur={false} // Enables or disables mipmap blur.
                  resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
                  resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
                /> */}
              </EffectComposer>
              {/* <directionalLight intensity={3} position={[5, 10, 10]} /> */}
              <spotLight
                intensity={150}
                position={[10, 0, 0]}
                color="#f4e7cb"
                angle={Math.PI / 2}
              />
              <spotLight
                intensity={150}
                position={[-10, 0, 0]}
                color={"#f4e7cb"}
                angle={Math.PI / 2}
              />

              <spotLight
                ref={lightRef}
                intensity={250}
                position={[3, 3, 10]}
                color="#f4e7cb"
              />

              <spotLight
                ref={lightRef}
                intensity={150}
                position={[3, 2, 10]}
                color="#f4e7cb"
              />
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
              {/* <OrbitControls /> */}

              {/* <FGlobeModel position={[1, 0, 0]} /> */}
              <GlobeModel position={[1, 0, 0]} />
              {/* <GlobeModelBack /> */}
              {/* <TrialModel position={[1, 0, 0]} /> */}
              {/* <CountriesModel position={[1, 0, 0]} /> */}
            </Canvas>
          </div>
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
            45 + 60 * prog
          }%, rgba(255,255,255,1) ${
            55 + 95 * prog
          }%, rgba(255,255,255,1) 100%)`,

          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <Canvas
          style={{
            pointerEvents: "none",
          }}
        >
          <spotLight
            intensity={20}
            position={[5, 0, 10]}
            color="#f4e7cb"
            angle={Math.PI / 2}
          />
          <spotLight
            intensity={20}
            position={[1, 0, 10]}
            color={"#f4e7cb"}
            angle={Math.PI / 2}
          />
          <spotLight
            intensity={0}
            position={[0.2, 0, 1]}
            color="#f4e7cb"
            angle={Math.PI / 2}
          />
          <spotLight intensity={50} position={[3, 3, 5]} color="#f4e7cb" />
          <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />

          <QuestionModel />
          {/* <ambientLight intensity={1} /> */}
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
          zIndex: 10,
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
          {/* <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={22} /> */}
          <PerspectiveCamera makeDefault position={[0, 0, 100]} zoom={3.5} />

          <FaceModel />
        </Canvas>
      </div>
    </>
  );
};

export default ThreeJsCanvas;
