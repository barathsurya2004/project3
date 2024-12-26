import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const CardsCanvas = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      onDoubleClick={() => {
        console.log("double click");
      }}
    >
      <Canvas>
        <ambientLight intensity={1.1} />
        <OrbitControls enableZoom={false} />
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
