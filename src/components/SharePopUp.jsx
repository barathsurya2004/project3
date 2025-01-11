import ulImage from "../assets/icons/checkN.svg";
import ulCheck from "../assets/icons/checkS.svg";
import copyImage from "../assets/icons/copy-icon.svg";
import arrow from "../assets/icons/arrow-share.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import p_ing_1 from "../assets/images/cards/p_ing_1.webp";
import p_ing_2 from "../assets/images/cards/p_ing_2.webp";
import p_ing_3 from "../assets/images/cards/p_ing_3.webp";
import p_char_1 from "../assets/images/cards/p_char_1.webp";
import p_char_2 from "../assets/images/cards/p_char_2.webp";
import p_proc_1 from "../assets/images/cards/p_proc_1.webp";
import p_proc_2 from "../assets/images/cards/p_proc_2.webp";
import c_ing_1 from "../assets/images/cards/c_ing_1.webp";
import c_ing_2 from "../assets/images/cards/c_ing_2.webp";
import c_ing_3 from "../assets/images/cards/c_ing_3.webp";
import c_char_1 from "../assets/images/cards/c_char_1.webp";
import c_char_2 from "../assets/images/cards/c_char_2.webp";
import c_proc_1 from "../assets/images/cards/c_proc_1.webp";
import c_proc_2 from "../assets/images/cards/c_proc_2.webp";
import default1 from "../assets/images/cards/default_card_pandi.webp";
import default2 from "../assets/images/cards/default_card_chetti.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import tempImage from "../assets/images/cards/p_ing_2.webp";
import { useContext, useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { Context } from "../context";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);
const SharePopUp = ({ setShareOpen }) => {
  const divRef = useRef();
  const { cardsSelected } = useContext(Context);
  const [textSelected, setTextSelected] = useState(null);
  const [shareContent, setShareContent] = useState([
    {
      id: 1,
      selected: false,
      text: "I discovered that the characteristics on these cards that define Pandiyanad and Chettinad cuisines help you find out what the history and the culture around your food is.\n \nExplore this project to distinguish your meals: cuisine.quest",
    },
    {
      id: 2,
      selected: false,
      text: "Found this unique way to identify Pandiyanad and Chettinad cuisines! Just match the characteristics on the cards with your food—boom, you know where it’s from, along with the history around it.\n \nCurious? Check out this website - cuisine.quest",
    },
    {
      id: 3,
      selected: false,
      text: "Just discovered this! These cards highlight the unique traits of Pandiyanad and Chettinad cuisines.Think your dish matches the description? Time to find out!\n\n Put your foodie detective skills to the test—explore more here: cuisine.quest",
    },
  ]);

  const [cards, setCards] = useState([
    { id: 1, url: p_ing_1 },
    { id: 2, url: p_ing_2 },
  ]);

  useEffect(() => {
    let temp = [];
    let i = 0;
    for (let key in cardsSelected) {
      if (cardsSelected.hasOwnProperty(key)) {
        if (!cardsSelected[key]) continue;
        let obj = { id: i, url: null };
        switch (key) {
          case "p_ing_1":
            obj.url = p_ing_1;
            break;
          case "p_ing_2":
            obj.url = p_ing_2;
            break;
          case "p_ing_3":
            obj.url = p_ing_3;
            break;
          case "p_char_1":
            obj.url = p_char_1;
            break;
          case "p_char_2":
            obj.url = p_char_2;
            break;
          case "p_proc_1":
            obj.url = p_proc_1;
            break;
          case "p_proc_2":
            obj.url = p_proc_2;
            break;
          case "c_ing_1":
            obj.url = c_ing_1;
            break;
          case "c_ing_2":
            obj.url = c_ing_2;
            break;
          case "c_ing_3":
            obj.url = c_ing_3;
            break;
          case "c_char_1":
            obj.url = c_char_1;
            break;
          case "c_char_2":
            obj.url = c_char_2;
            break;
          case "c_proc_1":
            obj.url = c_proc_1;
            break;
          case "c_proc_2":
            obj.url = c_proc_2;
            break;
          default:
            break;
        }
        temp.push(obj);
      }
    }
    if (temp.length === 0) {
      temp.push({ id: 1, url: default1, selected: false });
      temp.push({ id: 2, url: default2, selected: false });
    }
    setCards(temp);
  }, [cardsSelected]);
  useEffect(() => {
    gsap.fromTo(
      "slide-text",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });
  const change = useRef({ value: 1 });
  const getImage = () => {
    var node = divRef.current;
    htmlToImage
      .toPng(node, {
        style: {
          scale: 0.95,
          outline: "5px solid #facd74",
          borderRadius: "50px",
          background:
            "linear-gradient(0deg, rgba(135,104,73,0.5) 0%, rgba(89,71,49,0.3) 100%)",
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
        console.log(error);
        alert("oops, something went wrong!");
      });
  };
  return (
    <div
      className="share-pop-up"
      style={{
        position: "fixed",
        top: "100vh",
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      <div
        className="share-page-backdrop"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          //   backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: -1,
          cursor: "pointer",
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
          border: "5px solid #facd74",
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
                transform: "translate(0, -100%)",
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
                transform: "translate(0, -100%)",
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                // backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: (95 * window.innerHeight) / 1080,

                backgroundImage:
                  "linear-gradient(0deg, rgba(135,104,73,0.5) 0%, rgba(89,71,49,0.3) 100%)",
                outline: "5px solid #facd74",
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

                  // backgroundColor: "rgba(0, 0, 0, 0.5)",
                  transform: "translate(0, 0)",
                  width: "85%",
                  maskImage:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 96%, rgba(255,255,255,0) 100%)",
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
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  navigation={{
                    nextEl: ".share-carousel-next-button",
                    prevEl: ".share-carousel-prev-button",
                    clickable: true,
                  }}
                >
                  {cards.map((item) => {
                    return (
                      <SwiperSlide>
                        <div
                          className="share-carousel-slide"
                          style={{
                            // width: 100,
                            // height: 100,
                            // height: "100%",
                            height: 320 * (window.innerHeight / 1080),
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={item.url}
                            style={{
                              // width: "100%",
                              height: "100%",
                            }}
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div
                className="share-current-select-text"
                style={{
                  marginTop: (60 * window.innerHeight) / 1080,
                  width: "100%",
                  // backgroundColor: "rgba(20, 0, 0, 0.5)",
                }}
              >
                {textSelected ? (
                  shareContent.map(
                    (ele, index) =>
                      ele.selected && (
                        <p
                          style={{
                            marginBottom: (20 * window.innerHeight) / 1080,
                            fontSize: (22 * window.innerWidth) / 1920,
                            // lineBreak: "auto",
                            whiteSpace: "preserve-breaks",
                            lineHeight: "1.5",
                            textAlign: "center",
                          }}
                        >
                          {ele.text}
                        </p>
                      )
                  )
                ) : (
                  <p
                    style={{
                      marginBottom: (20 * window.innerHeight) / 1080,
                      fontSize: (22 * window.innerWidth) / 1920,
                      // lineBreak: "auto",
                      whiteSpace: "preserve-breaks",
                      lineHeight: "1.5",
                      textAlign: "center",
                    }}
                  >
                    I discovered that the characteristics on these cards that
                    define Pandiyanad and Chettinad cuisines help you find out
                    what the history and the culture around your food is.
                    <br />
                    <br />
                    Explore this project to distinguish your meals:
                    <a
                      href="https://cuisine.quest"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      cuisine.quest
                    </a>
                  </p>
                )}
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
            borderLeft: "5px solid #facd74",
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
              backgroundColor: "#facd74",
              color: "black",
              textAlign: "center",
              padding: (32 * window.innerHeight) / 1080,
              fontSize: (32 * window.innerWidth) / 1920,
            }}
          >
            Select text and click share to
            <br /> copy to clipboard
          </div>
          <div
            className="share-overlay-content"
            style={{
              height: "60%",
              width: "100%",
              // backgroundColor: "blue",
              borderBottom: "5px solid #facd74",
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                        let flag = false;
                        temp.forEach((item) => {
                          if (item.id === ele.id) {
                            if (item.selected) {
                              item.selected = false;
                            } else {
                              item.selected = true;
                              flag = true;
                            }
                          } else {
                            item.selected = false;
                          }
                        });
                        setShareContent(temp);
                        setTextSelected(flag);
                        // console.log(shareContent);
                      }}
                    >
                      {ele.selected ? (
                        <img
                          src={ulCheck}
                          alt=""
                          style={{
                            width: (20 * window.innerWidth) / 1920,
                            height: (20 * window.innerHeight) / 1080,
                            margin: 0,
                            padding: 0,
                            transform: "translate(-100%, 25%)",
                            position: "absolute",
                          }}
                        />
                      ) : (
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
                          }}
                        />
                      )}

                      <p
                        key={index}
                        style={{
                          // fontSize: (20 * window.innerWidth) / 1920,
                          marginLeft: (20 * window.innerWidth) / 1920,
                          // padding: (10 * window.innerWidth) / 1920,
                          // color: "#facd74",
                          fontSize: (27 * window.innerWidth) / 1920,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {ele.text}
                      </p>
                    </li>
                    {index !== shareContent.length - 1 && (
                      <hr
                        style={{
                          border: "0.5px solid #facd74",
                          margin: "30px 0",
                          width: "70%",
                          opacity: 0.3,
                        }}
                      ></hr>
                    )}
                    {/* <hr
                      style={{
                        border: "0.5px solid #facd74",
                        margin: "30px 0",
                        width: "70%",
                        opacity: 0.3,
                      }}
                    ></hr> */}
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
                // borderRight: "5px solid #facd74",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontFamily: "TTtravels Next DemiBold",
                fontSize: (55 * window.innerWidth) / 1920,
              }}
              onClick={() => {
                getImage();
                const ele = document.querySelector(".share-overlay-copy-icon");
                gsap.to(".share-overlay-copy-icon", {
                  text: "Copying...",
                });
                setTimeout(() => {
                  gsap.to(".share-overlay-copy-icon", {
                    text: "Copied",
                  });
                  setTimeout(() => {
                    gsap.to(".share-overlay-copy-icon", {
                      text: "Share",
                    });
                  }, 2000);
                }, 1000);
              }}
            >
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopUp;
