import { useContext, useEffect, useState } from "react";
import "./App.css";
import Characteristics from "./components/Characteristics";
import CircularAnimation from "./components/CircularAnimation";
import CircularText from "./components/CircularText";
import Cuisines from "./components/Cuisines";
import CultureDef from "./components/CultureDef";
import EndingPage from "./components/EndingPage";
import FaceReact from "./components/FaceReact";
import FoodIs from "./components/FoodIs";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Loader from "./components/Loader";
import Procedure from "./components/Procedure";
import Question from "./components/Question";
import SharePage from "./components/SharePage";
import Slider1 from "./components/Slider copy";
import ThereIsMore from "./components/ThereIsMore";
import ThreeJsCanvas from "./components/ThreeJsCanvas";
import YetSoUnique from "./components/YetSoUnique";
import { Context } from "./context";
import HoverDisplay from "./components/HoverDisplay";
import WhatIsFoodCanvas from "./components/WhatIsFoodCanvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Interactions from "./components/Interactions";
import FlowerFall from "./components/FlowerFall";

function App() {
  const { loading, light, flowerFall } = useContext(Context);
  const [pointer, setPointer] = useState([0, 0]);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPointer([e.clientX, e.clientY]);
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        setPointer([e.clientX, e.clientY]);
      });
    };
  });
  useEffect(() => {
    gsap.fromTo(
      ".grid-container-shader",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 5,
      }
    );
  }, []);

  return (
    <>
      {/* <BackGround /> */}
      {flowerFall && <FlowerFall />}
      {/* <FlowerFall /> */}
      <Loader />
      <div
        className="loading-helper"
        style={{
          height: loading ? "100vh" : "100%",
          overflowX: "hidden",
          overflowY: loading ? "hidden" : "scroll",
          scrollBehavior: "smooth",
          scrollSnapType: "y mandatory",

          maskImage: light
            ? `radial-gradient(circle at ${pointer[0] + window.scrollX}px ${
                pointer[1] + window.scrollY
              }px, rgba(0,0,0,1) 100px, rgba(0,0,0,0) 250px)`
            : "none",

          //
        }}
      >
        <Interactions />
        <ThreeJsCanvas />
        <Hero />
        <CircularAnimation
          words={[
            "Is food the same for all",
            "Is food only for the body",
            "Do food have habits",
            "Is food geo-taggeed",
            "Does food influence life",
            "Does food have mood",
            "Whats a meal and a feast",
            "What is good food for you",
            "Where is your food from",
            "Does food have history",
          ]}
        />
        <CircularText
          texts={[
            "Is food the same for all",
            "Is food only for the body",
            "Do food have habits",
            "Is food geo-taggeed",
            "Does food influence life",
            "Does food have mood",
            "Whats a meal and a feast",
            "What is good food for you",
            "Where is your food from",
            "Does food have history",
          ]}
          radius={680}
        />
        <WhatIsFoodCanvas />
        <Question />
        <FoodIs />
        <HoverDisplay />
        <CultureDef />
        <Cuisines />
        <YetSoUnique />
        <Slider1 />
        <ThereIsMore />
        <Ingredients />
        <Procedure />
        <Characteristics />
        <SharePage />
        <FaceReact />
        <EndingPage />
        <div
          id="graduall-change-variable"
          style={{
            display: "none",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
