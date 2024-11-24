import Lottie from "lottie-react";
import anim from "../assets/json/shall_we_v13.json";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ShallWe = ({ fun }) => {
  const ref = useRef();
  const noice = useRef();
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
          ref.current.setSpeed(0.8);
          ref.current.play();

          // document.body.style.overflow = "hidden";
        },
        // onEnterBack: () => {
        //   ref.current.setSpeed(-0.8);
        //   ref.current.play();

        //   // document.body.style.overflow = "hidden";
        // },
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
      ref={noice}
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
        onComplete={() => {
          gsap.to(noice.current, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
              noice.current.style.display = "none";
            },
          });
        }}
      />
    </div>
  );
};

export default ShallWe;
