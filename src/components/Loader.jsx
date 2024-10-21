import { useProgress } from "@react-three/drei";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import "./Loader.css";
gsap.registerPlugin(CustomEase);
const Loader = () => {
  const { progress } = useProgress();
  const { loading, setLoading } = useContext(Context);
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        gsap.fromTo(
          ".bar-load",
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
          ".bar-glow-small",
          {
            left: `${100 / 3.5}%`,
          },
          {
            left: "100%",
            duration: 5,
            ease: "power4.out",
          }
        );
        gsap.fromTo(
          ".bar-glow-inner",
          {
            width: `${100 / 3.5}%`,
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
    gsap.to(".bar-load", {
      width: `${progress / 4}%`,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(".bar-glow-inner", {
      width: `${progress / 3.5}%`,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(".bar-glow-small", {
      left: `${progress / 3.5}%`,
      duration: 2,
      ease: "power4.out",
    });
    // gsap.to(".bar-glow-large", {
    //   left: `${progress / 4}%`,
    //   duration: 2,
    //   ease: "power4.out",
    // });
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
  useGSAP(() => {
    gsap.to(".text", {
      opacity: 1,
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.1,0 0.9,1 1,1"),
      repeat: -1,

      onRepeat() {
        if (count % 2 !== 0) {
          index = Math.floor(Math.random() * content.length);
          setI(index % content.length);
        }
        count += 1;
      },
      yoyo: true,
    });
  });
  return (
    <div
      className="loader"
      style={{
        background: "black",
        zIndex: 1000,
      }}
    >
      <div className="container">
        <div
          className="text"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {content[i]}
        </div>
        <div className="bar-glow">
          <div className="bar-glow-small">
            <div className="bar-glow-large"></div>
          </div>
          <div className="bar-glow-inner"></div>
        </div>
        <div className="bar">
          <div className="bar-load"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
