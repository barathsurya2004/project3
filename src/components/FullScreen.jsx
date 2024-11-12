import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context";
import arrow from "../assets/icons/arrowBase.svg";
import gsap from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable);
const FullScreen = ({ currentSelection, photos, setcurrentSelection }) => {
  const { fullscreen, setFullscreen, pointer } = useContext(Context);
  const [zooming, setZooming] = useState(false);
  const zoomRef = useRef(zooming);
  zoomRef.current = zooming;
  const clickTimeoutRef = useRef();
  const [keyPressed, setKeyPressed] = useState("k");

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setKeyPressed("Escape");
        setFullscreen(false);
      }
    });
    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, []);
  useEffect(() => {
    Draggable.create(".overflow-container", {
      type: "x",
      // bounds: document.querySelector(".fullscreen-carousel"),
      bounds: {
        minX: 0,
        maxX: (-photos.length * (100 * window.innerWidth)) / 1920,
      },
      onDrag: () => {
        console.log(document.querySelector(".fullscreen-carousel").offsetWidth);
      },
    });
    Draggable.create(".current-image-fullscreen", {
      type: "x,y",
      zIndexBoost: false,
      bounds: document.querySelector(".fullscreen-viewer"),
      onDrag: () => {
        console.log("dragging");
      },
    });
    gsap.to(".current-image-fullscreen", {
      x: 0,
      y: 0,
    });
  }, []);

  return (
    <div
      className="fullscreen-viewer"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        zIndex: 1000,
        display: fullscreen ? "flex" : "none",
      }}
    >
      <div
        className="navigation-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="left-arrow"
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: (100 * window.innerWidth) / 1920,
            zIndex: 1000,
            transform: "translateY(-50%)",
            cursor: "pointer",
            background: "linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0))",
            opacity: 0.1,
          }}
          onClick={() => {
            const index = photos.findIndex(
              (photo) => photo.url === currentSelection
            );
            if (index === 0) {
              setcurrentSelection(photos[photos.length - 1].url);
            } else {
              setcurrentSelection(photos[index - 1].url);
            }
          }}
          onPointerEnter={() => {
            gsap.to(".left-arrow", {
              duration: 0.2,
              opacity: 1,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0))",
            });
          }}
          onPointerLeave={() => {
            gsap.to(".left-arrow", {
              duration: 0.2,
              opacity: 0.1,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0))",
            });
          }}
        >
          <img
            src={arrow}
            alt=""
            style={{
              width: (50 * window.innerWidth) / 1920,
              height: (50 * window.innerWidth) / 1920,
            }}
          />
        </div>
        <div
          className="right-arrow"
          style={{
            position: "absolute",
            top: "50%",
            height: "100%",
            display: "flex",
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            width: (100 * window.innerWidth) / 1920,
            zIndex: 1000,
            transform: "translateY(-50%)",
            cursor: "pointer",
            background: "linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0))",
            opacity: 0.1,
          }}
          onClick={() => {
            const index = photos.findIndex(
              (photo) => photo.url === currentSelection
            );
            if (index === photos.length - 1) {
              setcurrentSelection(photos[0].url);
            } else {
              setcurrentSelection(photos[index + 1].url);
            }
          }}
          onPointerEnter={() => {
            gsap.to(".right-arrow", {
              duration: 0.2,
              opacity: 1,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.5))",
            });
          }}
          onPointerLeave={() => {
            gsap.to(".right-arrow", {
              duration: 0.2,
              opacity: 0.1,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0))",
            });
          }}
        >
          <img
            src={arrow}
            alt=""
            style={{
              width: (50 * window.innerWidth) / 1920,
              height: (50 * window.innerWidth) / 1920,
              transform: "rotate(180deg)",
            }}
          />
        </div>
      </div>
      <div
        className="current-image-fullscreen"
        style={{
          // width: "150%",
          height: ((1080 - 130) * window.innerHeight) / 1080,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          // aspectRatio: "16/9",
          zIndex: 999,
        }}
        onDoubleClick={() => {
          clearTimeout(clickTimeoutRef.current);
          setZooming(!zooming);
          gsap.to(".current-image-fullscreen", {
            duration: 0.3,
            height: zooming
              ? "150%"
              : ((1080 - 130) * window.innerHeight) / 1080,
          });
          gsap.to(".current-image-fullscreen", {
            x: 0,
            y: 0,
          });
        }}
        onClick={() => {
          clickTimeoutRef.current = setTimeout(() => {
            if (zoomRef.current === zooming) {
              setFullscreen(false);
            }
          }, 300);
        }}
      >
        <img
          className="current-image-fullscreen"
          src={currentSelection}
          style={{
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
      <div
        className="close-button"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100vh",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
        }}
        onClick={() => {
          setFullscreen(false);
        }}
      ></div>
      <div
        className="fullscreen-carousel"
        style={{
          position: "absolute",
          bottom: 0,
          height: (120 * window.innerHeight) / 1080,
          overflowX: "scroll",
          overflowY: "hidden",
          width: "100vw",
        }}
      >
        <div
          className="overflow-container"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {photos.map((photo, index) => {
            return (
              <div
                key={index}
                style={{
                  minWidth: (120 * window.innerHeight) / 1080,
                  minHeight: (120 * window.innerHeight) / 1080,
                  margin: "0 2.5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setcurrentSelection(photo.url);
                }}
              >
                <img
                  src={photo.url}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
