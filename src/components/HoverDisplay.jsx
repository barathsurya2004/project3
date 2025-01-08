import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context";
import SvgMorphAnimation from "./SvgMorphAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import data from "../assets/json/globe.json";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const HoverDisplay = () => {
  const { down, meshSelected, meshShowRestrict } = useContext(Context);
  if (meshSelected === null) return null;
  if (!meshSelected) return null;
  const [current, setCurrent] = useState(null);
  const Indianref = useRef(false);
  const TNref = useRef(false);
  useEffect(() => {
    if (meshShowRestrict.current === 1) {
      Indianref.current = true;
    } else if (meshShowRestrict.current === 2) {
      Indianref.current = true;
      TNref.current = true;
    }
  }, [meshShowRestrict]);

  useEffect(() => {
    const current = data.find((item) => item.id === meshSelected.name);
    setCurrent(current);
    console.log(current);
  }, [meshSelected]);

  const restrictHandler = () => {
    if (Indianref.current) {
      if (TNref.current) {
        if (current?.TN == "true") {
          return true;
        } else {
          return false;
        }
      } else {
        if (current?.Indian == "true") {
          return true;
        } else {
          return false;
        }
      }
    }
    return true;
  };
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

    return () => clearTimeout(timer);
  }, []);

  if (down && restrictHandler())
    return (
      <>
        {showAnimation && <SvgMorphAnimation />}
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
              marginTop: (15 * window.innerWidth) / 1920,
            }}
          >
            Region: {current ? current.region : ""}
          </p>
        </div>
      </>
    );
  else if (!down) {
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
              color: "#ffe8b8",
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
              marginTop: (15 * window.innerWidth) / 1920,
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
