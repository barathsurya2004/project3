import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context.jsx";
import Layout from "./Layout.jsx";
import { OrthographicCamera } from "@react-three/drei";
import Grid from "./components/Grid.jsx";
import Grain from "./components/Grain.jsx";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <div
        className="grain-container"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10000,
          opacity: 0.075,
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
        }}
      >
        <Canvas
          style={{
            height: "100vh",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          <OrthographicCamera makeDefault zoom={50} position={[0, 0, 10]} />
          <ambientLight intensity={100} />
          <Grid />
        </Canvas>
      </div>
      <Layout />
    </ContextProvider>
  </StrictMode>
);
