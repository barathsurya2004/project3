import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../context";
import close from "../assets/icons/close.svg";
import gsap from "gsap";
import ActualMap from "./ActualMap";
import { getDocFromDb, getDocsFromDb, setRandomDoc } from "../firebaseUtils";
import visit from "../assets/icons/goto.svg";
const MapComponent = () => {
  const { mode, setMode } = useContext(Context);
  const [places, setPlaces] = useState([
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.462890129065917,
        lng: 77.96361228641968,
      },
      cuisine: "pandi",
    },
    {
      name: "Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 11.462891129065917,
        lng: 77.96361228641968,
      },
      cuisine: "chetti",
    },
  ]);

  useEffect(() => {
    const fun = async () => {
      const temp = await getDocsFromDb("placesForMap");
      console.log(temp);
      setPlaces(temp);
    };
    fun();
  }, []);
  // if (!isLoaded) return "Loading...";

  const [cur, setCur] = useState(null);
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
  const center = {
    lat: 10.262443428724893,
    lng: 78.8383847326833,
  };

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
      ></div>
      <div
        id="map-container"
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
              position: "relative",
            }}
          >
            <ActualMap places={places} cur={cur} />
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
                "linear-gradient(90deg, rgba(135,104,73,0.3) 0%, rgba(89,71,49,0.2) 100%)",
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
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    if (cur === place.coord) {
                      setCur(null);
                      return;
                    }
                    setCur(place);
                  }}
                >
                  <div
                    style={{
                      paddingTop: (34 * window.innerHeight) / 1080,
                      paddingBottom: (34 * window.innerHeight) / 1080,
                      paddingLeft: (34 * window.innerWidth) / 1920,
                      paddingRight: (34 * window.innerWidth) / 1920,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: 40.8 * (window.innerWidth / 1920),
                        color: "#DDD4C7",
                        marginBottom: 10 * (window.innerHeight / 1080),
                        fontWeight: 200,
                      }}
                    >
                      {place.name}
                    </h1>
                    <p
                      style={{
                        color: "#CEB9A5",
                        fontSize: (32.4 * window.innerWidth) / 1920,
                        margin: 0,
                        fontWeight: 200,
                      }}
                    >
                      {place.food} • {place.location} •{" "}
                      <div
                        style={{
                          display: "inline",
                          color: "#CEB9A5",
                          fontWeight: 400,
                        }}
                        onPointerEnter={() => {
                          gsap.fromTo(
                            `.place-${index}`,
                            {
                              x: -50,
                            },
                            {
                              x: 0,
                              duration: 0.2,
                              // ease: "power4.inOut",
                            }
                          );
                          gsap.to(`.place-${index}-text`, {
                            duration: 0.2,
                            textDecoration: "underline rgba(206, 185, 165,1)",
                          });
                        }}
                        onPointerLeave={() => {
                          gsap.fromTo(
                            `.place-${index}`,
                            {
                              x: 0,
                            },
                            {
                              x: -50,
                              duration: 0.2,
                              // ease: "power4.inOut",
                            }
                          );
                          gsap.to(`.place-${index}-text`, {
                            duration: 0.2,
                            textDecoration: "none",
                          });
                        }}
                      >
                        <span
                          className={`place-${index}-text`}
                          style={{
                            color: "#CEB9A5",
                            fontWeight: 200,
                            fontSize: (32.4 * window.innerWidth) / 1920,
                          }}
                        >
                          Visit
                        </span>
                      </div>
                      <div
                        style={{
                          display: "inline",
                          margin: 0,
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                      >
                        <img
                          className={`place-${index}`}
                          src={visit}
                          alt=""
                          style={{
                            width: (20 * window.innerWidth) / 1920,
                            height: (20 * window.innerWidth) / 1920,
                            marginLeft: (9 * window.innerWidth) / 1920,
                            transform: "translate(-50px, 0px)",
                          }}
                        />
                      </div>
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      paddingLeft: 34 * (window.innerWidth / 1920),
                      paddingRight: 34 * (window.innerWidth / 1920),
                    }}
                  >
                    <hr
                      style={{
                        width: "100%",
                        height: 1,
                        backgroundColor: "#AF9F8C",
                        border: "none",
                        zIndex: 100,
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

export default MapComponent;
