import { Canvas } from "@react-three/fiber";
import { HeartModel } from "../../public/Models/Heart";
import { PerspectiveCamera } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { ArtModel } from "../../public/Models/Art";
import { MapModel } from "../../public/Models/Treasure_map";
const ThreeJsCanvas = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 100,
      }}
    >
      <Canvas>
        <Perf position="top-left" />
        <PerspectiveCamera makeDefault zoom={1.1} position={[-0.2, 0, 10]} />
        <directionalLight intensity={2} position={[2.5, 0, 10]} />
        <HeartModel position={[3, 0, 0]} />
        <ArtModel position={[3, 0, 0]} />
        <MapModel position={[3, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeJsCanvas;
