import { useGSAP } from "@gsap/react";
import {
  CameraControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import CardRotateHelp from "./CardRotateHelp";
import { Bloom, EffectComposer, SMAA } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";
import { Context } from "../context";

const CardsCanvas = ({ children, onDoubleClick, onClick }) => {
  const ref = useRef();
  const { changed } = useContext(Context);
  useEffect(() => {
    ref.current?.setAzimuthalAngle(0);
  }, [changed]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      onDoubleClick={() => {
        onDoubleClick();
        ref.current?.setAzimuthalAngle(0);
      }}
      onClick={onClick}
    >
      <Canvas
        onPointerOut={() => {
          if (ref.current) {
            ref.current?.setAzimuthalAngle(0);
          }
        }}
      >
        <ambientLight intensity={1.1} />
        <Suspense fallback={null}>
          <EffectComposer multisampling={0}>
            {/* <SMAA /> */}
            <Bloom
              intensity={1.0} // The bloom intensity.
              kernelSize={KernelSize.LARGE} // blur kernel size
              luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
              mipmapBlur={false} // Enables or disables mipmap blur.
              resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
              resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
            />
          </EffectComposer>
        </Suspense>

        <OrbitControls
          ref={ref}
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        {/* <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={150} /> */}
        <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={1.5} />
        {/* <CardRotateHelp changed={changed}>{children}</CardRotateHelp>
         */}
        {children}
      </Canvas>
    </div>
  );
};

export default CardsCanvas;
