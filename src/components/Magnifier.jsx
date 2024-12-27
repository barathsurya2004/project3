import React, { useRef, useEffect, useState } from "react";
// import "./Magnifier.css"; // Optional CSS for styling

const Magnifier = ({ zoomLevel = 150, magnifierSize = 150 }) => {
  const magnifierRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      const magnifier = magnifierRef.current;

      if (magnifier) {
        magnifier.style.left = `${clientX - magnifierSize / 2}px`;
        magnifier.style.top = `${clientY - magnifierSize / 2}px`;
        magnifier.style.backgroundPosition = `-${
          clientX * zoomLevel - magnifierSize / 2
        }px -${clientY * zoomLevel - magnifierSize / 2}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [zoomLevel, magnifierSize]);

  return (
    <div
      ref={magnifierRef}
      className="magnifier"
      style={{
        width: magnifierSize,
        height: magnifierSize,
        borderRadius: "50%",
        position: "absolute",
        pointerEvents: "none",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        border: "1px solid white",
        background: `url(${window.location.href}) no-repeat`,
        backgroundSize: `${window.innerWidth * zoomLevel}px ${
          window.innerHeight * zoomLevel
        }px`,
      }}
    ></div>
  );
};

export default Magnifier;
