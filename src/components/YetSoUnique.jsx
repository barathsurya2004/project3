import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const YetSoUnique = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".yet-so-unique-title",
      {
        top: "150%",
      },
      {
        top: "50%",
        scrollTrigger: {
          trigger: ".yet-so-unique-trigger",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    const yetSoUniqueTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".yet-so-unique-content-trigger",
        start: "top bottom",
        end: "top top",
        scrub: 0.1,
        toggleActions: "play none none reverse",
      },
      ease: "none",
    });
    yetSoUniqueTl
      .fromTo(
        ".yet-so-unique-content",
        {
          top: "150%",
        },
        {
          top: "50%",
          immediateRender: false,
          ease: "none",
        }
      )
      .fromTo(
        ".yet-so-unique-title",
        {
          top: "50%",
        },
        {
          top: "38%",
          immediateRender: false,
          ease: "none",
        },
        "<"
      );
    gsap.fromTo(
      ".yet-so-unique-title",
      {
        top: "38%",
      },
      {
        top: "-62%",
        scrollTrigger: {
          trigger: ".slider-place-holder",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".yet-so-unique-content",
      {
        top: "50%",
      },
      {
        top: "-50%",
        scrollTrigger: {
          trigger: ".slider-place-holder",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: true,
        },
        immediateRender: false,
        ease: "none",
      }
    );
  });
  return (
    <>
      <div
        className="yet-so-unique-trigger"
        style={{
          height: "100vh",
          width: "100%",
        }}
      ></div>
      {/* <div
        className="readingSpace"
        style={{
          height: "50vh",
          width: "100%",
        }}
      ></div> */}
      <div
        className="yet-so-unique-content-trigger"
        style={{
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div
        className="readingSpace"
        style={{
          height: "50vh",
          width: "100%",
        }}
      ></div>
      <div
        className="yet-so-unique-title"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "150%",
          left: "50%",
          transform: "translate(-50%, -52.5%)",
          width: "100%",
          height: "100vh",
        }}
      >
        <h2
          style={{
            fontFamily: "TTtravels Next Demibold",
            fontSize: 86 * (window.innerHeight / 1080),
            margin: 0,
            color: "#D3AD62",
          }}
        >
          “They are so close, yet
        </h2>
        <h1
          style={{
            fontFamily: "TTtravels Next Demibold",
            fontSize: 86 * (window.innerHeight / 1080),
            lineHeight: 1,
            margin: 0,
            color: "#D3AD62",
          }}
        >
          SO UNIQUE”
        </h1>
      </div>
      <div
        className="yet-so-unique-content"
        style={{
          position: "fixed",
          top: "150%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          width: 725 * (window.innerWidth / 1920),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 27 * (window.innerHeight / 1080),
            textAlign: "center",
            marginBottom: "5vh",
          }}
        >
          Cuisines are separated by many factors, yet here most boundaries are
          blurred. Both the people and the place share many similarities, but
          the food they eat is distinct.
        </p>
        <p
          style={{
            fontSize: 27 * (window.innerHeight / 1080),
            textAlign: "center",
            width: "80%",
            marginBottom: "5vh",
          }}
        >
          When food is considered a cultural identity, understanding these
          details and differences becomes more important than ever.
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: 51 * (window.innerHeight / 1080),
          }}
        >
          Let’s find out more!
        </p>
      </div>
    </>
  );
};

export default YetSoUnique;
