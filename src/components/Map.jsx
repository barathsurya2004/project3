import { useContext, useEffect } from "react";
import { Context } from "../context";
import close from "../assets/icons/close.svg";
import gsap from "gsap";
const Map = () => {
  const { mode, setMode } = useContext(Context);
  const places = [
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
    },
  ];
  useEffect(() => {
    if (mode === "Map") {
      gsap.fromTo(
        ".map",
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
      gsap.to(".map", {
        y: "100vh",
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [mode]);
  return (
    <div
      className="map"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        zIndex: 500,
        position: "absolute",
      }}
    >
      <div
        className="map-container"
        style={{
          width: (1494.583 * window.innerWidth) / 1920,
          height: (747.47 * window.innerHeight) / 1080,
          // background: "#D3AD62",
          // opacity: 0.5,
          borderRadius: (30 * window.innerWidth) / 1280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          outline: `${(5 * window.innerHeight) / 720}px solid #D3AD62`,
          outlineOffset: `-${(1 * window.innerHeight) / 720}px`,
        }}
      >
        <div
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "10%",
            backgroundColor: "#D3AD62",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: (36 * window.innerWidth) / 1920,
              color: "black",
              fontWeight: 200,
            }}
          >
            Interview in chettinad
          </h1>
          <div
            style={{
              position: "absolute",
              right: (30 * window.innerWidth) / 1920,
              top: "50%",
              transform: "translate(0, -45%)",
              width: 48.78 * (window.innerWidth / 1920),
              height: 62.69 * (window.innerWidth / 1920),
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
        </div>
        <div
          className="content-holder"
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            overflow: "auto",
          }}
        >
          <div
            className="map-holder"
            style={{
              width: "67.5%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005182.5176876935!2d77.30992582500002!3d11.010683114668074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa848abda3ad%3A0x53000018cde053ad!2sDindigul%20Thalappakatti!5e0!3m2!1sen!2sin!4v1729330209661!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div
            className="places-holder"
            style={{
              width: "32.5%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "scroll",
              scrollbarWidth: "none",
              borderLeft: "5px solid #D3AD62",
              background:
                "linear-gradient(90deg, rgba(89,71,49,0.3) 0%, rgba(89,71,49,0.2) 100%)",
            }}
          >
            {places.map((place, index) => {
              return (
                <div
                  className="place"
                  key={index}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h1
                    style={{
                      fontSize: (34 * window.innerWidth) / 1920,
                      color: "#DDD4C7",
                      marginLeft: "5%",
                      marginTop: 10,
                      marginBottom: 10,
                      fontWeight: 200,
                    }}
                  >
                    {place.name}
                  </h1>
                  <p
                    style={{
                      color: "#CEB9A5",
                      fontSize: (27 * window.innerWidth) / 1920,
                      margin: 0,
                      marginLeft: "5%",
                      marginBottom: 10,
                      fontWeight: 200,
                    }}
                  >
                    {place.food}•{place.location}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <hr
                      style={{
                        width: "90%",
                        height: 1,
                        backgroundColor: "#AF9F8C",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
