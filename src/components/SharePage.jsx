import { useGSAP } from "@gsap/react";
// import { Pepper } from "../../public/models/cards/Pepper";
// import { Tamarind } from "../../public/models/cards/Tamarind";
import image from "../assets/icons/share.svg";
// import CardsCanvas from "./CardsCanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);
import anim from "../assets/json/lightning for face.json";
// import html2canvas from "html2canvas";
import SharePopUp from "./SharePopUp";
const SharePage = () => {
  const animRef = useRef();
  const ref = useRef();
  const [shareOpen, setShareOpen] = useState(false);

  useGSAP(() => {
    gsap.to(".sharing-page", {
      // opacity: 0,

      // delay: 1,
      scrollTrigger: {
        trigger: ".face-reacting-page-helper",
        start: "top bottom",
        toggleActions: "play none none reverse",
        onEnter: () => {
          document.body.style.overflow = "hidden";
          // animRef.current.setSpeed(0.5);
          animRef.current.goToAndPlay(0);
          setTimeout(() => {
            gsap.to(".sharing-page", {
              delay: -1,
              opacity: 0,
              duration: 0.001,
            });
            gsap.to(".face-model", {
              zIndex: 1100,
              opacity: 1,
              duration: 0.001,
            });
            gsap.set(".face-reacting-page", {
              y: 0,
            });
            gsap.fromTo(
              ".face-reacting-page",
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.001,
                ease: "none",
                immediateRender: false,
              }
            );
            document.body.style.overflow = "auto";
          }, 1000);
          gsap.set(".share-page-transition-container", {
            top: 0,
          });
          gsap.set(ref.current, {
            zIndex: 0,
          });
        },
        onLeaveBack: () => {
          console.log("please go back");
          gsap.fromTo(
            ".face-reacting-page",
            { opacity: 1 },
            {
              opacity: 0,
              onComplete: () => {
                gsap.set(".face-reacting-page", {
                  y: "100vh",
                });
              },
            }
          );
          gsap.fromTo(".sharing-page", { opacity: 0 }, { opacity: 1 });
          gsap.fromTo(
            ".face-model",
            { opacity: 1, zIndex: 10 },
            { opacity: 0, zIndex: 1000 }
          );
          gsap.set(ref.current, {
            zIndex: 1000,
          });
        },
        // markers: true,
      },
    });
    gsap.fromTo(
      ".sharing-page",
      {
        top: "100vh",
      },
      {
        top: 0,
        scrollTrigger: {
          trigger: ".share-page-scroll-helper",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
  });
  useEffect(() => {
    if (shareOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(".share-pop-up", {
        top: 0,
        duration: 0.5,

        ease: "power2.inOut",
      });
      gsap.to(ref.current, {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${85}%, rgba(0,0,0,1) ${85}%, rgba(0,0,0,1) 100%)`,
        ease: "power2.inOut",
        duration: 0.5,
      });
    } else {
      gsap.to(".share-pop-up", {
        top: "100vh",
        duration: 0.5,
        ease: "power2.inOut",
      });
      document.body.style.overflow = "auto";
      gsap.to(ref.current, {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${-20}%, rgba(0,0,0,1) ${-20}%, rgba(0,0,0,1) 100%)`,
        ease: "power2.inOut",
        duration: 0.5,
      });
    }
  }, [shareOpen]);
  return (
    <>
      <SharePopUp setShareOpen={setShareOpen} />
      <div
        className="share-page-scroll-helper"
        style={{
          height: "100vh",
          width: "100%",
          // backgroundColor: "#101010",
        }}
      ></div>
      <div
        className="share-page-reading-helper"
        style={{
          height: "50vh",
          width: "100%",
          // backgroundColor: "#101010",
        }}
      ></div>
      <div
        ref={ref}
        className="sharing-page"
        style={{
          position: "fixed",
          top: "100vh",
          left: 0,
          zIndex: 510,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${-20}%, rgba(0,0,0,1) ${-20}%, rgba(0,0,0,1) 100%)`,
          // backgroundColor: "#101010",
        }}
      >
        <div
          style={{
            margin: 0,
            width: "100%",
            height: (166 * window.innerHeight) / 1080,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960.45 3000"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <path
              fill="none"
              stroke="#facd74"
              stroke-width="5"
              d="M480.225,0 L480.225,3392.025"
            />
          </svg>
        </div>
        <div
          // ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: (25 * window.innerHeight) / 1080,
            zIndex: 10,
          }}
        >
          <img
            src={image}
            style={{
              width: (125 * window.innerWidth) / 1920,
              height: (125 * window.innerHeight) / 1080,
              margin: 0,
              cursor: "pointer",
            }}
            alt=""
            onClick={() => {
              gsap.to(window, {
                scrollTo: ".share-page-scroll-helper",
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => {
                  setShareOpen(true);
                },
              });
            }}
          />
          <h1
            style={{
              fontSize: (55 * window.innerWidth) / 1920,
              fontFamily: "TTtravels Next DemiBold",
              textAlign: "center",
              margin: (25 * window.innerHeight) / 1080,
              color: "#facd74",
            }}
          >
            Share
          </h1>
          <p
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              textAlign: "center",
              width: (300 * window.innerWidth) / 1920,
              margin: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Click to send these to your firends and let them know the beauty of
            these cuisines
          </p>
        </div>
        <div
          style={{
            margin: 0,
            width: "100%",
            height: (70 * window.innerHeight) / 1080,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960.45 3000"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <path
              fill="none"
              stroke="#facd74"
              stroke-width="5"
              d="M480.225,0 L480.225,3392.025"
            />
          </svg>
        </div>
        <h1
          style={{
            fontSize: (55 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next DemiBold",
            textAlign: "center",
            margin: (25 * window.innerHeight) / 1080,
            width: (950 * window.innerWidth) / 1920,
            marginLeft: "auto",
            marginRight: "auto",
            color: "#facd74",
          }}
        >
          So many differences, yet complimentary.
        </h1>
        <p
          style={{
            fontSize: (19 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next Light",
            color: "#ffe8b8",
            textAlign: "center",
            opacity: 0.7,
            marginTop: (75 * window.innerHeight) / 1080,
            //   color: "white",
          }}
        >
          Click anywhere or scroll to begin
        </p>
      </div>{" "}
      <div
        className="share-page-transition-container"
        style={{
          position: "fixed",
          top: "100vh",
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2001,
          // opacity: 1,
          // mixBlendMode: "screen",
        }}
      >
        <Lottie
          animationData={anim}
          lottieRef={animRef}
          loop={false}
          autoplay={false}
          rendererSettings={{
            preserveAspectRatio: "none",
          }}
          style={{
            height: "100%",
            width: "100%",
            pointerEvents: "none",
          }}
          onComplete={() => {
            gsap.set(".share-page-transition-container", {
              top: "100vh",
            });
            // console.log("completed");
          }}
        />
      </div>
    </>
  );
};

export default SharePage;
