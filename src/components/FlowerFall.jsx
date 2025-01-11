import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../context";
import gsap from "gsap";
import pic1 from "../assets/icons/flowers/1.svg";
import pic2 from "../assets/icons/flowers/2.svg";
import pic3 from "../assets/icons/flowers/3.svg";
import pic4 from "../assets/icons/flowers/4.svg";
import pic5 from "../assets/icons/flowers/5.svg";
import pic6 from "../assets/icons/flowers/6.svg";
import pic7 from "../assets/icons/flowers/7.svg";
import pic8 from "../assets/icons/flowers/8.svg";
import pic9 from "../assets/icons/flowers/9.svg";
import pic10 from "../assets/icons/flowers/10.svg";
import pic11 from "../assets/icons/flowers/11.svg";
import pic12 from "../assets/icons/flowers/12.svg";
const FlowerFall = () => {
  const { FlowerFall, pointer } = useContext(Context);
  const clicked = useRef(false);

  const lastMoveTime = useRef(0); // To track the last image generation time

  const handlePointerDown = () => {
    clicked.current = true;
  };
  const randomImage = () => {
    const images = [
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
      pic9,
      pic10,
      pic11,
      pic12,
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  const handlePointerMove = (e) => {
    if (!clicked.current) return;
    const currentTime = Date.now();
    if (currentTime - lastMoveTime.current < 100) return; // 1000ms = 1 second delay
    lastMoveTime.current = currentTime;

    const { clientX, clientY } = e;
    const img = document.createElement("img");
    img.src = randomImage();
    img.style.position = "fixed";
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.left = `${clientX - 50}px`;
    img.style.top = `${clientY - 50}px`;

    document.body.appendChild(img);
    const tl = gsap.timeline();
    const size = 1.5 - Math.random() * 1;
    tl.to(img, {
      scale: size - 0.1,
      duration: 0.2,
    })
      .to(img, {
        scale: size,
        duration: 0.2,
      })
      .to(img, {
        duration: 1,
        delay: 0.5,
        y: "100vh",
        rotate: Math.random() * 360,

        x: (Math.random() * window.innerWidth) / 10,

        opacity: 0,
        ease: "power4.inOut",
        onComplete: () => {
          document.body.removeChild(img);
        },
      });
  };

  const handlePointerUp = () => {
    clicked.current = false;
  };

  useEffect(() => {
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    const tl = gsap.timeline();
    for (let i = 0; i < 10; i++) {
      const img = document.createElement("img");
      img.src = randomImage();
      img.style.position = "fixed";
      img.style.width = "150px";
      img.style.height = "150px";
      img.style.left = `${pointer[0] - 50}px`;
      img.style.top = `${pointer[1] - 50}px`;
      document.body.appendChild(img);
      gsap.to(img, {
        duration: 1,
        delay: 0.5,
        y: 500 * (Math.random() - 0.5),
        x: 500 * (Math.random() - 0.5),
        opacity: 0,
        ease: "power4.inOut",
        onComplete: () => {
          document.body.removeChild(img);
        },
      });
    }
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default FlowerFall;
