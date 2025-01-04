import { useProgress } from "@react-three/drei";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import "./Loader.css";
import back from "../assets/images/fin_load_1.png";
import inner from "../assets/images/fin_load_2.png";
import inner1 from "../assets/images/fin_load_3.png";
gsap.registerPlugin(CustomEase);
const Loader = () => {
  const { progress } = useProgress();
  const hori = 11;
  const verti = 19;
  const { loading, setLoading } = useContext(Context);
  const completedRef = useRef();
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        gsap.fromTo(
          ".inner-loader",
          {
            width: "35%",
          },
          {
            width: "120%",
            duration: 5,
            ease: "power4.out",
          }
        );
        gsap.fromTo(
          ".back-loader-inner",
          {
            width: "35%",
          },
          {
            width: "120%",
            duration: 5,
            ease: "power4.out",
          }
        );
      }, 2000);
      setTimeout(() => {
        completedRef.current.pause();
        gsap.to(".text", {
          opacity: 0,
          onComplete: () => {
            setLoading(false);
          }, //
          duration: 1,
        });

        gsap.to(".loadingbar-container", {
          opacity: 0,
          duration: 1.5,
        });
      }, 5000);
    }
    gsap.to(".inner-loader", {
      width: `${35 * (progress / 100)}%`,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(".back-loader-inner", {
      width: `${35 * (progress / 100)}%`,
      duration: 2,
      ease: "power4.out",
    });
    if (!loading) {
      gsap.to(".loader", {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",

        onComplete() {
          gsap.set(".loader", {
            display: "none",
          });
        },
      });
    }
  }, [progress, loading]);
  useEffect(() => {
    gsap.fromTo(
      ".loadingbar-container",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to("#glow-for-loader", {
      duration: 0.8,
      opacity: 0.3,
      ease: "power4.out",
    }).to("#glow-for-loader", {
      duration: 0.8,
      opacity: 0.7,
      ease: "power4.out",
    });
  });
  let count = 0;
  let index = 0;
  const content = [
    "we are what we eat",
    "food and travels, best buds forever",
    "go anywhere, right from your kitchen",
    "what nourishes us is more than just food",
    "travel begins with a taste",
    "every flavour has a story",
    "great adventures start at the dinner table",
    "food is identity",
    "sometimes, eating is an experience",
  ];
  const [i, setI] = useState(Math.floor(Math.random() * content.length));
  const [previ, setPrevi] = useState(i);
  useGSAP(() => {
    // const testing = gsap.to(".text", {
    //   opacity: 1,
    //   duration: 1,
    //   // ease: CustomEase.create("custom", "M0,0 C0.1,0 0.9,1 1,1"),
    //   repeat: -1,

    //   onRepeat() {
    //     if (count % 2 !== 0) {
    //       index = Math.floor(Math.random() * content.length);
    //       if (index === previ) {
    //         index = (index + 1) % content.length;
    //       } else {
    //         setI(index % content.length);
    //       }
    //     }
    //     count += 1;
    //   },
    //   yoyo: true,
    // });
    const mastertl = gsap.timeline({
      repeat: -1,

      onRepeat: () => {
        index = Math.floor(Math.random() * content.length);
        if (index === previ) {
          index = (index + 1) % content.length;
        }
        setI(index % content.length);
        setPrevi(index % content.length);
        // setI((previ + 1) % content.length);
      },
    });
    const tl = gsap.timeline();
    tl.to(".text", {
      duration: 1,
      opacity: 1,
      ease: CustomEase.create("custom", "M0,0 C0.1,0 0.9,1 1,1"),
    }).to(".text", {
      delay: 1,
      duration: 1,
      opacity: 0,
      ease: CustomEase.create("custom", "M0,0 C0.1,0 0.9,1 1,1"),
    });

    mastertl.add(tl);
    completedRef.current = mastertl;
  });
  return (
    <div
      className="loader"
      style={{
        // background: "black",
        zIndex: 9999,
      }}
    >
      {/* <div className="bg-container">
        <div className="horizontal-lines">
          {Array.from({ length: hori }, (item, index) => (
            <div
              className="grid-lines-hori"
              key={index}
              style={{
                top: `${(window.innerHeight / 8) * index}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="vertical-lines">
          {Array.from({ length: verti }, (item, index) => (
            <div className="grid-lines-verti" key={index}></div>
          ))}
        </div>
      </div> */}
      <div className="loadingbar-container">
        <div
          className="text"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {content[i]}
        </div>
        {/* <div className="bar-glow">
          <div className="bar-glow-small">
            <div className="bar-glow-large"></div>
          </div>
          <div className="bar-glow-inner"></div>
        </div> */}
        <div
          className="bar-load"
          style={{
            width: (690 * window.innerWidth) / 1920,
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            // background: "white",
            transform: `translateX(${(20 * window.innerWidth) / 1920}px)`,
            marginTop: (20 * window.innerHeight) / 1080,
            height: (5 * window.innerHeight) / 1080,
            // background: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div
            className="inner-loader"
            style={{
              width: 0,
              height: (250 * window.innerHeight) / 1080,
              // background: "white",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <img
              src={inner1}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                bottom: 0,
                opacity: 0.7,
                // mixBlendMode: "screen",
                transform: "translate(0%,-50%)",
              }}
              id="glow-for-loader"
            />
            <img
              src={inner}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                bottom: 0,
                // mixBlendMode: "screen",
                transform: "translate(0%,-50%)",
              }}
            />
          </div>
          <div
            className="back-loader"
            style={{
              position: "absolute",
              top: 0,
              margin: 0,
              width: "120%",
              height: (250 * window.innerHeight) / 1080,
              zIndex: -1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <img
              src={back}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
                transform: "translate(0%,-50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
