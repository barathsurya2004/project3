import React, { useState, useEffect, useRef } from "react";
import App from "./App";
import MobileLoader from "./components/MobileLoader";
import NavBar from "./components/NavBar";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import Grain from "./components/Grain";
import Grid from "./Grid";

const Layout = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (prevWidth.current < 1024 && windowSize.width >= 1024) {
      window.location.reload();
    }
    prevWidth.current = windowSize.width;
  }, [windowSize.width]);

  if (windowSize.width < 1024) {
    return <MobileLoader />;
  }
  return (
    <div>
      {/* <NavBar /> */}
      <div
        className="grain-container"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1010,
          opacity: 0.15,
          pointerEvents: "none",
        }}
      >
        <Canvas
          style={{
            pointerEvents: "none",
            height: "100vh",
            width: "100vw",
          }}
        >
          <OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]} />

          <Grain />
        </Canvas>
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          // background:
          // "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
          userSelect: "none",
          // opacity: 0.5,
        }}
      >
        <Canvas
          style={{
            height: "100vh",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          {/* <OrbitControls /> */}
          <OrthographicCamera makeDefault zoom={50} position={[-0, 0, 10]} />
          <ambientLight intensity={100} />
          <Grid />
        </Canvas>
      </div>
      <App />
    </div>
  );
};

export default Layout;
