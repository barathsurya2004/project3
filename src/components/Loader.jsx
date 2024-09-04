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
        setLoading(false);
      }, 2000);
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
        <div className="text">{content[i]}</div>
        <div className="bar">
          <div className="bar-load"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
