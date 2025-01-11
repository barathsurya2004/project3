import Lottie from "lottie-react";
import anim from "../assets/json/fin_end_shall_we.json";
import { useContext, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Context } from "../context";
const ShallWeEnd = () => {
  const ref = useRef();

  useGSAP(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ".shall-we-end-anim-scroll",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(".shall-we-end", {
            opacity: 1,
          });
          gsap.set(".Shall-we-end-cont", {
            zIndex: 11,
          });
          const totalFrames = ref.current.getDuration(true);
          const frame = self.progress * totalFrames;
          ref.current.goToAndStop(frame, true);
        },

        onEnter: () => {
          gsap.set(".shall-we-end", {
            opacity: 1,
          });
        },
        onLeaveBack: () => {
          gsap.set(".shall-we-end", {
            opacity: 0,
          });
          gsap.set(".Shall-we-end-cont", {
            zIndex: 9,
          });
        },
        onComplete: () => {
          gsap.set(".shall-we-end", {
            opacity: 0,
          });
          gsap.set(".Shall-we-end-cont", {
            zIndex: 9,
          });
        },
      },
      ease: "none",
    });
  }, []);
  return (
    <div
      className="shall-we-end"
      style={{
        height: "100vh",
        width: "100%",
        opacity: 0,
      }}
    >
      <Lottie
        lottieRef={ref}
        animationData={anim}
        loop={false}
        autoplay={false}
        rendererSettings={{
          preserveAspectRatio: "none",
        }}
        style={{
          height: "100vh",
          width: "100%",
        }}

        // autoplay={false}
      />
    </div>
  );
};

export default ShallWeEnd;
