import Lottie from "lottie-react";
import anim from "../assets/json/actually_final_shall_we.json";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../context";

const ShallWe = ({ fun }) => {
  const ref = useRef();
  useEffect(() => {
    fun(ref.current.getDuration());
  }, []);
  useGSAP(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ".shall-we-anim-scroll",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress != 1) {
            gsap.set(".shall-we", {
              opacity: 1,
            });
            gsap.set(".Shall-we-cont", {
              zIndex: 11,
            });
            const totalFrames = ref.current.getDuration(true);
            const frame = self.progress * totalFrames;
            ref.current.goToAndStop(frame, true);
          } else {
            gsap.set(".shall-we", {
              opacity: 0,
            });
            gsap.set(".Shall-we-cont", {
              zIndex: -1,
            });
          }
        },
        onComplete: () => {
          console.log("yeadhh");
          gsap.set(".shall-we", {
            opacity: 0,
          });
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
        margin: 0,
        position: "relative",
        pointerEvents: "none",
        scrollSnapAlign: "start",
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
          margin: 0,
        }}
        onComplete={(e) => {
          gsap.fromTo(
            ".slider-compare__center",
            {
              y: "100vh",
            },
            {
              y: 0,
              duration: 1,
              ease: "power3.out",
            }
          );
          console.log(ref.current);
          if (ref.current.animationItem.playDirection === 1) {
            gsap.set(".shall-we", {
              opacity: 0,
            });
            gsap.set(".Shall-we-cont", {
              zIndex: -1,
            });
            gsap.set(".slider-compare__center-line", {
              opacity: 1,
            });
          }
        }}
        rendererSettings={{
          preserveAspectRatio: "none",
        }}
      />
    </div>
  );
};

export default ShallWe;
