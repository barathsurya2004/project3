import { useState } from "react";
import { ChettiColorModel } from "../../public/Models/Cards/new/Chetti/ChettiColor";
import { IntricateModel } from "../../public/Models/Cards/new/Chetti/Intricate";
import { PandiColorModel } from "../../public/Models/Cards/new/Pandi/PandiColor";
import { SimpleModel } from "../../public/Models/Cards/new/Pandi/Simple";
import { ChettiColorCard } from "../../public/Models/ChettiCards/Color";
import { IntricateCard } from "../../public/Models/ChettiCards/Intricate";
import { PnadiColorCard } from "../../public/Models/PandiCards/Pandicolor";
import { SimpleCard } from "../../public/Models/PandiCards/Simple";
import CardHolder from "./CardHolder";
import CardHolderC from "./CardsHolderC";

const Characteristics = () => {
  const [rotateP, setRotateP] = useState(false);
  const [rotateC, setRotateC] = useState(false);
  return (
    <div
      className="characteristics-page"
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
            height: (70 * window.innerHeight) / 1080,
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
            margin: (25 * window.innerHeight) / 1080,
            color: "#facd74",
          }}
        >
          Charecteristics
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
          className="pandi-characteristics"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100vh",
          }}
          onPointerEnter={() => {
            setRotateP(true);
          }}
          onPointerLeave={() => {
            setRotateP(false);
          }}
        >
          <CardHolder idd={"char"} reg={"p"}>
            <PnadiColorCard rot={rotateP} />
            <SimpleCard rot={rotateP} />
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
          }}
          onPointerEnter={() => {
            setRotateC(true);
          }}
          onPointerLeave={() => {
            setRotateC(false);
          }}
        >
          <CardHolderC idd={"char"} reg={"c"}>
            <ChettiColorCard rot={rotateC} />
            <IntricateCard rot={rotateC} />
          </CardHolderC>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
