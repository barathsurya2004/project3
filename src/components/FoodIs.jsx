import "./FoodIs.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const FoodIs = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".card-content",
      {
        bottom: "-200vh",
      },
      {
        bottom: 0,
        scrollTrigger: {
          trigger: ".food-is",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".love",
      {
        x: 0,
        opacity: 1,
      },
      {
        x: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-art",
          start: "top bottom",
          end: "top 90%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".art",
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-art",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".art",
      {
        x: 0,
        opacity: 1,
      },
      {
        x: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-adventure",
          start: "top bottom",
          end: "top 90%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".adventure",
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-adventure",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".adventure",
      {
        x: 0,
        opacity: 1,
      },
      {
        x: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-beyond-time",
          start: "top bottom",
          end: "top 90%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".beyond-time",
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-beyond-time",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".beyond-time",
      {
        x: 0,
        opacity: 1,
      },
      {
        x: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-culture",
          start: "top bottom",
          end: "top 90%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".culture",
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".food-is-culture",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
        ease: "none",
      }
    );
    gsap.fromTo(
      ".card-content",
      {
        bottom: 0,
      },
      {
        bottom: "15vh",
        scrollTrigger: {
          trigger: ".culture-definition-trigger",
          start: "top 60%",
          end: "top top",
          scrub: true,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".culture",
      {
        top: "50vh",
      },
      {
        top: "35vh",
        scrollTrigger: {
          trigger: ".culture-definition-trigger",
          start: "top 60%",
          end: "top top",
          scrub: true,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".is-word",
      {
        opacity: 1,
        x: 0,
      },
      {
        opacity: 0,
        x: -200,
        duration: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".foodxcuisine",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".x-word",
      {
        opacity: 0,
        x: 500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".foodxcuisine",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
        immediateRender: false,
      }
    );
    gsap.fromTo(
      ".cuisine",
      {
        opacity: 0,
        x: 500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".foodxcuisine",
          start: "top bottom",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
        // immediateRender: false,
      }
    );
    gsap.fromTo(
      ".cuisine",
      {
        top: "52.5vh",
      },
      {
        top: "-47.5vh",
        scrollTrigger: {
          trigger: ".foodxcuisine",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
        // immediateRender: false,
      }
    );
    gsap.fromTo(
      ".card-content",
      {
        bottom: "15vh",
      },
      {
        bottom: "115vh",
        scrollTrigger: {
          trigger: ".foodxcuisine",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".culture",
      {
        top: "35vh",
      },
      {
        top: "-65vh",
        scrollTrigger: {
          trigger: ".foodxcuisine",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
        immediateRender: false,
      }
    );
  });
  return (
    <>
      <div
        className="food-is"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="food-is-love"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="food-is-art"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="food-is-adventure"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="food-is-beyond-time"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="food-is-culture"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>

      <div className="card-trigger">
        <div className="card-content" style={{}}>
          <h1
            style={{
              color: "#D3AD62",
              fontFamily: "TTtravels Next Bold",
            }}
          >
            food{" "}
            <span
              className="is-word"
              style={{
                color: "#D3AD62",
                fontFamily: "TTtravels Next Bold",
                // marginLeft: "1vw",
              }}
            >
              is
            </span>
            <span
              className="x-word"
              style={{
                color: "#D3AD62",
                fontFamily: "",
                marginLeft: "-5rem",
                opacity: 0,
              }}
            >
              x
            </span>
          </h1>

          <div className="love">
            <h2
              style={{
                color: "#D3AD62",
                fontFamily: "TTtravels Next DemiBold Italic",
              }}
            >
              love
            </h2>
          </div>
          <div className="topic art">
            <h2
              style={{
                color: "#D3AD62",
                fontFamily: "TTtravels Next DemiBold Italic",
              }}
            >
              art
            </h2>
          </div>
          <div className="adventure topic">
            <h2
              style={{
                color: "#D3AD62",
                fontFamily: "TTtravels Next DemiBold Italic",
              }}
            >
              adventure
            </h2>
          </div>
          <div className="beyond-time topic">
            <h2
              style={{
                color: "#D3AD62",
                fontFamily: "TTtravels Next DemiBold Italic",
              }}
            >
              beyond
            </h2>
            <h2
              style={{
                color: "#D3AD62",
                fontFamily: "TTtravels Next DemiBold Italic",
              }}
            >
              time
            </h2>
          </div>
          <div className="culture topic">
            <h2
              style={{
                color: "#D3AD62",

                fontFamily: "TTtravels Next DemiBold Italic",
              }}
            >
              culture
            </h2>
          </div>
          <div className="cuisine topic">
            <h2
              style={{
                color: "#D3AD62",
                fontFamily: "TTtravels Next DemiBold Italic",

                top: "52.5vh",
              }}
            >
              = cuisine
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodIs;
