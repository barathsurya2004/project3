import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import SvgMorphAnimation from "./SvgMorphAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import data from "../assets/json/globe.json";
const HoverDisplay = () => {
  const { down, setDown, meshSelected } = useContext(Context);
  if (!meshSelected) return null;
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    const current = data.find((item) => item.id === meshSelected);
    setCurrent(current);
    console.log(current);
  }, [meshSelected]);
  useGSAP(() => {
    gsap.fromTo(
      "#hover-display-heading",
      {
        opacity: 0,
        y: 20,
      },
      {
        delay: 0.7,
        opacity: 1,
        y: 0,
        duration: 0.2,
      }
    );
    gsap.fromTo(
      "#hover-display-text",
      {
        opacity: 0,
        y: -20,
      },
      {
        y: 0,
        delay: 0.7,
        opacity: 1,
        duration: 0.2,
      }
    );
  });
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 200);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (down)
    return (
      <>
        {showAnimation && <SvgMorphAnimation />}
        <div
          className="hover-display"
          style={{
            position: "fixed",
            bottom: (0 * window.innerHeight) / 1080,
            left: 80 * (window.innerWidth / 1920),
            zIndex: 1000,
            padding: (50 * window.innerWidth) / 1920,
          }}
        >
          <p
            style={{
              display: "inline-block",
              fontFamily: "TTtravels Next Bold",
              fontSize: (55 * window.innerWidth) / 1920,
              color: "#f2d8a0",
            }}
            id="hover-display-heading"
          >
            {current ? current.title : ""}
          </p>
          <div
            id="hover-display-line"
            style={{
              height: 1,
              margin: 0,
            }}
          ></div>
          <p
            id="hover-display-text"
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              width: (500 * window.innerWidth) / 1920,
              marginTop: (18.5 * window.innerWidth) / 1920,
            }}
          >
            {current ? current.text : ""}
          </p>
          <p
            id="hover-display-text"
            style={{
              color: "#af9f8c",
              fontSize: (21 * window.innerWidth) / 1920,
              marginTop: (23 * window.innerWidth) / 1920,
            }}
          >
            Region: {current ? current.region : ""}
          </p>
        </div>
      </>
    );
  else {
    return (
      <>
        {showAnimation && <SvgMorphAnimation />}
        <div
          className="hover-display"
          style={{
            position: "fixed",
            top: (129 * window.innerHeight) / 1080,
            right: 46 * (window.innerWidth / 1920),
            zIndex: 1000,
            padding: (50 * window.innerWidth) / 1920,
          }}
        >
          <h1
            style={{
              display: "inline-block",
              fontFamily: "TTtravels Next Bold",
              fontSize: (55 * window.innerWidth) / 1920,
              color: "#f2d8a0",
            }}
            id="hover-display-heading"
          >
            {current ? current.title : " "}
          </h1>
          <div
            id="hover-display-line"
            style={{
              height: 1,
              margin: 0,
            }}
          ></div>
          <p
            id="hover-display-text"
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              width: (500 * window.innerWidth) / 1920,
              marginTop: (18.5 * window.innerWidth) / 1920,
            }}
          >
            {current ? current.text : " "}
          </p>
          <p
            id="hover-display-text"
            style={{
              color: "#af9f8c",
              fontSize: (21 * window.innerWidth) / 1920,
              marginTop: (23 * window.innerWidth) / 1920,
            }}
          >
            Region:{current ? current.region : ""}
          </p>
        </div>
      </>
    );
  }
};

export default HoverDisplay;
