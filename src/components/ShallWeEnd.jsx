import Lottie from "lottie-react";
import anim from "../assets/json/rev_shall_we.json";
import { useContext, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Context } from "../context";
const ShallWeEnd = () => {
  const ref = useRef();
  const { canScrollTo } = useContext(Context);
  //   useEffect(() => {
  //     fun(ref.current.getDuration());
  //   }, []);

  useGSAP(() => {
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".Shall-we-end-cont",
        start: "top 3%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          if (!canScrollTo.current) {
            return;
          }
          document.body.style.overflow = "hidden";
          gsap.to(window, {
            scrollTo: {
              y: ".Shall-we-end-cont",
              autoKill: false,
            },
            duration: 0.5,
            onComplete: () => {
              ref.current.setDirection(1);
              ref.current.play();
              gsap.set(".slider-compare__center", {
                y: "100vh",
              });
              gsap.set(".shall-we-end", {
                opacity: 1,
              });
              gsap.set(".Shall-we-end-cont", {
                zIndex: 11,
              });
              gsap.set(".slider-compare__center-line", {
                opacity: 0,
              });
              // document.body.style.overflow = "auto";
            },
          });
        },
      },
    });
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".Shall-we-end-cont",
        start: "bottom 3%",
        onLeaveBack: () => {
          console.log(canScrollTo);
          if (!canScrollTo.current) {
            return;
          }
          document.body.style.overflow = "hidden";
          gsap.to(window, {
            scrollTo: {
              y: ".Shall-we-end-cont",
              autoKill: false,
            },
            ease: "none",
            onComplete: () => {
              ref.current.setDirection(-1);
              ref.current.play();
            },
            duration: 1,
          });
        },
      },
    });
    // gsap.to(".null", {
    //   scrollTrigger: {
    //     trigger: ".Shall-we-end-cont",
    //     start: "top top",
    //     end: "bottom top",
    //     toggleActions: "play none none reverse",

    //     onEnter: () => {
    //       ref.current.setDirection(1);
    //       ref.current.play();
    //       gsap.set(".slider-compare__center", {
    //         y: 0,
    //       });
    //       gsap.set(".shall-we-end", {
    //         opacity: 1,
    //       });
    //       gsap.set(".Shall-we-end-cont", {
    //         zIndex: 11,
    //       });
    //       gsap.set(".slider-compare__center-line", {
    //         opacity: 1,
    //       });

    //       document.body.style.overflow = "hidden";
    //     },
    //     onLeaveBack: () => {
    //       ref.current.setDirection(-1);
    //       ref.current.play();

    //       // document.body.style.overflow = "hidden";
    //     },
    //   },
    // });
  }, []);
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
        onComplete={(e) => {
          console.log(ref.current);
          document.body.style.overflow = "auto";
          if (ref.current.animationItem.playDirection === 1) {
            gsap.set(".slider-compare__center-line", {
              opacity: 0,
            });
            gsap.set(
              ".slider-compare__center",

              {
                y: "100vh",
                duration: 1,
              }
            );
            gsap.to(window, {
              scrollTo: {
                y: ".theres-more-container",
                autoKill: false,
              },
              duration: 1,
              ease: "none",
            });
          } else {
            gsap.set(".slider-compare__center-line", {
              opacity: 1,
            });
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
          }
        }}
        // autoplay={false}
      />
    </div>
  );
};

export default ShallWeEnd;
