import { useProgress } from "@react-three/drei";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import "./Loader.css";
import inner from "../assets/icons/load-blur.svg";
import back from "../assets/icons/loaderBack.svg";
gsap.registerPlugin(CustomEase);
const Loader = () => {
  const { progress } = useProgress();
  const hori = 11;
  const verti = 19;
  const { loading, setLoading } = useContext(Context);
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        gsap.fromTo(
          ".inner-loader",
          {
            width: "25%",
          },
          {
            width: "100%",
            duration: 5,
            ease: "power4.out",
          }
        );
        gsap.fromTo(
          ".back-loader-inner",
          {
            width: "25%",
          },
          {
            width: "100%",
            duration: 5,
            ease: "power4.out",
          }
        );
      }, 2000);
      setTimeout(() => {
        gsap.to(".text", {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            setLoading(false);
          },
        });
      }, 5000);
    }
    gsap.to(".inner-loader", {
      width: `${progress / 4}%`,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(".back-loader-inner", {
      width: `${progress / 4}%`,
      duration: 2,
      ease: "power4.out",
    });
    if (!loading) {
      gsap.to(".loader", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",

        onComplete() {
          gsap.set(".loader", {
            display: "none",
          });
        },
      });
    }
  }, [progress, loading]);
  let count = 0;
  let index = 0;
  const content = [
    "we are what we eat",
    "food and travels, best buds forever",
    "go anywhere, right from your kitchen",
    "what nourishes us is more than just food",
    "travel begins with a taste",
    "every flavour has a story",
    "great adventures start at the dinner table",
    "food is identity",
    "sometimes, eating is an experience",
  ];
  const [i, setI] = useState(Math.floor(Math.random() * content.length));
  const [previ, setPrevi] = useState(i);
  useGSAP(() => {
    gsap.to(".text", {
      opacity: 1,
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.1,0 0.9,1 1,1"),
      repeat: -1,

      onRepeat() {
        if (count % 2 !== 0) {
          index = Math.floor(Math.random() * content.length);
          if (index === previ) {
            index = (index + 1) % content.length;
          } else {
            setI(index % content.length);
          }
        }
        count += 1;
      },
      yoyo: true,
    });
    gsap.to(".grid-lines-hori", {
      width: "100%",
      duration: 4.371,
      stagger: {
        amount: 1,
        from: "random",
      },
      ease: CustomEase.create("custom", "M0,0 C0.33,0 0.67,1 1,1 "),
    });
    gsap.to(".grid-lines-verti", {
      height: "100%",
      duration: 4.371,
      stagger: {
        amount: 1,
        from: "random",
      },
      ease: CustomEase.create("custom", "M0,0 C0.33,0 0.67,1 1,1 "),
    });
  });
  return (
    <div
      className="loader"
      style={{
        // background: "black",
        zIndex: 9999,
      }}
    >
      {/* <div className="bg-container">
        <div className="horizontal-lines">
          {Array.from({ length: hori }, (item, index) => (
            <div
              className="grid-lines-hori"
              key={index}
              style={{
                top: `${(window.innerHeight / 8) * index}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="vertical-lines">
          {Array.from({ length: verti }, (item, index) => (
            <div className="grid-lines-verti" key={index}></div>
          ))}
        </div>
      </div> */}
      <div className="container">
        <div
          className="text"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {content[i]}
        </div>
        {/* <div className="bar-glow">
          <div className="bar-glow-small">
            <div className="bar-glow-large"></div>
          </div>
          <div className="bar-glow-inner"></div>
        </div> */}
        <div
          className="bar-load"
          style={{
            width: (690 * window.innerWidth) / 1920,
            height: (5 * window.innerHeight) / 1080,
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            // background: "white",
            transform: `translateX(${(20 * window.innerWidth) / 1920}px)`,
            marginTop: (20 * window.innerHeight) / 1080,
          }}
        >
          <div
            className="inner-loader"
            style={{
              width: 0,
              height: (200 * window.innerHeight) / 1080,
              // background: "white",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <img
              src={inner}
              alt=""
              style={{
                width: "120%",
                height: 50,
                position: "absolute",
                bottom: 0,
                // mixBlendMode: "screen",
              }}
            />
          </div>
          <div
            className="back-loader"
            style={{
              position: "absolute",
              bottom: 0,
              margin: 0,
              width: (675 * window.innerWidth) / 1920,
              height: "50px",
              zIndex: -1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={back}
              alt=""
              style={{
                width: "100%",
                height: 50,
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            />
            <div
              className="back-loader-inner"
              style={{
                width: "100%",
                height: 4,
                background: "#f2d8a0",
                position: "absolute",
                bottom: "50%",
                left: 0,
                borderRadius: 2,
                // opacity: 0.5,
                transform: "translateY(50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
