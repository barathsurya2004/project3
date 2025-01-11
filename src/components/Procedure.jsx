import { useContext, useEffect, useState } from "react";
import { MortarModel } from "../../public/Models/Cards/new/Chetti/Mortor";
import { SlowModel } from "../../public/Models/Cards/new/Chetti/Slow";
import { BlenderModel } from "../../public/Models/Cards/new/Pandi/Blender";
import { FastModel } from "../../public/Models/Cards/new/Pandi/Fast";
import { MortarCard } from "../../public/Models/ChettiCards/Mortar";
import { SlowCard } from "../../public/Models/ChettiCards/Slow";
import { BlenderCard } from "../../public/Models/PandiCards/Blender";
import { FastCard } from "../../public/Models/PandiCards/Fast";
import CardHolder from "./CardHolder";
import CardHolderC from "./CardsHolderC";
import { Context } from "../context";

const Procedure = () => {
  const [rotateP, setRotateP] = useState(false);
  const [rotateC, setRotateC] = useState(false);
  const { changed, setChanged } = useContext(Context);
  useEffect(() => {
    console.log(changed);
    if (changed) {
      setRotateC(false);
      setRotateP(false);
    }
  }, [changed]);
  return (
    <div
      className="procedure-page"
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
          Procedure
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
          className="pandi-procedure"
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
          <CardHolder
            idd={"proc"}
            reg={"p"}
            changed={changed}
            setChanged={setChanged}
          >
            <BlenderCard rot={rotateP} />
            <FastCard rot={rotateP} />
          </CardHolder>
        </div>
        <div
          className="chetti-procedure"
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
          <CardHolderC
            idd={"proc"}
            reg={"c"}
            changed={changed}
            setChanged={setChanged}
          >
            <MortarCard rot={rotateC} />
            <SlowCard rot={rotateC} />
          </CardHolderC>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
