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
      width: `${progress}%`,
      duration: 2,
      ease: "power4.out",
    });

    if (!loading) {
      gsap.to(".loader", {
        opacity: 0,
        duration: 1,
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
  const [i, setI] = useState(0);
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
  useGSAP(() => {
    gsap.to(".text", {
      opacity: 1,
      duration: 1,
      ease: CustomEase.create("custom", "M0,0 C0.1,0 0.9,1 1,1"),
      repeat: -1,

      onRepeat() {
        if (count % 2 !== 0) {
          index += 1;
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
        <div className="bar">
          <div className="bar-load"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
