import Lottie from "lottie-react";
import anim from "../assets/json/end_shall_we_9.json";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ShallWeEnd = () => {
  const ref = useRef();
  const noice = useRef();
  //   useEffect(() => {
  //     fun(ref.current.getDuration());
  //   }, []);
  useGSAP(() => {
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".Shall-we-end-cont",
        start: "top top",
        end: "bottom top",
        toggleActions: "play none none reverse",

        onEnter: () => {
          ref.current.setDirection(1);
          ref.current.play();

          // document.body.style.overflow = "hidden";
        },
        onLeaveBack: () => {
          ref.current.setDirection(-1);
          ref.current.play();

          // document.body.style.overflow = "hidden";
        },
      },
    });
  });
  return (
    <div
      className="shall-we-end"
      style={{
        height: "100vh",
        width: "100%",
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
