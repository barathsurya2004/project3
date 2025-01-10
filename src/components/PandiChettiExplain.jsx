import React, { useContext } from "react";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PandiChettiExplain = () => {
  const { cp } = useContext(Context);
  useGSAP(() => {
    gsap.fromTo(
      "#hover-display-heading-2",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      "#hover-display-text-2",
      {
        opacity: 0,
        y: -30,
      },
      {
        y: 0,

        opacity: 1,
        duration: 0.5,
      }
    );
  }, [cp]);
  const pandi = {
    title: "Pandi",
    text: "The Pandi Chetti are a community of Tamil merchants who have been trading with the indigenous people of the Andaman Islands for centuries. They are known for their expertise in the trade of coconuts and other goods.",
    region: "Andaman Islands",
  };
  const chetti = {
    title: "Chetti",
    text: "The Chetti are a community of Tamil merchants who have been trading with the indigenous people of the Andaman Islands for centuries. They are known for their expertise in the trade of coconuts and other goods.",
    region: "Andaman Islands",
  };
  if (cp === 1) {
    return (
      <div
        className="hover-display-1"
        style={{
          position: "fixed",
          bottom: (0 * window.innerHeight) / 1080,
          left: 80 * (window.innerWidth / 1920),
          zIndex: 1100,
          padding: (50 * window.innerWidth) / 1920,
        }}
      >
        <p
          style={{
            display: "inline-block",
            fontFamily: "TTtravels Next Bold",
            fontSize: (55 * window.innerWidth) / 1920,
            color: "#ffe8b8",
          }}
          id="hover-display-heading-2"
        >
          {chetti ? chetti.title : ""}
        </p>
        <div
          id="hover-display-line"
          style={{
            height: 1,
            margin: 0,
            width: "100%",
            backgroundColor: "#ffe8b8",
          }}
        ></div>
        <p
          id="hover-display-text-2"
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            width: (500 * window.innerWidth) / 1920,
            marginTop: (18.5 * window.innerWidth) / 1920,
          }}
        >
          {chetti ? chetti.text : ""}
        </p>
        <p
          id="hover-display-text-2"
          style={{
            color: "#af9f8c",
            fontSize: (21 * window.innerWidth) / 1920,
            marginTop: (15 * window.innerWidth) / 1920,
          }}
        >
          Region: {chetti ? chetti.region : ""}
        </p>
      </div>
    );
  } else if (cp === 2) {
    return (
      <div
        className="hover-display"
        style={{
          position: "fixed",
          bottom: (0 * window.innerHeight) / 1080,
          left: 80 * (window.innerWidth / 1920),
          zIndex: 1100,
          padding: (50 * window.innerWidth) / 1920,
        }}
      >
        <p
          style={{
            display: "inline-block",
            fontFamily: "TTtravels Next Bold",
            fontSize: (55 * window.innerWidth) / 1920,
            color: "#ffe8b8",
          }}
          id="hover-display-heading-2"
        >
          {pandi ? pandi.title : ""}
        </p>
        <div
          id="hover-display-line"
          style={{
            height: 1,
            margin: 0,
            width: "100%",
            backgroundColor: "#ffe8b8",
          }}
        ></div>
        <p
          id="hover-display-text-2"
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            width: (500 * window.innerWidth) / 1920,
            marginTop: (18.5 * window.innerWidth) / 1920,
          }}
        >
          {pandi ? pandi.text : ""}
        </p>
        <p
          id="hover-display-text-2"
          style={{
            color: "#af9f8c",
            fontSize: (21 * window.innerWidth) / 1920,
            marginTop: (15 * window.innerWidth) / 1920,
          }}
        >
          Region: {pandi ? pandi.region : ""}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default PandiChettiExplain;
