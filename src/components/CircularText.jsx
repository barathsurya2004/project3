import { useEffect, useRef, useState } from "react";
import "./CircularText.css";
import { Draggable, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const CircularText = ({ texts, radius }) => {
  radius = (window.innerHeight * radius) / 1080;
  const [change, setChange] = useState(0);
  texts = [...texts, ...texts, ...texts];
  const [zIndex, setZIndex] = useState(1000);
  const [visibleCount, setVisibleCount] = useState(30);
  const [alphaMaskVisible, setAlphaMaskVisible] = useState(false);
  const [indVisible, setIndVisible] = useState(null);
  const prevIndVisibleRef = useRef();

  useEffect(() => {
    gsap.set("#drag", {
      rotation: 180,
    });
  }, []);
  useGSAP(() => {
    Draggable.create("#drag", {
      type: "rotation",
      onDragEnd: () => {
        const rotation = gsap.getProperty("#drag", "rotation");

        gsap.to("#drag", {
          rotation: rotation - 6 - ((rotation - 6) % 12),
        });
        let ind = Math.floor(
          (30 -
            ((((rotation - 6 - ((rotation - 6) % 12)) % 360) + 360) % 360) /
              12) %
            30
        );
        setIndVisible(ind);
      },
    });

    // const fullTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".drag-space-actual",
    //     start: "top 70%",
    //     end: "top 47%",
    //     scrub: true,
    //     toggleActions: "play none none reverse",
    //     // onEnter: () => {
    //     //   gsap.set(".cont-drag", {
    //     //     top: 0,
    //     //     left: 0,
    //     //   });
    //     // },
    //     // onLeaveBack: () => {
    //     //   gsap.set(".cont-drag", {
    //     //     top: 0,
    //     //     left: 0,
    //     //   });
    //     // },
    //   },
    // });

    // fullTl.fromTo(
    //   "#drag",
    //   {
    //     rotation: 45,
    //   },
    //   {
    //     rotation: 0,
    //   }
    // );
    gsap.fromTo(
      "#drag",
      {
        rotation: 90,
      },
      {
        rotation: 12,
        scrollTrigger: {
          trigger: ".wheel-word-ref-9",
          start: "top 60%",
          end: `top 47.5%`,
          scrub: true,
          markers: true,
        },
        ease: "none",
      }
    );
    // gsap.fromTo(
    //   "#drag",
    //   {
    //     rotation: 0,
    //   },
    //   {
    //     rotation: -60,
    //     scrollTrigger: {
    //       trigger: ".drag-space-actual",
    //       start: "top 47%",
    //       end: "top top",
    //       scrub: true,
    //       onLeave: () => {
    //         setZIndex(1000);
    //         setIndVisible(5);
    //         setVisibleCount(texts.length);
    //       },
    //       onEnterBack: () => {
    //         setIndVisible(null);
    //         setZIndex(10);
    //         setVisibleCount(10);
    //       },
    //     },
    //     immediateRender: false,
    //     ease: "none",
    //   }
    // );

    gsap.to("#drag", {
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top bottom",
        end: "top top",
        scrub: 0.05,
        onEnter: () => {
          setIndVisible(null);
          setAlphaMaskVisible(true);
          const dragWheel = document.getElementById("drag");
          dragWheel.style.pointerEvents = "none";
        },
        onLeaveBack: () => {
          const dragWheel = document.getElementById("drag");
          dragWheel.style.pointerEvents = "auto";
          setZIndex(800);
          const rotation = gsap.getProperty("#drag", "rotation");
          const ind = Math.floor(
            (30 - ((((rotation - (rotation % 12)) % 360) + 360) % 360) / 12) %
              30
          );
          setIndVisible(ind);
          setAlphaMaskVisible(false);
        },

        onLeave: () => {
          setZIndex(0);
        },
        onUpdate: (progress) => {
          setChange(progress.progress);
        },
      },
      ease: "power1.in",
      onComplete: () => {},
    });
  });
  return (
    <>
      <div
        className="drag-space-actual"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="cont-drag"
        style={{
          position: "fixed",
          top: "50%",
          left: "0%",
          width: "100vh",
          height: "100vh",
          transform: `translate(${(-506 * window.innerHeight) / 1080}px,-50%)`,
          zIndex: zIndex,
        }}
      >
        <div
          className="circle-container"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",

            transformOrigin: `center center`,

            transform: `translate(-50%, 0%)`,
          }}
        >
          <div
            id="drag"
            className="circle"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              // backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // left: 0,
            }}
          >
            {texts.map((text, index) => {
              const angle = (index * 360) / texts.length;
              // let fontSize = 0.05095;
              // if (index > visibleCount) fontSize = "0";
              // console.log(index);
              return (
                <div
                  className={`circle-text cir-text-${index}`}
                  key={index}
                  style={{
                    opacity: index > 10 ? 0 : 0.3 + 1 * change,
                    transform: "translateY(-50%)",
                  }}
                >
                  <div
                    style={{
                      transform: ` rotate(${angle}deg) translateX(${
                        radius + (change * 2000 * window.innerHeight) / 1080
                      }px) `,
                      transformOrigin: `left center`,
                      fontFamily: "TTtravels Next Demibold",
                      fontSize:
                        (55 * window.innerHeight) / 1080 +
                        change * window.innerHeight * 0.09,
                    }}
                  >
                    {text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="dragging-space"
        style={{
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div
        className="wheel-burst"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
    </>
  );
};

export default CircularText;
