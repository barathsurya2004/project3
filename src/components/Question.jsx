import { useGSAP } from "@gsap/react";
import Definition from "./Definition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Question = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".question",
      {
        left: "-50vw",
      },
      {
        left: 0,
        scrollTrigger: {
          trigger: ".question-trigger",
          start: "top 160%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          scrub: 0.05,
        },
      }
    );
    const questionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".definition",
        start: "top bottom",
        end: "top top",
        scrub: 0.05,
      },
    });
    questionTl
      .fromTo(
        ".definition-container",
        {
          top: "100%",
        },
        {
          top: "35%",
          ease: "none",
        }
      )

      .fromTo(
        ".definition-container",
        {
          top: "35%",
        },
        {
          top: "-1%",
          immediateRender: false,
          ease: "none",
        }
      )
      .fromTo(
        ".question",
        {
          opacity: 1,
        },
        {
          opacity: 0.3,
          top: "-35vh",
          ease: "none",
        },
        "<"
      );

    gsap.fromTo(
      ".definition-container",
      {
        top: "-1%",
      },
      {
        top: "-100%",
        scrollTrigger: {
          trigger: ".food-is",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },

        immediateRender: false,
        ease: "none",
      }
    );
    const ques = document.querySelector(".question");
    gsap.fromTo(
      ".question",
      {
        top: "-35vh",
      },
      {
        top: "-135vh",
        scrollTrigger: {
          trigger: ".food-is",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
  });
  return (
    <>
      <div className="what-is-food">
        <div
          className="question-trigger"
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            className="question"
            style={{
              height: "100vh",
              width: "100%",
              position: "fixed",
              zIndex: 0,
              top: 0,
              // left: -100,

              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                marginLeft: (175 * window.innerWidth) / 1920,
                fontSize: (55 * window.innerHeight) / 1080,
                fontFamily: "TTtravels Next Bold",
                transform: "translate(0% ,0%)",
                left: "-100vh",
              }}
              className="question-text"
            >
              What is food
            </h1>
          </div>
        </div>
      </div>
      <div
        className="definition"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Definition />
      </div>
      <div
        className="reading-space"
        style={{
          width: "100%",
          height: "50vh",
        }}
      ></div>
    </>
  );
};
export default Question;
