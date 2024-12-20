import Lottie from "lottie-react";
import anim from "../assets/json/shall_we_fin_fin_2.json";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ShallWe = ({ fun }) => {
  const ref = useRef();
  useEffect(() => {
    fun(ref.current.getDuration());
  }, []);
  useGSAP(() => {
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".shall-we",
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none reverse",

        onLeave: () => {
          ref.current.setDirection(1);
          ref.current.play();
          gsap.set(".slider-compare__center", {
            y: "100vh",
          });
          gsap.set(".shall-we", {
            opacity: 1,
          });
          gsap.set(".Shall-we-cont", {
            zIndex: 11,
          });
          gsap.set(".slider-compare__center-line", {
            opacity: 0,
          });
          // document.body.style.overflow = "hidden";
        },
        onEnterBack: () => {
          ref.current.setDirection(-1);
          ref.current.play();
          gsap.set(".shall-we", {
            opacity: 1,
          });
          gsap.set(".Shall-we-cont", {
            zIndex: 11,
          });
          gsap.set(".slider-compare__center-line", {
            opacity: 0,
          });
          // document.body.style.overflow = "hidden";
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
