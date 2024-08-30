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
import Procedure from "./components/Procedure";
import Question from "./components/Question";
import SharePage from "./components/SharePage";
import Slider from "./components/Slider";
import ThereIsMore from "./components/ThereIsMore";
import ThreeJsCanvas from "./components/ThreeJsCanvas";
import YetSoUnique from "./components/YetSoUnique";

function App() {
  return (
    <div className="loading-helper">
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
      <Slider />
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
