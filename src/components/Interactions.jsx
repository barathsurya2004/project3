import { useContext } from "react";
import { Context } from "../context";

const Interactions = () => {
  const { questionSelected, modelsPosition } = useContext(Context);
  let temp = [
    "Is food the same for all",
    "Is food only for the body",
    "Do food have habits",
    "Is food geo-taggeed",
    "Does food influence life",
    "Does food have mood",
    "Whats a meal and a feast",
    "What is good food for you",
    "Where is your food from",
    "Does food have history",
  ];
  temp = [...temp, ...temp, ...temp];
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
            left: modelsPosition.qMark[0],
            top: modelsPosition.qMark[1],
          }}
        >
          <p
            style={{
              //   fontSize: "2.5rem",
              transform: "translate(-50%, -50%)",
              //   color: "white",
            }}
          >
            {questionSelected === null
              ? "Drag the wheel to explore"
              : temp[questionSelected]}
          </p>
        </div>
        <div
          className="globe-interactions"
          style={{
            position: "absolute",
            left: modelsPosition.globe[0],
            top: modelsPosition.globe[1],
          }}
        >
          <p
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              transform: "translate(-50%, -50%)",
              //   color: "white",
              width: "90%",
            }}
          >
            Hover, Click and Drag to explore the world through the lens of
            cuisines
          </p>
        </div>
      </div>
      <div
        className="testing"
        style={{
          position: "fixed",
          top: modelsPosition.globePandi[1],
          left: modelsPosition.globePandi[0],
        }}
      >
        <p>heheh</p>
      </div>
    </>
  );
};

export default Interactions;
