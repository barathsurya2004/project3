import Lottie from "lottie-react";
import animdata from "../assets/lotties/nav bar.json";
import { useRef } from "react";

const NavBar = () => {
  const ref = useRef();
  return (
    <div>
      <Lottie
        animationData={animdata}
        lottieRef={ref}
        autoPlay={false}
        loop={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height: 200,
        }}
      />
    </div>
  );
};

export default NavBar;
