import Lottie from "lottie-react";
import anim from "../assets/json/shall_we_v13.json";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

const ShallWe = () => {
  const ref = useRef();
  useGSAP(() => {
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".shall-we",
        start: "top bottom",
        end: "top top",
        scrub: 0.1,
        toggleActions: "play none none reverse",
        onLeave: () => {
          ref.current.setSpeed(0.8);
          ref.current.play();
        },
        onEnterBack: () => {
          ref.current.setSpeed(-0.8);
          ref.current.play();
        },
      },
    });
  });
  return (
    <div
      className="shall-we"
      style={{
        height: "100vh",
        width: "100%",
        // marginBottom: "-50vh",
        position: "relative",
      }}
    >
      <Lottie
        lottieRef={ref}
        animationData={anim}
        loop={false}
        autoplay={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
};

export default ShallWe;
