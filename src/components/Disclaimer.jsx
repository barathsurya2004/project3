import { useContext, useEffect } from "react";
import close from "../assets/icons/close contact.svg";
import { Context } from "../context";
import gsap from "gsap";

const Disclaimer = () => {
  const { mode, setMode } = useContext(Context);
  useEffect(() => {
    if (mode === "Disclaimer") {
      gsap.fromTo(
        ".dis",
        {
          y: "100vh",
        },
        {
          y: 0,
          duration: 0.5,
          ease: "power4.inOut",
        }
      );
    } else {
      gsap.to(".dis", {
        y: "100vh",
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [mode]);
  return (
    <div
      className="dis"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        zIndex: 500,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: "rgba(0,0,0,0)",
        }}
        onClick={() => {
          setMode(null);
        }}
      />
      <div
        className="diclaimer-container"
        style={{
          width: 1260 * (window.innerWidth / 1920),
          height: 624 * (window.innerHeight / 1080),
          background:
            "linear-gradient(0deg, rgba(89,71,49,0.5) 0%, rgba(89,71,49,0.3) 100%)",
          //   opacity: 0.5,
          borderRadius: 40 * (window.innerWidth / 1280),
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: "2%",
          paddingBottom: 0,
          alignItems: "center",
          position: "relative",
          border: "5px solid #facd74",
        }}
      >
        <p
          style={{
            width: "80%",
            textAlign: "center",
            color: "#DDD4C7",
            fontSize: 21 * (window.innerWidth / 1920),
          }}
        >
          The information provided on this website is for educational and
          informational purposes only. I, Sudhesh Venkatachalam, am the sole
          author and creator of this content. While every effort has been made
          to ensure the accuracy of the information, I do not guarantee its
          completeness, reliability, or suitability.
          <br />
          <br /> The content is based on my knowledge and experience and may not
          reflect the most current research or trends. Users are encouraged to
          verify any information and consult relevant professionals before
          making any decisions based on the content of this website.
          <br />
          <br /> Assets used on this website have been sourced from poly.pizza,
          freepik.com, and commons.wikimedia.org, and I gratefully acknowledge
          their contributions. Additionally, I utilized OpenAI's ChatGPT as a
          supportive tool for refining content and as aid during the
          development process.
          <br />
          <br />I disclaim any liability for any loss or damage arising from the
          use of this information.
        </p>
        <div
          className="close-button"
          style={{
            position: "absolute",
            bottom: "2%",
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={close}
            alt="close"
            onClick={() => {
              setMode(null);
            }}
            style={{
              width: 48.78 * (window.innerWidth / 1920),
              height: 62.69 * (window.innerWidth / 1920),
              margin: 0,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
