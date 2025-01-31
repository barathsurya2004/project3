import { Context } from "../context";
import { useContext, useEffect, useRef, useState } from "react";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import image from "../assets/backToTop.svg";
import Disclaimer from "../components/Disclaimer";
// import Restart from "../components/Restart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import goto from "../assets/icons/goto.svg";
import restart from "../assets/lotties/restart.json";
import Lottie from "lottie-react";
import { useGSAP } from "@gsap/react";
import MapComponent from "../components/Map";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const EndingPage = () => {
  const { mode, setMode, fullscreen, canScrollTo } = useContext(Context);
  const animRef = useRef(null);

  useEffect(() => {
    if (mode !== null) {
      document.body.style.overflow = "hidden";
      gsap.to(".about-content", {
        delay: 0.2,
        duration: 0.2,
        maskImage:
          "linear-gradient(0deg, rgba(0,0,0,0.0) 80%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)",
      });
    } else {
      document.body.style.overflow = "auto";
      gsap.to(".about-content", {
        delay: 0.2,
        duration: 0.2,
        maskImage:
          "linear-gradient(0deg, rgba(0,0,0,0.0) -20%, rgba(0,0,0,1) -20%, rgba(0,0,0,1) 100%)",
      });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mode]);

  const styles = {
    h1: {
      fontSize: (55 * window.innerWidth) / 1920,
      fontFamily: "TTtravels Next Bold",
      position: "relative",
      zIndex: 450,
      cursor: "pointer",
    },
  };
  useGSAP(() => {
    gsap.fromTo(
      ".ending-ahh-page",
      { display: "none", opacity: 0, zIndex: 50 },
      {
        display: "block",
        opacity: 1,
        duration: 0.2,
        zIndex: 510,
        scrollTrigger: {
          trigger: ".ending-page-helper",
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <>
      <div
        className="ending-page-helper"
        style={{
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div
        className="ending-ahh-page"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          className="navbar-ending-page"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            width: "100%",
            position: "absolute",
            top: (17 * window.innerHeight) / 720,
            opacity: fullscreen ? 0 : 1,
          }}
        >
          <h1
            style={{
              ...styles.h1,
              opacity: mode == null || mode == "Map" ? 1 : 0.5,
              zIndex: 510,
              marginTop: "0.67em",
              marginBottom: "0.67em",
            }}
            onClick={() => {
              setMode("Map");
            }}
          >
            Places to go
          </h1>
          <h1
            className="journal"
            style={{
              ...styles.h1,
              opacity: mode == null || mode == "Journal" ? 1 : 0.5,
              zIndex: 510,
              position: "relative",
              marginTop: "0.67em",
              marginBottom: "0.67em",
              boxSizing: "content-box",
            }}
            onPointerEnter={() => {
              const journal = document.querySelector(".journal");
              gsap.to(journal, {
                duration: 0.2,
                transform: `translate(-${
                  (30 * window.innerWidth) / 1920
                }px, 0)`,
              });
              const icon = document.querySelector(".journal-icon");
              gsap.fromTo(
                icon,
                {
                  x: (-50 * window.innerWidth) / 1920,
                },
                {
                  duration: 0.2,
                  x: (0 * window.innerWidth) / 1920,
                }
              );
              const element = document.querySelector(".journal-text");
              gsap.to(element, {
                duration: 0.2,
                textDecoration: "underline rgba(242, 216, 160,1)",
              });
            }}
            onPointerLeave={() => {
              const journal = document.querySelector(".journal");
              gsap.to(journal, {
                duration: 0.2,
                transform: "translate(0, 0)",
              });
              const icon = document.querySelector(".journal-icon");
              gsap.fromTo(
                icon,
                {
                  x: (0 * window.innerWidth) / 1920,
                },
                {
                  duration: 0.2,
                  x: (-50 * window.innerWidth) / 1920,
                }
              );
              const element = document.querySelector(".journal-text");
              gsap.to(element, {
                duration: 0.2,
                textDecoration: "underline rgba(242, 216, 160,0)",
              });
            }}
          >
            <p
              style={{
                fontSize: (55 * window.innerWidth) / 1920,
                fontFamily: "TTtravels Next Bold",
                zIndex: 450,
                cursor: "pointer",
                paddingRight: 0,
                boxSizing: "content-box",
                margin: 0,
                textDecoration: "underline rgba(242, 216, 160,0)",
              }}
              className="journal-text"
              onClick={() => {
                window.open(
                  "https://docs.google.com/document/d/1MxeVLD4xwetsegp7Z-tDFOHF92_dnOQMNT-o1GEMZWQ/edit?usp=sharing",
                  "_blank"
                );
              }}
            >
              Journal
            </p>
            <span
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(20%, 50%%)",
                opacity: 1,
                // background: "red",
                height: "100%",
                width: "120%",
              }}
            ></span>
            <span
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translate(120%, -50%)",
                opacity: 1,
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <img
                className="journal-icon"
                src={goto}
                alt=""
                style={{
                  width: (40 * window.innerWidth) / 1920,
                  height: (40 * window.innerWidth) / 1920,
                  transform: "translateX(-50px)",
                }}
              />
            </span>
          </h1>
          <h1
            style={{
              ...styles.h1,
              opacity: mode == null || mode == "Gallery" ? 1 : 0.5,
              marginTop: "0.67em",
              marginBottom: "0.67em",
              zIndex: 510,
            }}
            onClick={() => {
              setMode("Gallery");
            }}
          >
            Gallery
          </h1>
          <h1
            style={{
              ...styles.h1,
              opacity: mode == null || mode == "Contact" ? 1 : 0.5,
              zIndex: 510,
            }}
            onClick={() => {
              setMode("Contact");
            }}
          >
            Contact
          </h1>
        </div>
        <div
          className="about-content"
          style={{
            width: "100%",
            height: "100%",
            maskImage:
              "linear-gradient(0deg, rgba(0,0,0,0.0) -20%%, rgba(0,0,0,1) -20%, rgba(0,0,0,1) 100%)",
          }}
        >
          <div
            style={{
              padding: "5% 0 0 0",
              width: (700 * window.innerWidth) / 1920,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              pointerEvents: "none",
              margin: "0 0 0 50%",
            }}
          >
            <h2
              style={{
                fontSize: (50 * window.innerWidth) / 1920,
                fontFamily: "TTtravels Next Bold",
                margin: "0 auto 0 0",
                marginBottom: (20 * window.innerWidth) / 1920,
              }}
            >
              About this website
            </h2>
            <p
              style={{
                fontSize: (27 * window.innerWidth) / 1920,
                fontFamily: "Filson Pro Regular",
                marginBottom: (15 * window.innerWidth) / 1920,
                color: "#DDD4C7",
              }}
            >
              It all started when two 'Chettinad' restaurants in Madurai offered
              completely different-tasting foods. This website is the result of
              the questions that arose from that experience. Through extensive
              exploration, the workings of cuisine were uncovered through the
              distinct culinary landscapes of Tamil Nadu, revealing how two
              unique cuisines—Pandiyanad and Chettinad—exist in close proximity
              yet offer vastly different flavors and experiences.
              <br />
              <br />
              Dedicated to exploring, documenting, and distinguishing these two
              regional cuisines (and many more from around the globe to come),
              the website offers an immersive journey aimed at providing
              information and distinction to every cuisine documented in this
              website.
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            left: 0,
          }}
        >
          <Footer />
        </div>
        <div
          className="back-to-top"
          style={{
            position: "absolute",
            right: (80 * window.innerWidth) / 1920,
            bottom: (80 * window.innerHeight) / 1080,
            zIndex: mode == null ? 550 : 450,
            margin: 0,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            canScrollTo.current = false;
            gsap.to(window, {
              duration: 8,
              scrollTo: 0,
              ease: "power1.inOut",
              onComplete: () => {
                canScrollTo.current = true;
              },
            });
          }}
        >
          <div
            style={{
              margin: 0,
              padding: 0,
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate(-100%, 25%)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <p
              className="back-to-top-text"
              style={{
                fontSize: (50 * window.innerWidth) / 1920,
                fontFamily: "TTtravels Next Bold",
                transform: "translate(100%, 0%)",
                margin: 0,
              }}
            >
              Restart
            </p>
          </div>
          <div
            className="back-to-top-icon"
            style={{
              width: (100 * window.innerWidth) / 1920,
              height: (100 * window.innerHeight) / 1080,
              margin: 0,
              opacity: 0.3,
            }}
            onPointerEnter={() => {
              gsap.fromTo(
                ".back-to-top-icon",
                {
                  opacity: 0.3,
                },
                {
                  opacity: 1,
                  duration: 0.2,
                }
              );
            }}
            onPointerLeave={() => {
              gsap.fromTo(
                ".back-to-top-icon",
                {
                  opacity: 1,
                },
                {
                  opacity: 0.3,
                  duration: 0.2,
                }
              );
            }}
          >
            <Lottie
              autoPlay={false}
              animationData={restart}
              lottieRef={animRef}
              loop={true}
              style={{
                height: "100%",
                margin: 0,
                cursor: "pointer",
              }}
              onPointerEnter={() => {
                animRef.current.play();
                gsap.fromTo(
                  ".back-to-top-text",
                  {
                    x: "100%",
                  },
                  {
                    duration: 0.5,
                    x: 0,
                  }
                );
              }}
              onPointerLeave={() => {
                animRef.current.stop();
                gsap.fromTo(
                  ".back-to-top-text",
                  {
                    x: 0,
                  },
                  {
                    duration: 0.2,
                    x: "100%",
                  }
                );
              }}
            />
          </div>
        </div>

        <div
          className="overLay"
          style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            top: 0,
            left: 0,
            paddingTop: (50 * window.innerHeight) / 720,
            // opacity: 0.5,
            overflow: "hidden",
            zIndex: 501,
            margin: 0,
          }}
        >
          <Gallery />
          <Contact />
          <MapComponent />
          <Disclaimer />
        </div>
      </div>
    </>
  );
};

export default EndingPage;
