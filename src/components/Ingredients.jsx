import { RedChillyModel } from "../../public/Models/Cards/new/Chetti/RedChilly";
import { SpicesModel } from "../../public/Models/Cards/new/Chetti/Spices";
import { TamarindModel } from "../../public/Models/Cards/new/Chetti/Tamarind";
import { CoconutModel } from "../../public/Models/Cards/new/Pandi/Coconut";
import { LentilsModel } from "../../public/Models/Cards/new/Pandi/Lentils";
import { PepperModel } from "../../public/Models/Cards/new/Pandi/Pepper";
import CardHolder from "./CardHolder";
import CardHolderC from "./CardsHolderC";
const Ingredients = () => {
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
          zIndex: 500,
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
              stroke="#d3ad62"
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
            color: "#D3AD62",
          }}
        >
          Raw Materials
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
              stroke="#d3ad62"
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
            <PepperModel />
            <CoconutModel />
            <LentilsModel />
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
          <CardHolderC>
            <RedChillyModel />
            <TamarindModel />
            <SpicesModel />
          </CardHolderC>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
