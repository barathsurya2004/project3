import {
  CameraControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";

const CardsCanvas = ({ children, onDoubleClick }) => {
  const ref = useRef();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      onDoubleClick={onDoubleClick}
    >
      <Canvas
        onPointerOut={() => {
          console.log(ref.current);
          // ref.current?.reset();
          if (ref.current) {
            ref.current.setAzimuthalAngle(0);
          }
        }}
      >
        <ambientLight intensity={1.1} />

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
        {children}
      </Canvas>
    </div>
  );
};

export default CardsCanvas;
