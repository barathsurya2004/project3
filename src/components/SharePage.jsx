import { useGSAP } from "@gsap/react";
// import { Pepper } from "../../public/models/cards/Pepper";
// import { Tamarind } from "../../public/models/cards/Tamarind";
import image from "../assets/icons/share.svg";
// import CardsCanvas from "./CardsCanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import ulImage from "../assets/icons/ul-marker.svg";
import copyImage from "../assets/icons/copy-icon.svg";
import arrow from "../assets/icons/arrow-share.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";
import tempImage from "../assets/images/cards/Asset 85.png";
gsap.registerPlugin(ScrollTrigger);
import anim from "../assets/json/lightning for face.json";
// import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
const SharePage = () => {
  const divRef = useRef();
  const change = useRef({ value: 1 });
  const getImage = () => {
    var node = divRef.current;
    htmlToImage
      .toPng(node, {
        style: {
          scale: 0.95,
          outline: "5px solid #D3AD62",
          borderRadius: "50px",
          background: "#101010",
        },
      })
      .then(async function (dataUrl) {
        // const out = document.getElementById("testing-for-ss");
        var img = new Image();
        img.src = dataUrl;
        // out.removeChild();

        let blob = await fetch(dataUrl).then((res) => {
          console.log(res);
          return res.blob();
        });
        let type = "image/" + blob.type.split("/")[1];
        navigator.clipboard.write([
          new ClipboardItem({
            [type]: blob,
          }),
        ]);
        // out.appendChild(img);
      })
      .catch(function (error) {
        alert("oops, something went wrong!");
      });
  };
  const animRef = useRef();
  const ref = useRef();
  const [shareOpen, setShareOpen] = useState(false);
  const [shareContent, setShareContent] = useState([
    {
      id: 1,
      selected: false,
      text: "Discover the rich culinary heritage of Tamil Nadu with beautifully crafted cards showcasing lorem ipsum sir lorem ipsum the essence of cuisines. Share the journey with your friends and dive into the world of diverse food cultures! \n \nCheck it out now: [Website Link]",
    },
    {
      id: 2,
      selected: false,
      text: "Discover the rich culinary heritage of Tamil Nadu with beautifully crafted cards showcasing lorem ipsum sir lorem ipsum the essence of cuisines. Share the journey with your friends and dive into the world of diverse food cultures!",
    },
  ]);
  const content = [
    {
      id: 1,
      text: [
        "Discover the rich culinary heritage of Tamil Nadu with beautifully crafted cards showcasing lorem ipsum sir lorem ipsum the essence of cuisines. Share the journey with your friends and dive into the world of diverse food cultures! \n \nCheck it out now: [Website Link]",
        "",
      ],
    },
    {
      id: 2,
      text: [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam",
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien",
      ],
    },
  ];
  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
      image: tempImage,
    },
    {
      id: 3,
      image: tempImage,
    },
    {
      id: 4,
      image: tempImage,
    },
    {
      id: 5,
      image: tempImage,
    },
  ];
  useGSAP(() => {
    gsap.to(".sharing-page", {
      // opacity: 0,

      // delay: 1,
      scrollTrigger: {
        trigger: ".face-reacting-page-helper",
        start: "top 85%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(window, {
            scrollTo: {
              y: ".sharing-page",
              offsetY: (-100 * window.innerHeight) / 720,
              autoKill: false,
            },
            duration: 0.5,
            onComplete: () => {
              console.log("completed");
              document.body.style.overflow = "hidden";
              animRef.current.setDirection(1);
              animRef.current.goToAndPlay(0);
              gsap.set(".share-page-transition-container", {
                top: 0,
              });
              gsap.set(ref.current, {
                zIndex: 0,
              });
            },
          });
        },
        onLeaveBack: () => {
          console.log("please go back");
          gsap.fromTo(".face-reacting-page", { opacity: 1 }, { opacity: 0 });
          gsap.fromTo(".sharing-page", { opacity: 0 }, { opacity: 1 });
          gsap.fromTo(
            ".face-model",
            { opacity: 1, zIndex: 10 },
            { opacity: 0, zIndex: 1000 }
          );
          gsap.set(ref.current, {
            zIndex: 1000,
          });
        },
        // markers: true,
      },
    });
  });
  useEffect(() => {
    if (shareOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(".share-pop-up", {
        top: 0,
        duration: 0.5,

        ease: "power2.inOut",
      });
      gsap.to(ref.current, {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${100}%, rgba(0,0,0,1) ${100}%, rgba(0,0,0,1) 100%)`,
        ease: "power2.inOut",
        duration: 0.5,
      });
    } else {
      gsap.to(".share-pop-up", {
        top: "100vh",
        duration: 0.5,
        ease: "power2.inOut",
      });
      document.body.style.overflow = "auto";
      gsap.to(ref.current, {
        maskImage: `linear-gradient(0deg, rgba(0,0,0,0.0) ${-20}%, rgba(0,0,0,1) ${-20}%, rgba(0,0,0,1) 100%)`,
        ease: "power2.inOut",
        duration: 0.5,
      });
    }
  }, [shareOpen]);
  return (
    <>
      {" "}
      <div
        className="share-pop-up"
        style={{
          position: "fixed",
          top: "100vh",
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
        }}
      >
        {/* <div
            id="testing-for-ss"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 100,
              height: 100,
              zIndex: 0,
              backgroundColor: "red",
              // objectFit: "cover",
            }}
          ></div> */}
        <div
          className="share-page-backdrop"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 1)",
            zIndex: -1,
          }}
          onClick={() => {
            setShareOpen(false);
          }}
        />
        <div
          className="share-page-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: (1500 * window.innerWidth) / 1920,
            height: (753 * window.innerHeight) / 1080,
            borderRadius: (50 * window.innerWidth) / 1920,
            border: "5px solid #D3AD62",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            zIndex: 2000,
            overflow: "hidden",
          }}
        >
          <div
            // ref={divRef}
            className="left-container"
            style={{
              width: "60%",
              height: "100%",
              position: "relative",
              display: "flex",
            }}
          >
            <div
              className="share-page-carousel"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                // backgroundColor: "rgba(255, 0, 0, 0.5)",
              }}
            >
              <div
                className="share-carousel-next-button"
                style={{
                  position: "absolute",
                  right: (20 * window.innerWidth) / 1920,
                  top: "50%",
                  transform: "translate(0, -50%)",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <img
                  src={arrow}
                  alt=""
                  style={{
                    height: (45 * window.innerHeight) / 1080,
                  }}
                />
              </div>
              <div
                className="share-carousel-prev-button"
                style={{
                  position: "absolute",
                  left: (20 * window.innerWidth) / 1920,
                  top: "50%",
                  transform: "translate(0, -50%)",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <img
                  src={arrow}
                  style={{
                    height: (45 * window.innerHeight) / 1080,
                    transform: "rotate(180deg)",
                  }}
                  alt=""
                />
              </div>
              <div
                ref={divRef}
                className="share-carousel-container"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  // backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: (130 * window.innerHeight) / 1080,
                  backgroundImage:
                    "linear-gradient(0deg, rgba(135,104,73,0.5) 0%, rgba(89,71,49,0.3) 100%)",
                  outline: "5px solid #D3AD62",
                  // borderRadius: (50 * window.innerWidth) / 1920,
                  // outlineOffset: "5px",
                }}
              >
                <div
                  className="share-carousel-slider"
                  style={{
                    // position: "absolute",
                    // height: 370 * (window.innerHeight / 1080),
                    // top: "50%",
                    // transform: "translate(0, -50%)",
                    // left: 0,
                    // marginTop: (20 * window.innerHeight) / 1080,
                    width: "100%",

                    height: "100%",

                    zIndex: 0,
                  }}
                >
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 50,
                      modifier: 4,
                      slideShadows: false,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    navigation={{
                      nextEl: ".share-carousel-next-button",
                      prevEl: ".share-carousel-prev-button",
                      clickable: true,
                    }}
                  >
                    {cards.map((item) => (
                      <SwiperSlide>
                        <div
                          className="share-carousel-slide"
                          style={{
                            // width: 100,
                            // height: 100,
                            // height: "100%",
                            height: 370 * (window.innerHeight / 1080),
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={tempImage}
                            style={{
                              // width: "100%",
                              height: "100%",
                            }}
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                    className="share-current-select-text"
                    style={{
                      marginTop: (20 * window.innerHeight) / 1080,
                    }}
                  >
                    {shareContent.map(
                      (ele, index) =>
                        ele.selected && (
                          <p
                            style={{
                              marginBottom: (20 * window.innerHeight) / 1080,
                            }}
                          >
                            {ele.text}
                          </p>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="right-container"
            style={{
              width: "40%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderLeft: "5px solid #D3AD62",
              backgroundImage:
                "linear-gradient(0deg, rgba(135,104,73,0.5) 0%, rgba(89,71,49,0.3) 100%)",
            }}
          >
            <div
              className="share-overlay-header"
              style={{
                width: "100%",
                height: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#D3AD62",
                color: "black",
                textAlign: "center",
                padding: (32 * window.innerHeight) / 1080,
                fontSize: (32 * window.innerWidth) / 1920,
              }}
            >
              Select text and click share to copy to clipboard
            </div>
            <div
              className="share-overlay-content"
              style={{
                height: "60%",
                width: "100%",
                // backgroundColor: "blue",
                borderBottom: "5px solid #D3AD62",
                // padding: (20 * window.innerWidth) / 1920,
                padding: `${(40 * window.innerHeight) / 1080}px ${
                  (60 * window.innerHeight) / 1080
                }px`,
                overflowY: "auto",
              }}
            >
              <ul
                style={{
                  // listStylePosition: "inside",
                  listStyleType: "none",
                  // padding: 10,
                }}
              >
                {shareContent.map((ele, index) => {
                  return (
                    <>
                      <li
                        style={{
                          position: "relative",
                        }}
                        onClick={() => {
                          let temp = [...shareContent];
                          temp.forEach((item) => {
                            if (item.id === ele.id) {
                              if (item.selected) {
                                item.selected = false;
                              } else item.selected = true;
                            } else {
                              item.selected = false;
                            }
                          });
                          setShareContent(temp);
                          console.log(shareContent);
                        }}
                      >
                        <img
                          src={ulImage}
                          alt=""
                          style={{
                            width: (20 * window.innerWidth) / 1920,
                            height: (20 * window.innerHeight) / 1080,
                            margin: 0,
                            padding: 0,
                            transform: "translate(-100%, 25%)",
                            position: "absolute",
                            opacity: ele.selected ? 1 : 0,
                          }}
                        />
                        <p
                          key={index}
                          style={{
                            // fontSize: (20 * window.innerWidth) / 1920,
                            marginLeft: (20 * window.innerWidth) / 1920,
                            // padding: (10 * window.innerWidth) / 1920,
                            // color: "#D3AD62",
                            fontSize: (27 * window.innerWidth) / 1920,
                            marginBottom: (50 * window.innerHeight) / 1080,
                          }}
                        >
                          {ele.text}
                        </p>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div
              className="share-overlay-share"
              style={{
                width: "100%",
                height: "20%",
                display: "flex",
              }}
            >
              <div
                className="share-overlay-copy-icon"
                style={{
                  flex: 1,
                  // padding: (50 * window.innerWidth) / 1920,
                  // borderRight: "5px solid #D3AD62",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontFamily: "TTtravels Next DemiBold",
                  fontSize: (55 * window.innerWidth) / 1920,
                }}
                onClick={() => {
                  getImage();
                  const ele = document.querySelector(
                    ".share-overlay-copy-icon"
                  );
                  ele.innerHTML = "Copied!";
                  setTimeout(() => {
                    ele.innerHTML = "Share";
                  }, 2000);
                }}
              >
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="sharing-page"
        style={{
          position: "relative",
          zIndex: 510,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: 0,
            width: "100%",
            height: (310 * window.innerHeight) / 1080,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960.45 3000"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <path
              fill="none"
              stroke="#d3ad62"
              stroke-width="5"
              d="M480.225,0 L480.225,3392.025"
            />
          </svg>
        </div>
        <div
          // ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: (25 * window.innerHeight) / 1080,
            zIndex: 10,
          }}
        >
          <img
            src={image}
            style={{
              width: (125 * window.innerWidth) / 1920,
              height: (125 * window.innerHeight) / 1080,
              margin: 0,
              cursor: "pointer",
            }}
            alt=""
            onClick={() => {
              setShareOpen(true);
            }}
          />
          <h1
            style={{
              fontSize: (55 * window.innerWidth) / 1920,
              fontFamily: "TTtravels Next DemiBold",
              textAlign: "center",
              margin: (25 * window.innerHeight) / 1080,
              color: "#D3AD62",
            }}
          >
            Share
          </h1>
          <p
            style={{
              fontSize: (27 * window.innerWidth) / 1920,
              textAlign: "center",
              width: (300 * window.innerWidth) / 1920,
              margin: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Click to send these to your firends and let them know the beauty of
            these cuisines
          </p>
        </div>
        <div
          style={{
            margin: 0,
            width: "100%",
            height: (70 * window.innerHeight) / 1080,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 960.45 3000"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <path
              fill="none"
              stroke="#d3ad62"
              stroke-width="5"
              d="M480.225,0 L480.225,3392.025"
            />
          </svg>
        </div>
        <h1
          style={{
            fontSize: (55 * window.innerWidth) / 1920,
            fontFamily: "TTtravels Next DemiBold",
            textAlign: "center",
            margin: (25 * window.innerHeight) / 1080,
            width: (950 * window.innerWidth) / 1920,
            marginLeft: "auto",
            marginRight: "auto",
            color: "#D3AD62",
          }}
        >
          So many differences, yet complimentary.
        </h1>
        <div
          className="pandi-share"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100vh",
          }}
        >
          {/* <CardsCanvas>
          <Pepper />
        </CardsCanvas> */}
        </div>
        <div
          className="chetti-share"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100vh",
          }}
        >
          {/* <CardsCanvas>
          <Tamarind />
        </CardsCanvas> */}
        </div>
        <div
          className="share-page-transition-container"
          style={{
            position: "fixed",
            top: "100vh",
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            // opacity: 1,
            // mixBlendMode: "screen",
          }}
        >
          <Lottie
            animationData={anim}
            lottieRef={animRef}
            loop={false}
            autoplay={false}
            rendererSettings={{
              preserveAspectRatio: "none",
            }}
            style={{
              height: "100%",
              width: "100%",
              pointerEvents: "none",
            }}
            onComplete={() => {
              gsap.set(".share-page-transition-container", {
                top: "100vh",
              });
              // console.log("completed");
              gsap.to(".sharing-page", {
                delay: -1,
                opacity: 0,
                duration: 0.001,
              });
              gsap.to(".face-model", {
                zIndex: 1100,
                opacity: 1,
                duration: 0.001,
              });
              gsap.fromTo(
                ".face-reacting-page",
                { display: "none", opacity: 0 },
                {
                  display: "block",
                  opacity: 1,
                  duration: 0.001,
                  ease: "none",
                  immediateRender: false,
                }
              );
              document.body.style.overflow = "auto";
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SharePage;
