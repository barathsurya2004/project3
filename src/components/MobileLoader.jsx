import { Canvas } from "@react-three/fiber";
import image from "../assets/icons/thunder.svg";
import { OrthographicCamera } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import "./MobileCont.css";
import { Face2 } from "../../public/Models/Face2";
import { useDeviceOrientation } from "../deviceOrientation";
const MobileLoader = () => {
  const { orientation, requestAccess, revokeAccess, error } =
    useDeviceOrientation();
  useEffect(() => {
    requestAccess().then((granted) => {
      if (!granted) {
        alert("Please enable device orientation access to continue");
      }
    });
    return () => {
      revokeAccess();
    };
  }, []);
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
        <Canvas
          style={{
            height: "100vh",
            width: "100%",
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight intensity={3} position={[10, 10, 10]} />
          <OrthographicCamera makeDefault position={[0, -10, 20]} zoom={20} />
          {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={0.4} /> */}
          <Suspense fallback={null}>
            {/* <FaceModel /> */}
            <Face2 scale={Math.min(1.2, (4 * window.innerWidth) / 1920)} />
          </Suspense>
        </Canvas>
      </div>
      <div
        className="mobile-container"
        style={{
          position: "absolute",
          // top: "7.5%",
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
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateY(75%)",
          }}
        >
          <h1
            style={{
              fontFamily: "TTtravels Next DemiBold",
              textAlign: "center",
              whiteSpace: "nowrap",
              marginBottom: (30 * window.innerHeight) / 1080,
            }}
          >
            Bigger screen,
            <br /> better experience.
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
              This website is like a movie, better in a bigger screen. Grab a
              larger screen, like a laptop or desktop. That way, you can fully
              explore all its features we've crafted for you and enjoy an
              interactive experience.
              <br />
              <br />
              If now isn’t the right time, no problem! Click here to copy the
              link and save it for later viewing. or save a reminder here!
            </p>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={{
          position: "absolute",
          width: "100%",
          paddingLeft: (85 * window.innerWidth) / 1920,
          paddingRight: (85 * window.innerWidth) / 1920,
        }}
      >
        <p
          style={{
            fontFamily: "Filson Pro Regular",
            textAlign: "center",
            margin: 10,
          }}
        >
          © 2024 Sudhesh Venkatachalam | Disclaimer
        </p>
        <hr
          className="footer-line"
          style={{
            margin: 0,
            // width: "100%",
            height: 1,
            backgroundColor: "#AF9F8C",
            border: "none",
          }}
        />
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
              margin: 10,
            }}
          >
            Designed by Sudhesh Venkatachalam{" "}
          </p>
          <img src={image} style={{}} alt="" />
          <p
            style={{
              fontFamily: "Filson Pro Regular",
              margin: 10,
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
