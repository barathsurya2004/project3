import { useGSAP } from "@gsap/react";

import { ChilliCard } from "../../public/Models/ChettiCards/Chilli";
import { SpicesCard } from "../../public/Models/ChettiCards/Spices";
import { TamarindCard } from "../../public/Models/ChettiCards/Tamarind";
import { CoconutCard } from "../../public/Models/PandiCards/Coconut";
import { LentilsCard } from "../../public/Models/PandiCards/Lentils";
import { PepperCard } from "../../public/Models/PandiCards/Pepper";
import CardHolder from "./CardHolder";
import CardHolderC from "./CardsHolderC";
import gsap from "gsap";
import { Context } from "../context";
import { useContext, useEffect } from "react";
const Ingredients = () => {
  const { cardInteractions } = useContext(Context);
  useEffect(() => {
    console.log(cardInteractions);
    if (cardInteractions) {
      const tl = gsap.timeline();
      tl.to(".instructions-for-collecting", {
        opacity: 0,
        duration: 0.7,
      }).to(".instructions-for-collecting", {
        height: 0,
      });
    }
  }, [cardInteractions]);
  return (
    <div
      className="ingredients-page"
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            margin: 0,
            width: "100%",
            height: (100 * window.innerHeight) / 1080,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960.45 3000"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <path
              fill="none"
              stroke="#facd74"
              strokeWidth="5"
              d="M480.225,0 L480.225,3392.025"
            />
          </svg>
        </div>
        <h1
          style={{
            fontSize: (68 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next DemiBold",
            textAlign: "center",
            margin: (20 * window.innerHeight) / 1080,
            color: "#facd74",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Raw Materials
          <span
            className="instructions-for-collecting"
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              color: "#ffe8b8",
              marginTop: (27 * window.innerHeight) / 1080,
              height: (50 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next Light",
            }}
          >
            Double Click any card to collect the it
          </span>
        </h1>
        <div
          style={{
            margin: 0,
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <svg
            id="interactive-line"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960.45 3000"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <path
              fill="none"
              stroke="#facd74"
              strokeWidth="5"
              d="M480.225,0 L480.225,3392.025"
            />
          </svg>
        </div>
        <div
          className="pandi-ingredients"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100vh",
            paddingTop: "10vh",
          }}
        >
          <CardHolder idd={"Ing"}>
            <PepperCard />
            <CoconutCard />
            <LentilsCard />
          </CardHolder>
        </div>
        <div
          className="chetti-ingredients"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100vh",
            paddingTop: "10vh",
          }}
        >
          <CardHolderC idd={"Ing"}>
            <ChilliCard />
            <TamarindCard />
            <SpicesCard />
          </CardHolderC>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
