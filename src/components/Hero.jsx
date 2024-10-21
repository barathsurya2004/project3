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
gsap.registerPlugin(useGSAP);
const Hero = () => {
  const foods = [img1, img2, img3, img4, img5, img6, img7, img8];

  useGSAP(() => {
    const foodsChangetl = gsap.timeline({
      repeat: -1,
    });
    foodsChangetl
      .fromTo(
        ".food-0",
        {
          opacity: 0,
          x: 30,
        },
        { opacity: 1, x: 0, duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        ".food-0",
        { opacity: 1, x: 0 },
        {
          delay: 5,
          opacity: 0,
          x: -30,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-1",
        {
          opacity: 0,
          x: 30,
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
          x: -30,
          duration: 0.5,
          ease: "power1.inOut",
          immediateRender: false,
        }
      )
      .fromTo(
        ".food-2",
        {
          opacity: 0,
          x: 30,
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
          x: 30,
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
          x: 30,
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
          x: 30,
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
          x: 30,
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
          x: 30,
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
  return (
    <div
      className="hero-content"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
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
            marginBottom: 125 * (window.innerHeight / 1080),
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
          Food is something we consume and interact with every day. We typically
          eat every 4-6 hours, enjoying a variety of foods. We have emotional
          connections to certain meals; many times, we crave food made by our
          moms or from home. We share food, enjoy food, waste food, and strive
          for food. Often, we don't know how it's made or the effort involved;
          we just eat and repeat the cycle when hunger strikes again. This cycle
          of consumption, repeats itself tirelessly, every single meal, every
          single day!
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: (34 * window.innerHeight) / 1080,
            marginTop: (60 * window.innerHeight) / 1080,
          }}
        >
          Apart from all this, is there more to food
        </p>
      </div>
    </div>
  );
};

export default Hero;
