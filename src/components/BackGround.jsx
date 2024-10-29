import React from "react";
import "./BackGround.css";
import image from "../assets/temp/Artboard 7_1.png";
const BackGround = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default BackGround;
