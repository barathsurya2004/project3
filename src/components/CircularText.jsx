import { useContext, useEffect, useRef, useState } from "react";
import "./CircularText.css";
import { Draggable, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Context } from "../context";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const CircularText = ({ texts, radius }) => {
  radius = (window.innerHeight * radius) / 1080;
  const [change, setChange] = useState(0);
  texts = [...texts, ...texts, ...texts];
  const [zIndex, setZIndex] = useState(100);
  const [visibleCount, setVisibleCount] = useState(10);
  const [alphaMaskVisible, setAlphaMaskVisible] = useState(false);
  const [indVisible, setIndVisible] = useState(null);
  const prevIndVisibleRef = useRef();
  const [rotation, setRotation] = useState(0);
  const [canHighlight, setCanHighlight] = useState(false);
  const { questionSelected, setQuestionSelected } = useContext(Context);
  const answer = [...texts];
  // console.log(360 / 30);
  useEffect(() => {
    gsap.set("#drag", {
      rotation: 180,
    });
    document.getElementById("drag").style.pointerEvents = "none";
  }, []);
  useEffect(() => {
    // console.log(rotation);

    let ind = Math.floor(
      (30 -
        ((((rotation - 6 - ((rotation - 6) % 6)) % 360) + 360) % 360) / 12) %
        30
    );
    if (canHighlight) {
      if (ind < visibleCount) setIndVisible(ind);
      else setIndVisible(null);
    }
  }, [rotation]);
  useEffect(() => {
    if (indVisible !== prevIndVisibleRef.current) {
      gsap.to(`.cir-text-${prevIndVisibleRef.current}`, {
        opacity: 0.3,
        duration: 0.5,
      });
      gsap.to(`.cir-text-${indVisible}`, {
        opacity: 1,
        duration: 0.5,
      });
      prevIndVisibleRef.current = indVisible;
    }
  }, [indVisible]);
  useGSAP(() => {
    Draggable.create("#drag", {
      type: "rotation",
      onDrag: () => {
        setRotation(gsap.getProperty("#drag", "rotation"));
      },
      onDragEnd: () => {
        gsap.to("#drag", {
          rotation: Math.round(gsap.getProperty("#drag", "rotation") / 12) * 12,
          duration: 0.5,
        });
        setRotation(
          Math.round(gsap.getProperty("#drag", "rotation") / 12) * 12
        );

        let rot = gsap.getProperty("#drag", "rotation");
        let ind = Math.floor(
          (30 - ((((rot - (rot % 12)) % 360) + 360) % 360) / 12) % 30
        );
        console.log(ind);
        setQuestionSelected(ind);
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
          trigger: ".scroll-control",
          start: "bottom 70%",
          end: `bottom 47.5%`,
          scrub: true,
          onUpdate: (progress) => {
            setRotation(90 - 78 * progress.progress);
          },
          onLeave: () => {
            setCanHighlight(true);
            setZIndex(101);
          },
          onEnterBack: () => {
            setZIndex(0);
            setCanHighlight(false);
            setIndVisible(null);
            setQuestionSelected(-2);
          },
          // markers: true,
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      "#drag",
      {
        rotation: 12,
      },
      {
        rotation: -60,
        scrollTrigger: {
          trigger: ".scroll-control",
          start: "bottom 47.5%",
          end: "bottom top",
          scrub: true,
          // markers: true,
          onUpdate: (progress) => {
            console.log(progress);
            setRotation(12 - 72 * progress.progress);
          },
          onLeave: () => {
            setVisibleCount(50);
            document.getElementById("drag").style.pointerEvents = "auto";
          },
          onEnterBack: () => {
            setVisibleCount(10);
            document.getElementById("drag").style.pointerEvents = "none";
          },
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
          setCanHighlight(false);
          setAlphaMaskVisible(true);
          const dragWheel = document.getElementById("drag");
          dragWheel.style.pointerEvents = "none";
        },
        onLeaveBack: () => {
          setZIndex(101);
          const dragWheel = document.getElementById("drag");
          dragWheel.style.pointerEvents = "auto";
          const rotation = gsap.getProperty("#drag", "rotation");
          const ind = Math.floor(
            (30 - ((((rotation - (rotation % 12)) % 360) + 360) % 360) / 12) %
              30
          );
          setIndVisible(ind);
          setCanHighlight(true);
          setAlphaMaskVisible(false);
          setQuestionSelected(-1);
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
        className="questions-answers"
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: -1,
        }}
      >
        <div
          className="questions"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "27.5%",
            width: (500 * window.innerHeight) / 1080,
            textAlign: "center",
            transform: "translateX(50%)",
          }}
        >
          {(() => {
            if (questionSelected === -2) {
              return "Click on any questions to know more about it";
            } else if (questionSelected === -1) {
              return "Click on the globe to know more about the project";
            } else {
              return answer[questionSelected];
            }
          })()}
        </div>
      </div>
      <div
        className="cont-drag"
        style={{
          position: "fixed",
          top: "50%",
          left: "0%",
          width: "250vh",
          height: "250vh",
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
              // background: "red",
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
                    opacity: index > visibleCount ? 0 : 0.3 + 1 * change,
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
