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
  const { questionSelected, setQuestionSelected, setQuestionInteractions } =
    useContext(Context);
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
    setQuestionSelected(ind);
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
            setZIndex(1010);
          },
          onEnterBack: () => {
            setZIndex(0);
            setCanHighlight(false);
            setIndVisible(null);
            setQuestionSelected(-2);
          },
          // ,
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
          // ,
          onUpdate: (progress) => {
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
          setQuestionSelected(null);
        },
        onLeaveBack: () => {
          setZIndex(1010);
          const dragWheel = document.getElementById("drag");
          dragWheel.style.pointerEvents = "auto";
          const rotation = gsap.getProperty("#drag", "rotation");
          const ind = Math.floor(
            (30 - ((((rotation - (rotation % 12)) % 360) + 360) % 360) / 12) %
              30
          );
          setIndVisible(ind);
          setQuestionSelected(ind);
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
            onPointerDown={() => {
              setQuestionInteractions(true);
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
                        radius + (change * 2500 * window.innerHeight) / 1080
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
          height: "80vh",
        }}
      ></div>
    </>
  );
};

export default CircularText;
