import { useContext, useEffect, useState } from "react";
import PandiFlag from "./PandiFlag";
import ChettiFlag from "./ChettiFlag";
import left from "../assets/icons/left-station.svg";
import right from "../assets/icons/right-station.svg";
import center from "../assets/icons/center.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import button from "../assets/icons/slider-button.svg";
import { Context } from "../context";
import ShallWe from "./ShallWe";
import ShallWeEnd from "./ShallWeEnd";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Slider1 = () => {
  const [dragging, setDragging] = useState(false);
  const [yPos, setYPos] = useState(0);
  const [xPos, setXPos] = useState(window.innerWidth / 2);
  const { pointer } = useContext(Context);
  const [sliderValue, setSliderValue] = useState(50);
  const [pointerUp, setPointerUp] = useState(null);
  const [duration, setDuration] = useState(null);
  useGSAP(() => {
    gsap.set(".slider-compare__center", {
      y: "100vh",
    });
    gsap.set(".slider-compare__center-line", {
      opacity: 0,
    });
    gsap.fromTo(
      ".slider-compare__center",
      {
        y: "100vh",
      },
      {
        y: "0",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".shall-we-anim-scroll",
          start: "bottom bottom",
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.set(".slider-compare__center-line", {
              opacity: 1,
            });
          },
          onLeaveBack: () => {
            gsap.set(".slider-compare__center-line", {
              opacity: 0,
            });
          },
        },
        ease: "none",
      }
    );
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".shall-we-end-anim-scroll",
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          gsap.set(".slider-compare__center-line", {
            opacity: 0,
          });
        },
        onLeaveBack: () => {
          gsap.set(".slider-compare__center-line", {
            opacity: 1,
          });
        },
      },
    });

    gsap.fromTo(
      ".slider-compare",
      {
        top: "100vh",
      },
      {
        top: 0,
        scrollTrigger: {
          trigger: ".slider-place-holder",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".slider-compare",
      {
        top: 0,
      },
      {
        top: "-150vh",
        scrollTrigger: {
          trigger: ".slider-compare-scroll",
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
          // markers: true,

          // onEnterBack: () => {
          //   gsap.set(".slider-compare__center", {
          //     opacity: 1,
          //   });
          // },
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".slider-compare",
      {
        top: "-150vh",
      },
      {
        top: "-250vh",
        scrollTrigger: {
          trigger: ".slider-compare-remove-scroll",
          start: "bottom bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: true,
          onEnter: () => {
            gsap.set(".slider-compare__center", {
              opacity: 0,
            });
            gsap.set(".slider-compare__center", {
              y: "100vh",
            });
          },

          onLeaveBack: () => {
            gsap.set(".slider-compare__center", {
              opacity: 1,
            });
            gsap.set(".slider-compare__center", {
              y: 0,
            });
          },
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".slider-compare-scroll",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "play none none none",
        onLeaveBack: () => {
          setSliderValue(50);
          gsap.to(".slider-compare__center-line", {
            left: "25%",
            duration: 0.1,
          });
          gsap.to(".slider-button-cont", {
            left: "50%",
          });
        },
        onLeave: () => {
          setSliderValue(50);
          gsap.to(".slider-compare__center-line", {
            left: "25%",
            duration: 0.1,
          });
          gsap.to(".slider-button-cont", {
            left: "50%",
          });
        },
      },
    });
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".slider-stay-scroll",
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          setSliderValue(50);
          gsap.to(".slider-compare__center-line", {
            left: "25%",
            duration: 0.1,
          });
          gsap.to(".slider-button-cont", {
            left: "50%",
          });
        },
        onLeaveBack: () => {
          setSliderValue(50);
          gsap.to(".slider-compare__center-line", {
            left: "25%",
            duration: 0.1,
          });
          gsap.to(".slider-button-cont", {
            left: "50%",
          });
        },
      },
    });
  });

  return (
    <>
      <div
        className="slider-place-holder"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>

      <div
        className="shall-we-anim-scroll"
        style={{
          width: "100%",
          height: "200vh",
        }}
      ></div>
      <div
        className="slider-stay-scroll"
        style={{
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div
        className="slider-compare-scroll"
        style={{
          width: "100%",
          height: "150vh",
        }}
      ></div>
      <div
        className="shall-we-end-anim-scroll"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="slider-compare-remove-scroll"
        style={{
          width: "100%",
          height: "50vh",
        }}
      ></div>

      <div
        className="slider-compare"
        style={{
          width: "100%",
          height: "250vh",
          position: "fixed",
          top: "100vh",
          left: "0",
          mixBlendMode: "exclusion",
          // paddingTop: "20vh",
          zIndex: 550,
        }}
      >
        <div
          className="Shall-we-cont"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: 11,
          }}
        >
          <ShallWe fun={setDuration} />
        </div>
        <div
          className="Shall-we-end-cont"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            bottom: "0",
            left: "0",
            zIndex: 11,
          }}
        >
          <ShallWeEnd />
        </div>
        <div
          className="slider-component-input"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: (100 * window.innerWidth) / 1920,
              width: (100 * window.innerWidth) / 1920,
              position: "absolute",
              left: dragging ? pointer[0] : xPos,
              top: dragging ? pointer[1] - window.innerHeight / 2 : yPos,
              // transform: "translate(-50%, -50%)",
              // backgroundColor: "red",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              zIndex: 101,
              // pointerEvents: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
            }}
            onDoubleClick={(e) => {
              // console.log(e.clientX);
              const cur = xPos;
              if (cur < 0.3 * window.innerWidth) {
                console.log(xPos - 0.1 * window.innerWidth);
                if (xPos - 0.1 * window.innerWidth > 0) {
                  gsap.fromTo(
                    ".slider-compare__container__left",
                    {
                      width: "10%",
                    },
                    {
                      width: "50%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__container__right",
                    {
                      width: "90%",
                    },
                    {
                      width: "50%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__center-line",
                    {
                      left: "-15%",
                    },
                    {
                      left: "25%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-button-cont",
                    {
                      left: "10%",
                    },
                    {
                      left: "50%",
                      duration: 0.5,
                    }
                  );
                  setXPos(0.1 * window.innerWidth);
                  // setYPos(0);
                }
              } else if (cur > 0.7 * window.innerWidth) {
                if (xPos - 0.9 * window.innerWidth < 0) {
                  gsap.fromTo(
                    ".slider-compare__container__left",
                    {
                      width: "90%",
                    },
                    {
                      width: "50%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__container__right",
                    {
                      width: "10%",
                    },
                    {
                      width: "50%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__center-line",
                    {
                      left: "65%",
                    },
                    {
                      left: "25%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-button-cont",
                    {
                      left: "90%",
                    },
                    {
                      left: "50%",
                      duration: 0.5,
                    }
                  );
                  setXPos(0.9 * window.innerWidth);
                  // setYPos(0);
                }
              } else {
                if (xPos - 0.5 * window.innerWidth < 0) {
                  gsap.fromTo(
                    ".slider-compare__container__left",
                    {
                      width: "50%",
                    },
                    {
                      width: "10%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__container__right",
                    {
                      width: "50%",
                    },
                    {
                      width: "90%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__center-line",
                    {
                      left: "25%",
                    },
                    {
                      left: "-15%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-button-cont",
                    {
                      left: "50%",
                    },
                    {
                      left: "10%",
                      duration: 0.5,
                    }
                  );
                  setXPos(0.1 * window.innerWidth);
                  // setYPos(0);
                } else {
                  gsap.fromTo(
                    ".slider-compare__container__left",
                    {
                      width: "50%",
                    },
                    {
                      width: "90%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__container__right",
                    {
                      width: "50%",
                    },
                    {
                      width: "10%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-compare__center-line",
                    {
                      left: "25%",
                    },
                    {
                      left: "65%",
                      duration: 0.5,
                    }
                  );
                  gsap.fromTo(
                    ".slider-button-cont",
                    {
                      left: "50%",
                    },
                    {
                      left: "90%",
                      duration: 0.5,
                    }
                  );
                  setXPos(0.9 * window.innerWidth);
                }
              }
            }}
            onPointerDown={(e) => {
              let time = performance.now();
              console.log(time, pointerUp);
              if (time - pointerUp > 1000) {
                setDragging(true);
              }
            }}
            onPointerUp={() => {
              setPointerUp(performance.now());
              setDragging(false);
              setSliderValue((pointer[0] / window.innerWidth) * 100);
              setYPos(pointer[1] - window.innerHeight / 2);
              setXPos(pointer[0]);
              // console.log(pointer[0]);
              gsap.fromTo(
                ".slider-compare__container__left",
                {
                  width: `${(pointer[0] / window.innerWidth) * 100}%`,
                },
                {
                  width: () => {
                    if ((pointer[0] / window.innerWidth) * 100 > 60) {
                      return "90%";
                    } else if ((pointer[0] / window.innerWidth) * 100 < 40) {
                      return "10%";
                    } else {
                      return "50%";
                    }
                  },
                  duration: 0.5,
                }
              );
              gsap.fromTo(
                ".slider-compare__container__right",
                {
                  width: `${100 - (pointer[0] / window.innerWidth) * 100}%`,
                },
                {
                  width: () => {
                    if ((pointer[0] / window.innerWidth) * 100 > 60) {
                      return "10%";
                    } else if ((pointer[0] / window.innerWidth) * 100 < 40) {
                      return "90%";
                    } else {
                      return "50%";
                    }
                  },
                  duration: 0.5,
                }
              );
              gsap.fromTo(
                ".slider-compare__center-line",
                {
                  left: `${pointer[0] - 0.25 * window.innerWidth}px`,
                },
                {
                  left: () => {
                    if ((pointer[0] / window.innerWidth) * 100 > 60) {
                      return "65%";
                    } else if ((pointer[0] / window.innerWidth) * 100 < 40) {
                      return "-15%";
                    } else {
                      return "25%";
                    }
                  },
                  duration: 0.5,
                }
              );
              gsap.fromTo(
                ".slider-button-cont",
                {
                  left: `${(pointer[0] / window.innerWidth) * 100}%`,
                },
                {
                  left: () => {
                    if ((pointer[0] / window.innerWidth) * 100 > 60) {
                      return "90%";
                    } else if ((pointer[0] / window.innerWidth) * 100 < 40) {
                      return "10%";
                    } else {
                      return "50%";
                    }
                  },
                  duration: 0.5,
                }
              );
            }}
            className="slider-button-cont"
            onPointerEnter={() => {
              gsap.fromTo(
                ".slider-compare__center",
                {
                  opacity: 0.3,
                },
                {
                  opacity: 1,
                  duration: 0.5,
                }
              );
            }}
            onPointerLeave={() => {
              gsap.fromTo(
                ".slider-compare__center",
                {
                  opacity: 1,
                },
                {
                  opacity: 0.3,
                  duration: 0.5,
                }
              );
            }}
          >
            <img
              className="slider-compare__center"
              src={button}
              alt=""
              style={{
                width: (100 * window.innerWidth) / 1920,
                padding: "auto 0",
                pointerEvents: "none",
                cursor: "pointer",
                // transform: "translate(0, 100vh)",
                opacity: 0.3,
                zIndex: 10,
              }}
            />
          </div>
          <img
            className="slider-compare__center-line"
            style={{
              position: "absolute",
              // top: "-100%",
              // top: "-100%"
              height: "100vh",
              width: "50%",
              left: dragging
                ? pointer[0] - 0.25 * window.innerWidth
                : xPos - 0.25 * window.innerWidth,
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
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{
              width: "100%",
              cursor: "pointer",
              position: "absolute",
              left: "0",
              opacity: 0,
              padding: "10px 0",
              pointerEvents: "none",
              top: dragging
                ? pointer[1] - window.innerHeight / 2 - 10
                : yPos - 10,
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
              width: dragging
                ? `${(pointer[0] / window.innerWidth) * 100}%`
                : `${sliderValue}%`,
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
              width: dragging
                ? `${100 - (pointer[0] / window.innerWidth) * 100}%`
                : `${100 - sliderValue}%`,
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

export default Slider1;
