import React from "react";
import "./BackGround.css";

const BackGround = () => {
  return (
    <div
      className="grainy-cont"
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0,
        filter: "url(#grainy)",
      }}
    >
      <svg>
        <defs>
          <filter id="grainy">
            {/* Turbulence filter for grain noise */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="2"
            >
              <animate
                attributeName="baseFrequency"
                from="0.5"
                to="0.7"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </feTurbulence>

            {/* Displacement map to create the grain effect */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                attributeName="scale"
                from="10"
                to="20"
                dur="1s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>
        </defs>

        {/* Apply filter to the entire container */}
      </svg>
    </div>
  );
};

export default BackGround;
