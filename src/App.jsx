import { useContext } from "react";
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
import BackGround from "./components/BackGround";
import ShallWe from "./components/ShallWe";

function App() {
  const { loading } = useContext(Context);
  return (
    <div
      className="loading-helper"
      style={{
        height: loading ? "100vh" : "100%",
        overflow: loading ? "hidden" : "auto",
      }}
    >
      {/* <BackGround /> */}
      <Loader />
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
        radius={725}
      />
      <Question />
      <FoodIs />
      <CultureDef />
      <Cuisines />
      {/* <YetSoUnique /> */}
      {/* <ShallWe /> */}
      {/* <div
        style={{
          height: "100vh",
          width: "100%",
          background: "blue",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      ></div> */}
      <Slider1 />
      <ThereIsMore />
      <Ingredients />
      <Procedure />
      <Characteristics />
      <SharePage />
      <FaceReact />
      <EndingPage />
    </div>
  );
}

export default App;
