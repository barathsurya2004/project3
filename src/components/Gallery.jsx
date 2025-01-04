import { Suspense, useContext, useEffect, useRef, useState } from "react";
import close from "../assets/icons/close.svg";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import FullScreen from "./FullScreen";
gsap.registerPlugin(Flip);
const Gallery = () => {
  const { mode, setMode, photos, fullscreen, setFullscreen } =
    useContext(Context);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [opened, setOpened] = useState(false);
  // const [fullscreen, setFullscreen] = useState(null);
  const [indexSelected, setIndexSelected] = useState(null);
  const [titleIndex, setTitleIndex] = useState(null);
  const prevIndexRef = useRef();
  const fullref = useRef(fullscreen);
  fullref.current = fullscreen;

  useEffect(() => {
    if (mode === "Gallery") {
      const cont = document.querySelector(".photos-grid-container");
      cont.scrollTo(0, 0);
      gsap.fromTo(
        ".gallery",
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
      gsap.to(".gallery", {
        y: "100vh",
        duration: 0.5,
        ease: "power4.inOut",
      });
      setTimeout(() => {
        const ele = document.querySelector(".photos-grid-container");
        const view = document.querySelector(".current-selection");
        if (ele) {
          ele.style.gridTemplateColumns = "repeat(4, 1fr)";
          ele.style.width = "100%";
          view.style.width = "0";
          view.style.paddingRight = "0";
          setIndexSelected(null);
          gsap.set(prevIndexRef.current, {
            opacity: 1,
          });
          prevIndexRef.current = undefined;
          setOpened(false);
        }
      }, 500);
    }
  }, [mode]);
  useEffect(() => {
    if (prevIndexRef.current !== undefined) {
      // Revert the opacity of the previous index back to 1
      gsap.to(prevIndexRef.current, {
        opacity: 1,
        duration: 0.2,
      });
    }

    // Set the opacity of the newly selected index to 0.3
    if (indexSelected !== undefined) {
      gsap.to(indexSelected, {
        opacity: 0.3,
        duration: 0.2,
      });
    }

    // Update the previous index reference
    prevIndexRef.current = indexSelected;
  }, [indexSelected]);

  return (
    <>
      <FullScreen
        currentSelection={currentSelection}
        photos={photos}
        setcurrentSelection={setCurrentSelection}
      />
      <div
        className="gallery"
        style={{
          position: "absolute",
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
            padding: 25,
            zIndex: 490,
          }}
          onClick={() => {
            setMode(null);
          }}
        />
        <div
          className="gallery-container"
          style={{
            width: (1494.583 * window.innerWidth) / 1920,
            height: (737.47 * window.innerHeight) / 1080,
            borderRadius: (30 * window.innerWidth) / 1280,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            outline: `${(5 * window.innerHeight) / 720}px solid #facd74`,
            outlineOffset: -1 * ((1 * window.innerHeight) / 720),
            // background: "#facd74",
            zIndex: 500,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#facd74",
              position: "relative",
              margin: 0,
            }}
          >
            <h1
              style={{
                fontSize: (34 * window.innerWidth) / 1920,
                color: "black",
                fontWeight: 200,
              }}
            >
              {titleIndex == null
                ? "Getting to the Roots"
                : photos[titleIndex].Thumbnail}
            </h1>
            <div>
              <img
                src={close}
                alt=""
                style={{
                  width: 48.78 * (window.innerWidth / 1920),
                  height: 62.69 * (window.innerWidth / 1920),
                  position: "absolute",
                  top: "50%",
                  right: (30 * window.innerWidth) / 1920,
                  transform: "translate(0%, -40%)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setMode(null);
                }}
              />
            </div>
          </div>
          <div
            className="gallery-content"
            style={{
              width: "100%",
              height: "90%",
              padding: 5 * (window.innerWidth / 1920),
              paddingRight: 7 * (window.innerWidth / 1920),
              paddingLeft: 7 * (window.innerWidth / 1920),
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                // backgroundColor: "bisque",
                display: "flex",
                justifyContent: "space-between",
                overflow: "scroll",
                borderBottomLeftRadius: (30 * window.innerWidth) / 1280,
                borderBottomRightRadius: (30 * window.innerWidth) / 1280,
              }}
            >
              <div
                className="current-selection"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "0",
                  height: "100%",
                  overflow: "hidden",
                }}
                onDoubleClick={() => {
                  setFullscreen(true);
                }}
                onClick={() => {
                  console.log(fullref.current);
                  setTimeout(() => {
                    if (!fullref.current) {
                      const state = Flip.getState(
                        ".photos-grid-container, .images"
                      );
                      const ele = document.querySelector(
                        ".photos-grid-container"
                      );
                      const view = document.querySelector(".current-selection");
                      ele.style.gridTemplateColumns = "repeat(4, 1fr)";
                      ele.style.width = "100%";
                      view.style.width = "0";
                      view.style.paddingRight = "0";
                      Flip.from(state, {
                        absolute: true,
                        duration: 0.5,
                        ease: "power1.inOut",
                      }).then(() => {
                        setIndexSelected(null);
                        setTitleIndex(null);
                        setOpened(false);
                      });
                    }
                  }, 250);
                }}
              >
                <img
                  src={currentSelection}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div
                className="photos-grid-container"
                id="p-g-c"
                style={{
                  margin: 0,
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 5 * (window.innerWidth / 1920),
                  gridTemplateRows: `repeat(${Math.ceil(
                    photos.length / 4
                  )}, 1fr)`,
                  overflow: "scroll",
                }}
              >
                {photos.map((photo, index) => (
                  <div
                    className={`images images-${index}`}
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      aspectRatio: "1/1",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      setTimeout(() => {
                        if (!fullref.current) {
                          setCurrentSelection(photo.url);
                          if (prevIndexRef.current === `.images-${index}`) {
                            const state = Flip.getState(
                              ".photos-grid-container, .images"
                            );
                            const ele = document.querySelector(
                              ".photos-grid-container"
                            );
                            const view =
                              document.querySelector(".current-selection");
                            ele.style.gridTemplateColumns = "repeat(4, 1fr)";
                            ele.style.width = "100%";
                            view.style.width = "0";
                            view.style.paddingRight = "0";
                            Flip.from(state, {
                              absolute: true,
                              duration: 0.5,
                              ease: "power1.inOut",
                            }).then(() => {
                              setIndexSelected(null);
                              setTitleIndex(null);
                              setOpened(false);
                            });
                            return;
                          }
                          if (!opened) {
                            const ele = document.querySelector(
                              ".photos-grid-container"
                            );
                            const state = Flip.getState(
                              ".photos-grid-container, .images"
                            );
                            ele.style.gridTemplateColumns = "repeat(3, 1fr)";
                            ele.style.width = "55%";
                            Flip.from(state, {
                              absolute: true,
                              duration: 0.5,
                              ease: "power1.inOut",
                            }).then(() => {
                              setIndexSelected(`.images-${index}`);
                            });
                            gsap.to(".current-selection", {
                              width: "45%",
                              paddingRight: 5 * (window.innerWidth / 1920),
                              ease: "power4.inOut",
                            });
                          } else {
                            setIndexSelected(`.images-${index}`);
                            setTitleIndex(index);
                          }
                          setOpened(true);
                        }
                      }, 100);
                    }}
                    onDoubleClick={() => {
                      setFullscreen(true);
                    }}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
