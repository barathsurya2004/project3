import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../context";
import close from "../assets/icons/close.svg";
import gsap from "gsap";
import ActualMap from "./ActualMap";
import { getDocFromDb, getDocsFromDb } from "../firebaseUtils";
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
        lat: 10.462891129065917,
        lng: 77.96361228641968,
      },
      cuisine: "chetti",
    },
  ]);

  useEffect(() => {
    const fun = async () => {
      const temp = await getDocsFromDb("placesForMap");
      console.log(temp);
      // setPlaces(temp);
    };
    fun();
  }, []);
  // if (!isLoaded) return "Loading...";

  // const places = [
  //   {
  //     name: "Dindigul Thalappakatti",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.462890129065917,
  //       lng: 77.96361228641968,
  //     },
  //   },
  //   {
  //     name: "chettinadmanor",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.344027243217678,
  //       lng: 78.73814834574884,
  //     },
  //   },
  //   {
  //     name: "Athangudi Palace",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.157585454981055,
  //       lng: 78.72545598292346,
  //     },
  //   },
  //   {
  //     name: "Pallathur",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.384060216215431,
  //       lng: 78.81936659729178,
  //     },
  //   },
  //   {
  //     name: "JKB Hotel new president",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.299868983282456,
  //       lng: 78.73378498802997,
  //     },
  //   },
  //   {
  //     name: "Friends Restaurant",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.234371356989241,
  //       lng: 78.76231219111723,
  //     },
  //   },
  //   {
  //     name: "Sri Priya Mess",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.243728990496221,
  //       lng: 78.8574028680748,
  //     },
  //   },
  //   {
  //     name: "Amma Mess",
  //     food: "Biryani",
  //     location: "Dindigul",
  //     coord: {
  //       lat: 10.262443428724893,
  //       lng: 78.8383847326833,
  //     },
  //   },
  // ];

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
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (cur === place.coord) {
                      setCur(null);
                      return;
                    }
                    setCur(place);
                    // console.log(place.coord);
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

export default MapComponent;
