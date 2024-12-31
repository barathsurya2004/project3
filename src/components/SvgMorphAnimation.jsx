import React, { useEffect, useRef, useContext, useState } from "react";
import { gsap } from "gsap";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const SvgMorphAnimation = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const { meshSelected, pointer, down, modelsPosition, chettiVis, pandiVis } =
    useContext(Context);
  const newLineRef = useRef(null);

  const [posRef, setPosRef] = useState({ left: 0, right: 0, top: 0 });

  useEffect(() => {
    const lineStart = document.getElementById("hover-display-line");
    const rect = lineStart.getBoundingClientRect();
    setPosRef({ left: rect.left, right: rect.right, top: rect.top });
  }, [meshSelected, down]);

  const circleRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const rect = container.getBoundingClientRect();
    let cursorX = pointer[0] - rect.left;
    let cursorY = pointer[1] - rect.top;
    const heading = document.getElementById("hover-display-heading");
    const liness = document.getElementById("hover-display-line");
    if (chettiVis.current) {
      cursorX = modelsPosition.globeChetti[0];
      cursorY = modelsPosition.globeChetti[1];
    }
    if (pandiVis.current) {
      cursorX = modelsPosition.globePandi[0];
      cursorY = modelsPosition.globePandi[1];
    }
    const upPosition = {
      x: liness.getBoundingClientRect().left,
      y: liness.getBoundingClientRect().top,
    };
    const downPosition = {
      x: liness.getBoundingClientRect().right,
      y: liness.getBoundingClientRect().top,
    };
    const selectedPosition = down ? downPosition : upPosition;
    const length = Math.hypot(
      selectedPosition.x - cursorX,
      selectedPosition.y - cursorY
    );
    const angle =
      Math.atan2(selectedPosition.y - cursorY, selectedPosition.x - cursorX) *
      (180 / Math.PI);

    gsap.set(line, {
      rotation: angle,
      x: cursorX,
      y: cursorY,
      transformOrigin: "0% 50%",
    });
    gsap.set(circleRef.current, {
      x: cursorX - circleRef.current.offsetWidth / 2,
      y: cursorY - circleRef.current.offsetHeight / 2,
    });
    const tl = gsap.timeline();
    tl.fromTo(
      circleRef.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.25,
      }
    )
      .fromTo(
        line,
        {
          width: 0,
        },
        {
          width: length,
          duration: 0.25,
          ease: "none",
        }
      )
      .fromTo(
        newLineRef.current,
        {
          width: 0,
        },
        {
          width: down
            ? Math.max((500 * window.innerWidth) / 1920, heading.offsetWidth)
            : heading.offsetWidth,
          duration: 0.25,
          ease: "none",
        }
      );
  }, [meshSelected, down]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        position: "fixed",
        overflow: "hidden",
        zIndex: 1100,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        ref={lineRef}
        style={{
          height: 2 * (window.innerWidth / 1920),
          backgroundColor: "#f2d8a0",
          position: "absolute",
          transformOrigin: "left center",
        }}
      ></div>
      <div
        className="hori-line"
        ref={newLineRef}
        style={{
          top: posRef.top,
          left: down ? posRef.right : posRef.left,
          height: 2 * (window.innerWidth / 1920),
          transform: `rotate(${down ? 180 : 0}deg)`,
          backgroundColor: "#f2d8a0",
          position: "absolute",
          transformOrigin: "left center",
          width: 0,
        }}
      ></div>

      <div
        className="circle-hover"
        ref={circleRef}
        style={{
          width: 15 * (window.innerWidth / 1920),
          height: 15 * (window.innerWidth / 1920),
          borderRadius: "50%",
          backgroundColor: "#f2d8a0",
          transform: "translate(-100%, -100%)",
        }}
      ></div>
    </div>
  );
};

export default SvgMorphAnimation;
