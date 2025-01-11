import { useContext, useEffect } from "react";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Interactions = () => {
  const {
    questionSelected,
    modelsPosition,
    setQuestionSelected,
    questionInteractions,
    globeInteractions,
    sliderInteractions,
    interaction,
  } = useContext(Context);
  useEffect(() => {
    if (globeInteractions) {
      gsap.to(".globe-interactions", { opacity: 0 });
    }
  }, [globeInteractions]);
  useEffect(() => {
    if (sliderInteractions) {
      gsap.to(".slider-interactions", { opacity: 0 });
    }
  }, [sliderInteractions]);
  useGSAP(() => {
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".drag-space-actual",
        start: "top top",
        onEnter: () => {
          gsap.set(".wheel-interactions", { opacity: 1, duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.set(".wheel-interactions", { opacity: 0 });
        },
      },
    });
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".wheel-burst",
        start: "top bottom",
        onEnter: () => {
          gsap.set(".wheel-interactions", { opacity: 0 });
        },
        onLeaveBack: () => {
          gsap.set(".wheel-interactions", { opacity: 1 });
        },
      },
    });
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".cuisines-of-the-world-trigger",
        start: "top top",
        end: "bottom 50%",
        // ,
        onEnter: () => {
          if (!globeInteractions) {
            gsap.to(".globe-interactions", { opacity: 1 });
          } else {
            return;
          }
        },
        onLeaveBack: () => {
          gsap.to(".globe-interactions", { opacity: 0 });
        },
        onLeave: () => {
          gsap.to(".globe-interactions", { opacity: 0 });
        },
      },
    });
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".shall-we-anim-scroll",
        start: "bottom bottom",
        onEnter: () => {
          gsap.to(".slider-interactions", { delay: 0.5, opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.to(".slider-interactions", { opacity: 0 });
        },
      },
    });
    gsap.to(".null", {
      scrollTrigger: {
        trigger: ".slider-stay-scroll",
        start: "bottom bottom",
        onEnter: () => {
          gsap.to(".slider-interactions", { opacity: 0 });
        },
      },
    });
  });
  let temp = [
    "Food seems universal, yet its meaning transforms across cultures, individuals, and emotions. Does its essence unite or differ depending on who experiences it?",
    "Beyond sustenance, food fuels memories, emotions, and traditions. Is it merely physical, or does it nourish the spirit and soul?",
    "Rituals and routines define how we interact with food. Are these habits natural, cultural, or a reflection of our individuality?",
    "A region's geography influences its flavors and ingredients. How much of a dish is defined by its place of origin?",
    "Food shapes traditions, relationships, and choices. How deeply does it intertwine with the way we live?",
    "Sweet, spicy, or savory‚ flavors evoke feelings. Does food mirror our emotions or create them?",
    "A feast celebrates abundance; a meal sustains. How do the lines blur between necessity and indulgence?",
    "Taste, health, or comfort‚Äîwhat defines ‚Äúgood food,‚Äù and is it the same for everyone?",
    "Food journeys from field to fork. How much do we know or value the origins of what we consume?",
    "Recipes carry stories of past generations. How does food preserve and pass down history?",
    "A single bite can transport you to another time. How does taste anchor us to the past?",
    "Taste is fleeting; tradition endures. How do the two coexist on our plates?",
    "From chopping to simmering, the process of cooking feels like a dance. Does rhythm shape the art of food?",
    "Is it the taste, the company, or the story behind it? What etches a meal in memory?",
    "Food reveals who we are and where we come from. How does it become a mirror of identity?",
    "Sweetness evokes joy; bitterness hints at challenge. How does taste transcend the physical and become emotional?",
    "Spices are the storytellers of cuisine. What hidden worlds do they unlock?",
    "Hunger fuels survival, but does it also signify desire, ambition, or deeper needs?",
    "The food we crave reflects trends, migrations, and evolution. How does it weave history into our present?",
    "Sharing, savoring, and celebrating meals‚Äîhow do they transcend necessity to become sacred traditions?",
    "Recipes are whispers of ancestral wisdom. What stories and lessons do they carry?",
    "The making, sharing, and savoring of food‚Äîdoes the journey matter more than the dish?",
    "Our choices define us. How much of our identity is shaped by what we consume?",
    "Food connects cultures, breaking barriers. Can it be the universal language?",
    "Cooking blends precision, intuition, and nostalgia. What defines its essence for you?",
    "A single spice or grain can transform a dish. How much influence does one element wield?",
    "Is it flavor, sentiment, or something unspoken that compels us to pass it on?",
    "Food can soothe and heal. How does comfort manifest in flavor?",
    "Regions boast their identities through cuisine. How does food map the essence of a location?",
    "Each recipe narrates journeys and experiences. How does cooking weave tales into every bite?",
  ];

  return (
    <>
      <div
        className="interactions-container"
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <div
          className="wheel-interactions"
          style={{
            position: "absolute",
            opacity: 0,
            left: modelsPosition.qMark[0],
            top: modelsPosition.qMark[1] + (50 * window.innerHeight) / 1080,
            width: (500 * window.innerWidth) / 1920,
          }}
        >
          <p
            style={{
              //   fontSize: "2.5rem",
              transform: "translate(-50%, -50%)",
              color: "#ffe8b8",
              fontSize: (27 * window.innerWidth) / 1920,
              fontFamily: "TTtravels Next Light",
              textAlign: "center",
              //   color: "white",
            }}
          >
            {!questionInteractions || questionSelected === null
              ? interaction === 1
                ? "Drag the wheel to select a question"
                : null
              : temp[questionSelected]}
          </p>
        </div>
        {!globeInteractions && interaction === 1 && (
          <div
            className="globe-interactions"
            style={{
              position: "absolute",
              opacity: 0,
              right: 177 * (window.innerWidth / 1920),
              top: modelsPosition.globe[1] + (150 * window.innerHeight) / 1080,
              width: (500 * window.innerWidth) / 1920,
            }}
          >
            <p
              style={{
                fontSize: (21 * window.innerWidth) / 1920,
                //   color: "white",
                width: "100%",
                color: "#ffe8b8",
                textAlign: "right",
                fontFamily: "TTtravels Next Light",
              }}
            >
              Hover, Click and Drag to explore the world through the lens of
              cuisines
            </p>
          </div>
        )}
        {!sliderInteractions && interaction === 1 && (
          <div
            className="slider-interactions"
            style={{
              position: "absolute",
              top: "90vh",
              left: "50%",
              opacity: 0,
              paddingLeft: (70 * window.innerWidth) / 1920,
            }}
          >
            <p
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
                width: "70%",
                transform: "translate(0%, -50%)",
                fontFamily: "TTtravels Next Light",
                color: "#ffe8b8",
              }}
            >
              Drag/Click the slider to dive deeper into each cuisine
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Interactions;
