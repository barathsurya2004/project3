import Lottie from "lottie-react";
import img1 from "../assets/foods-text/food (1).svg";
import img2 from "../assets/foods-text/food (2).svg";
import img3 from "../assets/foods-text/food (3).svg";
import img4 from "../assets/foods-text/food (4).svg";
import img5 from "../assets/foods-text/food (5).svg";
import img6 from "../assets/foods-text/food (6).svg";
import img7 from "../assets/foods-text/food (7).svg";
import img8 from "../assets/foods-text/food (8).svg";
import data from "../assets/lotties/scroll_down.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBar from "./NavBar";
import { useContext } from "react";
import { Context } from "../context";
gsap.registerPlugin(useGSAP);
const Hero = () => {
  const foods = [img1, img2, img3, img4, img5, img6, img7, img8];
  const { loading } = useContext(Context);

  useGSAP(() => {
    gsap.set(".hero-scroll-start", {
      y: "100vh",
    });
    const foodsChangetl = gsap.timeline({
      repeat: -1,
    });
    foodsChangetl
      .fromTo(
        ".food-0",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        { opacity: 1, x: 0, duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        ".food-0",
        { opacity: 1, x: 0 },
        {
          delay: 5,
          opacity: 0,
          x: (-200 * window.innerWidth) / 1920,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-1",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        ".food-1",
        { opacity: 1, x: 0 },
        {
          delay: 5,
          opacity: 0,
          x: (-200 * window.innerWidth) / 1920,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-2",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        ".food-2",
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          delay: 5,
          x: -30,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-3",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        ".food-3",
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: -30,
          delay: 5,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-4",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        ".food-4",
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: -30,
          duration: 0.5,
          delay: 5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-5",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        ".food-5",
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: -30,
          duration: 0.5,
          delay: 5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-6",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        ".food-6",
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: -30,
          delay: 5,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-7",
        {
          opacity: 0,
          x: (200 * window.innerWidth) / 1920,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .fromTo(
        ".food-7",
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: -30,
          delay: 5,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      );
  });
  useGSAP(() => {
    if (!loading) {
      gsap.set(".hero-page-interactions", {
        opacity: 1,
      });
      gsap.to(".hero-scroll-start", {
        y: 0,
        duration: 1,
        ease: "power4.out",
      });
    }
    gsap.to(".hero-page-interactions", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-content",
        start: "bottom 99%",
      },
    });
  }, [loading]);
  return (
    <div
      className="hero-content"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        scrollSnapAlign: "start",
        // position: "relative",
      }}
    >
      <div
        className="hero-scroll-start"
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          zIndex: 1010,
        }}
      >
        <div
          className="hero-page-interactions"
          style={{
            position: "absolute",
            bottom: 150 * (window.innerHeight / 1080),
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0,
          }}
        >
          <p
            style={{
              fontSize: (19 * window.innerWidth) / 1920,
              fontFamily: "TTtravels Next Light",
              color: "#ffe8b8",
              textAlign: "center",
              opacity: 0.7,
              //   color: "white",
            }}
          >
            Click anywhere or scroll to begin
          </p>
        </div>
        <div
          className="int-scroll-helper"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            // backgroundColor: "rgba(255,0,0,0.5)",
            zIndex: 1,
          }}
          onClick={() => {
            gsap.to(window, {
              duration: 3,
              scrollTo: {
                y: ".drag-space-actual",
              },
            });
          }}
        />
        <NavBar />
        <div
          style={{
            position: "absolute",
            bottom: "5vh",
            left: 0,
            width: "100%",
            height: "100vh",
            pointerEvents: "none",
          }}
        >
          <Lottie
            animationData={data}
            style={{
              height: "100vh",
            }}
          />
        </div>
        <div
          className="alignn"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "93.083vh",
          }}
        >
          <div
            style={{
              width: 679 * (window.innerWidth / 1920),
              height: 170 * (window.innerHeight / 1080),
              position: "relative",
              marginBottom: 60 * (window.innerHeight / 1080),
              fontSize: "2.5vh",
            }}
          >
            {foods.map((food, index) => {
              return (
                <div
                  key={index}
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                    position: "absolute",
                    transform: index == 6 ? "translateY(25%)" : 0,
                  }}
                >
                  <img
                    className={`food-${index}`}
                    key={index}
                    src={food}
                    alt="food"
                    style={{
                      height: "100%",
                      opacity: 0,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <p
            style={{
              fontSize: 27 * (window.innerHeight / 1080),
              textAlign: "center",
              width: "100%",
            }}
          >
            Food is a daily ritual that brings emotional connections, cravings,
            and enjoyment, often without consideration of its origins or effort.
            We share, savor, waste, and endlessly repeat this cycle with every
            meal.
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: (27 * window.innerHeight) / 1080,
              marginTop: (60 * window.innerHeight) / 1080,
            }}
          >
            Apart from all this, is there more to food
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
