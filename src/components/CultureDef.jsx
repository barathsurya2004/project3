import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const CultureDef = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".culture-definition",
      {
        top: "100vh",
      },
      {
        top: "20vh",
        scrollTrigger: {
          trigger: ".culture-definition-trigger",
          start: "top 100%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".culture-definition",
      {
        top: "20vh",
      },
      {
        top: "5vh",
        scrollTrigger: {
          trigger: ".culture-definition-trigger",
          start: "top 60%",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: 0.1,
        },
        immediateRender: false,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".culture-definition",
      {
        top: "5vh",
      },
      {
        top: "-95vh",
        scrollTrigger: {
          trigger: ".cult-reading",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
          scrub: 0.1,
          // markers: true,
        },
        immediateRender: false,
        ease: "none",
      }
    );
  });
  return (
    <>
      <div
        className="culture-definition-trigger"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        className="cult-reading"
        style={{
          width: "100%",
          height: "50vh",
        }}
      ></div>
      <div
        className="culture-definition"
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          zIndex: 10,
          left: 0,
          top: "100vh",
          fontSize: (27 * window.innerHeight) / 1080,
        }}
      >
        <div
          className="culdef"
          style={{
            width: (788 * window.innerWidth) / 1920,
            marginLeft: "13.02vw",
            position: "absolute",
            top: "45%",
          }}
        >
          <p
            style={{
              color: "#F2D8A0",
              marginBottom: "2vh",
            }}
          >
            Food is more deeply integrated into our life and culture than we
            assume. Just like languages built with words, cuisines use
            ingredients as vocabulary. Indian cuisine, for example, relies on
            ingredients like cardamom, turmeric, and chilies. Preparation
            methods act like verbs, shaping the dish's essence. Think of the
            slow simmering of fragrant biryanis compared to the tandoori's fiery
            smoky perfection. Flavors and techniques are the grammar, creating a
            symphony on the plate. From the creamy kurmas to the Jamuns.
          </p>
          <p
            style={{
              color: "#F2D8A0",
            }}
          >
            A cuisine tells a story of regional traditions and cultural
            heritage, all through the language of food.
          </p>
        </div>
      </div>
    </>
  );
};

export default CultureDef;
