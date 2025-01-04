import "./Definition.css";
import image from "../assets/icons/speaker.svg";
const Definition = () => {
  return (
    <>
      <div className="definition-container" style={{}}>
        <audio id="audio" controlsList="nodownload">
          <div className="hdib" fallback>
            <p>your browser does'nt support audio</p>
          </div>
          <source type="audio/mpeg" src="/Sounds/ukfolksFood.mp3" />
        </audio>
        <h1 style={{}}>
          <img
            src={image}
            alt=""
            style={{
              cursor: "pointer",
              height: (0.8 * (50 * window.innerHeight)) / 1080,
              width: (0.8 * (55 * window.innerHeight)) / 1080,
              // marginLeft: "-0.5vh",
              // transform: "scale(0.9)",
              // backgroundColor: "white",
              transform: "translate(-150%, 50%)",
            }}
            onClick={() => {
              document.getElementById("audio").play();
            }}
          />
          <span
            style={{
              fontSize: "5.0925vh",
              fontFamily: "TTtravels Next Bold",
              position: "relative",
              margin: 0,
            }}
          >
            food
          </span>
        </h1>
        <p>/fu:d/</p>
        <p>noun</p>
        <p>
          any nutritious substance that people or animals eat or drink or that
          plants absorb in order to maintain life and growth.
        </p>
        <p>
          Food fuels both body and imagination. Simple meals nourish, while
          feasts unite. Across cultures, food brings joy, celebrates milestones,
          and connects us. From a juicy peach to steaming dumplings, food is a
          journey, comfort, and universal language.
        </p>
        <p
          style={{
            marginTop: "4vh",
          }}
        >
          Food is a lot of things...
        </p>
      </div>
    </>
  );
};

export default Definition;
