import { Canvas } from "@react-three/fiber";
import image from "../assets/icons/thunder.svg";
import { OrthographicCamera } from "@react-three/drei";
import { Suspense } from "react";
import "./MobileCont.css";
import { Face2 } from "../../public/Models/Face2";
const MobileLoader = () => {
  return (
    <div
      className="mobile-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <img
          // src={ref}
          alt=""
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />
      </div>
      <div
        className="face-canvas"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          zIndex: 5,
        }}
      >
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight intensity={3} position={[10, 10, 10]} />
          <OrthographicCamera makeDefault position={[0, -10, 20]} zoom={20} />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={0.4} /> */}
          <Suspense fallback={null}>
            {/* <FaceModel /> */}
            <Face2 />
          </Suspense>
        </Canvas>
      </div>
      <div
        className="mobile-container"
        style={{
          position: "absolute",
          top: "7.5%",
          left: 0,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "0 20%",
          width: "100%",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontFamily: "TTtravels Next DemiBold",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Thank you for visiting!
        </h1>
        <div
          style={{
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "Filson Pro Regular",
              textAlign: "center",
            }}
          >
            This website is designed for Leisure Viewing on Larger Screens. If
            you have a laptop, desktop, or external monitor nearby, grab them to
            completely experience and interact with this website.
          </p>
          <p
            style={{
              fontFamily: "Filson Pro Regular",
              textAlign: "center",
            }}
          >
            If you don't have these devices nearby and want to visit later,
            thank you again!
          </p>
          <p
            style={{
              fontFamily: "Filson Pro Regular",
              textAlign: "center",
            }}
          >
            Click here to copy the link to this website and save it for later.
          </p>
        </div>
      </div>
      <div
        className="footer"
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <p
          style={{
            fontFamily: "Filson Pro Regular",
            textAlign: "center",
          }}
        >
          © 2024 Sudhesh Venkatachalam | Disclaimer
        </p>
        <hr className="footer-line" />
        <div
          className="footer-content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Filson Pro Regular",
            }}
          >
            Designed by Sudhesh Venkatachalam{" "}
          </p>
          <img
            src={image}
            style={{
              margin: "0 10px",
            }}
            alt=""
          />
          <p
            style={{
              fontFamily: "Filson Pro Regular",
            }}
          >
            Developed by Barath Surya
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileLoader;
