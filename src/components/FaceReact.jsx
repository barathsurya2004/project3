import { useContext, useEffect, useRef } from "react";
import bolt from "../assets/icons/lightning bolt.svg";
import { Context } from "../context";
import pandiIcon from "../assets/icons/pandisvg.svg";
import pandiVote from "../assets/icons/pandivote.svg";
import chettiIcon from "../assets/icons/chettisvg.svg";
import chettiVote from "../assets/icons/chettivote.svg";
import gsap from "gsap";
import { useState } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { VoteChetti } from "../../public/Models/Cards/Voting/VoteChetti";
import { VotePandi } from "../../public/Models/Cards/Voting/VotePandi";
import { getDocFromDb, updateDoc } from "../firebaseUtils";
gsap.registerPlugin(ScrollTrigger);
const FaceReact = () => {
  const [selected, setSelected] = useState(null);
  const styles = {
    para: {
      fontSize: (34 * window.innerHeight) / 1080,
      fontFamily: "TTtravels Next DemiBold",
      textAlign: "center",
      wrap: "nowrap",
      width: "100%",
      fontKerning: "none",
      margin: 0,
    },
  };

  const { hovered, setHovered } = useContext(Context);
  const [pandiVotes, setPandiVotes] = useState(0);
  const [chettiVotes, setChettiVotes] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const data = await getDocFromDb(
        "VotePandiVsChetti",
        "axGd1qsAOJBNFQ1mHR4W"
      );
      setChettiVotes(data.chetti);
      setPandiVotes(data.pandi);
    }
    fetchData();
  }, []);

  const PandihandleClick = () => {
    if (!selected) {
      updateDoc("VotePandiVsChetti", "axGd1qsAOJBNFQ1mHR4W", {
        chetti: chettiVotes,
        pandi: pandiVotes + 1,
      });
      setPandiVotes(pandiVotes + 1);
      setSelected("pandi");
    } else {
      if (selected === "pandi") {
        updateDoc("VotePandiVsChetti", "axGd1qsAOJBNFQ1mHR4W", {
          chetti: chettiVotes,
          pandi: pandiVotes - 1,
        });
        setPandiVotes(pandiVotes - 1);
        setSelected(null);
      } else if (selected == "chetti") {
        updateDoc("VotePandiVsChetti", "axGd1qsAOJBNFQ1mHR4W", {
          chetti: chettiVotes - 1,
          pandi: pandiVotes + 1,
        });
        setPandiVotes(pandiVotes + 1);
        setChettiVotes(chettiVotes - 1);
        setSelected("pandi");
      }
    }
  };
  const ChettihandleClick = () => {
    if (!selected) {
      updateDoc("VotePandiVsChetti", "axGd1qsAOJBNFQ1mHR4W", {
        chetti: chettiVotes + 1,
        pandi: pandiVotes,
      });
      setChettiVotes(chettiVotes + 1);
      setSelected("chetti");
    } else {
      if (selected === "chetti") {
        updateDoc("VotePandiVsChetti", "axGd1qsAOJBNFQ1mHR4W", {
          chetti: chettiVotes - 1,
          pandi: pandiVotes,
        });
        setChettiVotes(chettiVotes - 1);
        setSelected(null);
      } else if (selected == "pandi") {
        updateDoc("VotePandiVsChetti", "axGd1qsAOJBNFQ1mHR4W", {
          chetti: chettiVotes + 1,
          pandi: pandiVotes - 1,
        });
        setChettiVotes(chettiVotes + 1);
        setPandiVotes(pandiVotes - 1);
        setSelected("chetti");
      }
    }
  };
  const handleMouseEnterPandi = () => {
    const tl = gsap.timeline();
    const split = new SplitType(".pandi-text");
    split.words.forEach((word) => {
      word.style.display = "flex";
      word.style.flexWrap = "nowrap";
      word.style.justifyContent = "center";
    });
    split.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";

      char.style.color = "#bf8eed";
      char.style.display = "inline-block";
    });
    tl.to(split.chars, {
      duration: 0.1,
      y: -10,
      opacity: 0,
      stagger: 0.02,
    });
    const split2 = new SplitType(".pandi-vote");
    gsap.to(".pandi-vote", { duration: 0.005, opacity: 1 });
    split2.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";
      char.style.color = "#bf8eed";
      char.style.display = "inline-block";
      char.style.opacity = 0;
    });
    tl.fromTo(
      split2.chars,
      {
        y: 10,
        opacity: 0,
      },
      {
        duration: 0.1,
        y: 0,
        opacity: 1,
        stagger: 0.02,
      },
      "-=0.3"
    );
    // gsap.to(".pandi-vote", { duration: 0.5, opacity: 1 });
  };
  const handleMouseLeavePandi = () => {
    const tl = gsap.timeline();

    const split2 = new SplitType(".pandi-vote");
    split2.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";
      char.style.color = "#bf8eed";
      char.style.display = "inline-block";
    });
    tl.to(split2.chars, {
      duration: 0.1,
      y: 10,
      opacity: 0,
      stagger: 0.02,
    });
    const split = new SplitType(".pandi-text");
    split.words.forEach((word) => {
      word.style.display = "flex";
      word.style.flexWrap = "nowrap";
      word.style.justifyContent = "center";
    });
    split.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";
      char.style.color = "#bf8eed";
    });
    tl.fromTo(
      split.chars,
      {
        y: -10,
        opacity: 0,
      },
      {
        duration: 0.1,
        y: 0,
        opacity: 1,
        stagger: 0.02,
      }
    );
  };

  const handleMouseEnterChetti = () => {
    const tl = gsap.timeline();
    const split = new SplitType(".chetti-texts");
    split.words.forEach((word) => {
      word.style.display = "flex";
      word.style.flexWrap = "nowrap";
      word.style.justifyContent = "center";
    });
    split.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";
      char.style.color = "#CC7272";
      char.style.display = "inline-block";
    });
    tl.to(split.chars, {
      duration: 0.1,
      y: -10,
      opacity: 0,
      stagger: 0.02,
    });
    const split2 = new SplitType(".chetti-vote");
    gsap.to(".chetti-vote", { duration: 0.005, opacity: 1 });
    split2.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";
      char.style.color = "#CC7272";
      char.style.display = "inline-block";
      char.style.opacity = 0;
    });
    tl.fromTo(
      split2.chars,
      {
        y: 10,
        opacity: 0,
      },
      {
        duration: 0.1,
        y: 0,
        opacity: 1,
        stagger: 0.02,
      },
      "-=0.3"
    );
  };
  const handleMouseLeaveChetti = () => {
    const tl = gsap.timeline();

    const split2 = new SplitType(".chetti-vote");
    split2.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";
      char.style.color = "#CC7272";
      char.style.display = "inline-block";
    });
    tl.to(split2.chars, {
      duration: 0.1,
      y: 10,
      opacity: 0,
      stagger: 0.02,
    });
    const split = new SplitType(".chetti-texts");
    split.words.forEach((word) => {
      word.style.display = "flex";
      word.style.flexWrap = "nowrap";
      word.style.justifyContent = "center";
    });
    split.chars.forEach((char) => {
      char.style.fontFamily = "TTtravels Next DemiBold";
      char.style.color = "#CC7272";
    });
    tl.fromTo(
      split.chars,
      {
        y: -10,
        opacity: 0,
      },
      {
        duration: 0.1,
        y: 0,
        opacity: 1,
        stagger: 0.02,
      }
    );
  };
  useGSAP(() => {
    // gsap.fromTo(
    //   ".face-reacting-page",
    //   { display: "none", opacity: 0 },
    //   {
    //     display: "block",
    //     opacity: 1,
    //     duration: 0.2,
    //     scrollTrigger: {
    //       trigger: ".face-reacting-page-helper",
    //       start: "top 90%",
    //       toggleActions: "play none none reverse",
    //     },
    //     ease: "none",
    //   }
    // );
    gsap.fromTo(
      ".face-reacting-page",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".ending-page-helper",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        onComplete: (e) => {
          console.log(e);
        },
        ease: "none",
      }
    );
  });
  return (
    <>
      <div
        className="face-reacting-page-helper"
        style={{
          height: "100vh",
          width: "100%",
        }}
      ></div>
      <div
        className="face-reacting-page"
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          position: "fixed",
          top: "0vh",
          left: 0,
          zIndex: 500,
          // display: "none",
          opacity: 0,
          transform: "translateY(-100vh)",
        }}
      >
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
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
              height: "100vh",
              width: "100%",
            }}
            onComplete={() => {
              console.log("completed");
              // gsap.to(".sharing-page", {
              //   delay: -0.5,
              //   opacity: 0,
              // });
              gsap.to(".actual-voting-page", {
                opacity: 1,
              });
            }}
          />
        </div> */}
        <div
          className="actual-voting-page"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 500,
          }}
        >
          <div
            className="bottom-text"
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translate(-50%, 0)",
              color: "#FFF3DC",
              fontSize: (55 * window.innerHeight) / 1080,
              zIndex: 505,
              fontFamily: "TTtravels Next DemiBold",
              textAlign: "center",
              textWrap: "nowrap",
              pointerEvents: "none",
            }}
          >
            Which one would you try first?
          </div>
          <div
            className="react-cards"
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              // zIndex: 505,
            }}
          >
            <div
              className="pandi-react-card"
              style={{
                position: "absolute",
                top: "19.25%",
                left: "10%",
                zIndex: 505,
                height: (250 * window.innerHeight) / 1080,
                width: (250 * window.innerHeight) / 1080,
              }}
              onClick={PandihandleClick}
              onPointerEnter={() => {
                setHovered(true);
                handleMouseEnterPandi();
                handleMouseEnterChetti();
              }}
              onPointerLeave={() => {
                setHovered(false);
                handleMouseLeavePandi();
                handleMouseLeaveChetti();
              }}
            >
              <Canvas
                style={{
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <PerspectiveCamera position={[0, 0, 3]} makeDefault />
                <ambientLight />
                <VotePandi />
              </Canvas>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    display: "flex",
                    flexWrap: "nowrap",
                    flexDirection: "column",
                    zIndex: 505,
                  }}
                >
                  <p
                    className="pandi-text"
                    style={{
                      display: "flex",
                      flexWrap: "nowrap",
                      ...styles.para,
                      color: "#bf8eed",
                    }}
                  >
                    Pandiyanad
                  </p>
                  <p
                    className="pandi-text"
                    style={{
                      ...styles.para,
                      color: "#bf8eed",
                    }}
                  >
                    Cuisine
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",

                    zIndex: 505,
                  }}
                >
                  <p
                    className="pandi-vote"
                    style={{
                      ...styles.para,
                      color: "#bf8eed",
                      opacity: 0,
                    }}
                  >
                    ~Vote~
                  </p>
                  <p
                    style={{
                      ...styles.para,
                      color: "#bf8eed",
                    }}
                  >
                    {pandiVotes}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="chetti-react-card"
              style={{
                position: "absolute",
                top: "19.25%",
                right: "10%",
                zIndex: 505,
                height: (250 * window.innerHeight) / 1080,
                width: (250 * window.innerHeight) / 1080,
              }}
              onPointerEnter={() => {
                setHovered(true);
                handleMouseEnterChetti();
                handleMouseEnterPandi();
              }}
              onPointerLeave={() => {
                setHovered(false);
                handleMouseLeavePandi();
                handleMouseLeaveChetti();
              }}
              onClick={ChettihandleClick}
            >
              <Canvas
                style={{
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <PerspectiveCamera position={[0, 0, 3]} makeDefault />
                <ambientLight />
                <VoteChetti />
              </Canvas>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "nowrap",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 505,
                  }}
                >
                  <p
                    className="chetti-texts"
                    style={{ ...styles.para, color: "#CC7272" }}
                  >
                    Chettinad
                  </p>
                  <p
                    className="chetti-texts"
                    style={{
                      ...styles.para,
                      color: "#CC7272",
                    }}
                  >
                    Cuisine
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    zIndex: 505,
                  }}
                >
                  <p
                    className="chetti-vote"
                    style={{
                      ...styles.para,
                      color: "#CC7272",
                      opacity: 0,
                    }}
                  >
                    ~Vote~
                  </p>
                  <p
                    style={{
                      ...styles.para,
                      color: "#CC7272",
                    }}
                  >
                    {chettiVotes}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={bolt}
            style={{
              position: "absolute",
              width: (576 * window.innerHeight) / 1080,
              top: (-58.15 * window.innerHeight) / 1080,
              transform: "translate(-50%, 0)",
              left: "50%",
              zIndex: 1,
            }}
          />
          <div
            className="pandiyanad-react"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "48%",
              background: "#A693CC",
              height: "100%",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0))",
              maskSize: "100% 100%",
            }}
          ></div>
          <div
            className="chettinad-react"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "52%",
              background: "#CC7272",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0))",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default FaceReact;
