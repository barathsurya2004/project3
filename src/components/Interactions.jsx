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
            {temp[questionSelected]}
          </p>
        </div>
      </div>
    </>
  );
};

export default Interactions;
