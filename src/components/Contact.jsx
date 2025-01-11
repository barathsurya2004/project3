import { useContext, useEffect } from "react";
import close from "../assets/icons/close contact.svg";
import { Context } from "../context";
import mail from "../assets/icons/mail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import website from "../assets/icons/web_icon.svg";
import gsap from "gsap";
const Contact = () => {
  const { mode, setMode, setWinkState } = useContext(Context);
  useEffect(() => {
    if (mode === "Contact") {
      gsap.fromTo(
        ".contact-container",
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
      gsap.to(".contact-container", {
        y: "100vh",
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [mode]);
  return (
    <div
      className="contact-container"
      style={{
        position: "relative",
        zIndex: 100,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        onClick={() => {
          setMode(null);
          setWinkState(false);
        }}
      />
      <div
        style={{
          borderRadius: (40 * window.innerWidth) / 1920,
          background:
            " linear-gradient(0deg, rgba(89,71,49,0.5) 0%, rgba(89,71,49,0.3) 100%)",
          border: "solid 5px #facd74",
          width: (1494.583 * window.innerWidth) / 1920,
          height: (690 * window.innerHeight) / 1080,
          alignItems: "end",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 0,
          transform: "translateY(-5%)",
        }}
      >
        <div
          className="close-button"
          style={{
            position: "absolute",
            top: 57 * (window.innerHeight / 1080),
            right: 47 * (window.innerWidth / 1920),
            width: (50 * window.innerWidth) / 1920,
            height: (50 * window.innerWidth) / 1920,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            setMode(null);
          }}
        >
          <img src={close} alt="close" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "65%",
            height: "100%",
            padding: "20px",
          }}
        >
          <h2
            style={{
              fontSize: (55 * window.innerWidth) / 1920,
              fontFamily: "TTtravels Next Bold",
              color: "#ffe8b8",
              margin: 15,
            }}
          >
            Drop me a hello!
          </h2>
          <div>
            <p
              className="contact-email"
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
                color: "#DDD4C7",
                margin: 25,
                cursor: "pointer",
                textDecoration: "underline 0.1vh solid rgba(175, 159, 140,0)",
              }}
              onClick={() => {
                window.open("mailto:sudheshimself@gmail.com");
              }}
              onPointerEnter={() => {
                gsap.to(".contact-email", {
                  textDecoration: "underline 0.1vh solid #DDD4C7",
                  duration: 0.2,
                });
              }}
              onPointerLeave={() => {
                gsap.to(".contact-email", {
                  textDecoration: "underline 0.1vh solid rgba(175, 159, 140,0)",
                  duration: 0.2,
                });
              }}
            >
              <img
                src={mail}
                alt=""
                style={{
                  width: 40 * (window.innerWidth / 1920),
                  transform: "translateY(25%) translateX(-50%)",
                }}
              />
              sudheshimself@gmail.com
            </p>
            <p
              className="contact-linkedin"
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
                color: "#DDD4C7",
                margin: 25,
                cursor: "pointer",
                textDecoration: "underline 0.1vh solid rgba(175, 159, 140,0)",
              }}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/sudhesh-venkatachalam-492b66205/"
                );
              }}
              onPointerEnter={() => {
                gsap.to(".contact-linkedin", {
                  textDecoration: "underline 0.1vh solid #DDD4C7",
                  duration: 0.2,
                });
              }}
              onPointerLeave={() => {
                gsap.to(".contact-linkedin", {
                  textDecoration: "underline 0.1vh solid rgba(175, 159, 140,0)",
                  duration: 0.2,
                });
              }}
            >
              <img
                src={linkedin}
                alt=""
                style={{
                  width: 40 * (window.innerWidth / 1920),
                  transform: "translateY(25%) translateX(-50%)",
                }}
              />
              Sudhesh Venkatachalam
            </p>
            <p
              className="contact-website"
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
                color: "#DDD4C7",
                margin: 25,
                cursor: "pointer",
                textDecoration: "underline 0.1vh solid rgba(175, 159, 140,0)",
              }}
              onClick={() => {
                window.open("https://sudheshvenkatachalam.com");
              }}
              onPointerEnter={() => {
                gsap.to(".contact-website", {
                  textDecoration: "underline 0.1vh solid #DDD4C7",
                  duration: 0.2,
                });
              }}
              onPointerLeave={() => {
                gsap.to(".contact-website", {
                  textDecoration: "underline 0.1vh solid rgba(175, 159, 140,0)",
                  duration: 0.2,
                });
              }}
            >
              <img
                src={website}
                alt=""
                style={{
                  width: 40 * (window.innerWidth / 1920),
                  transform: "translateY(25%) translateX(-50%)",
                }}
              />
              sudheshvenkatachalam.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
