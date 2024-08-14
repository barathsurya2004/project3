import { useEffect, useRef, useState } from "react";
import "./CircularText.css";
import { Draggable, ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const CircularText = ({ texts, radius }) => {
  radius = (window.innerWidth * radius) / 1920;
  const [change, setChange] = useState(0);
  texts = [...texts, ...texts, ...texts];
  const [zIndex, setZIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  const [alphaMaskVisible, setAlphaMaskVisible] = useState(false);
  const [indVisible, setIndVisible] = useState(null);
  const prevIndVisibleRef = useRef();

  useEffect(() => {
    const prevIndVisible = prevIndVisibleRef.current;
    // Animate the previous indVisible to opacity 0.3
    if (
      prevIndVisible !== undefined &&
      prevIndVisible !== indVisible &&
      !alphaMaskVisible
    ) {
      gsap.to(`.cir-text-${prevIndVisible}`, {
        opacity: 0.3,
        duration: 0.5,
        ease: "power4",
      });
    }

    // Animate the current indVisible to opacity 1
    gsap.to(`.cir-text-${indVisible}`, {
      opacity: 1,
      duration: 0.5,
      ease: "power4",
    });

    // Update the ref with the current indVisible for the next render
    prevIndVisibleRef.current = indVisible;
  }, [indVisible]);

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
    const fullTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".drag-space-actual",
        start: "top 70%",
        end: "top 47%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    fullTl.fromTo(
      "#drag",
      {
        rotation: 45,
      },
      {
        rotation: 0,
      }
    );

    gsap.fromTo(
      "#drag",
      {
        rotation: 0,
      },
      {
        rotation: -60,
        scrollTrigger: {
          trigger: ".drag-space-actual",
          start: "top 47%",
          end: "top top",
          scrub: true,
          onLeave: () => {
            setZIndex(1000);
            setIndVisible(5);
            setVisibleCount(texts.length);
          },
          onEnterBack: () => {
            setIndVisible(null);
            setZIndex(10);
            setVisibleCount(10);
          },
        },
        immediateRender: false,
        ease: "none",
      }
    );

    // gsap.to("#drag", {
    //   scrollTrigger: {
    //     trigger: ".wheel-burst",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: 0.05,
    //     onEnter: () => {
    //       setIndVisible(null);
    //       setAlphaMaskVisible(true);
    //       const dragWheel = document.getElementById("drag");
    //       dragWheel.style.pointerEvents = "none";
    //     },
    //     onLeaveBack: () => {
    //       const dragWheel = document.getElementById("drag");
    //       dragWheel.style.pointerEvents = "auto";
    //       setZIndex(800);
    //       const rotation = gsap.getProperty("#drag", "rotation");
    //       const ind = Math.floor(
    //         (30 - ((((rotation - (rotation % 12)) % 360) + 360) % 360) / 12) %
    //           30
    //       );
    //       setIndVisible(ind);
    //       setAlphaMaskVisible(false);
    //     },

    //     onLeave: () => {
    //       setZIndex(0);
    //     },
    //     onUpdate: (progress) => {
    //       setChange(progress.progress);
    //     },
    //   },
    //   ease: "power1.in",
    //   onComplete: () => {},
    // });
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
        style={{
          position: "fixed",
          top: (0 * window.innerHeight) / 1080,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: zIndex,
        }}
      >
        <div className="circle-container" style={{}}>
          <div
            id="drag"
            className="circle"
            style={{
              position: "absolute",
              width: `${radius * 5}px `,
              height: `${radius * 5}px`,
              left: ` ${(-2364 * window.innerWidth) / 1920}px`,
              // left: 0,
              // top: 0,
            }}
          >
            {texts.map((text, index) => {
              const angle = (index * 360) / texts.length;
              let fontSize = 0.05095;
              if (index > visibleCount) fontSize = "0";
              // console.log(index);
              return (
                <div
                  className={`circle-text cir-text-${index}`}
                  key={index}
                  style={{
                    opacity: 0.3 + 1 * change,
                  }}
                >
                  <div
                    style={{
                      transform: ` rotate(${angle}deg) translate(${
                        radius + window.innerWidth * change
                      }px) `,
                      transformOrigin: `left center`,
                      fontFamily: "TTtravels Next Demibold",
                      fontSize:
                        fontSize * window.innerHeight +
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
    </>
  );
};

export default CircularText;
