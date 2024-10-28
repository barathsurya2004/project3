import { useContext, useEffect } from "react";
import { Context } from "../context";
import close from "../assets/icons/close.svg";
import gsap from "gsap";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
const MapComponent = () => {
  const { mode, setMode } = useContext(Context);
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: process.env.VITE_API_GOOGLE,
    // id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_API_GOOGLE,
  });
  const options = {
    mapId: "3409495573976949",
    disableDefaultUI: true,
    zoomControl: true,
    CameraControl: true,
  };

  // if (!isLoaded) return "Loading...";

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
            }}
          >
            {isLoaded ? (
              <GoogleMap
                zoom={15}
                // center={{
                //   lat: 10.3656,
                //   lng: 78.8206,
                // }}
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
                options={options}
              ></GoogleMap>
            ) : (
              <div>Loading...</div>
            )}
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

export default MapComponent;
