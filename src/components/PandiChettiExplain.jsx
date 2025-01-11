import React, { useContext } from "react";
import { Context } from "../context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PandiChettiExplain = () => {
  const { cp } = useContext(Context);
  useGSAP(() => {
    gsap.fromTo(
      "#hover-display-heading-2",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      "#hover-display-text-2",
      {
        opacity: 0,
        y: -30,
      },
      {
        y: 0,

        opacity: 1,
        duration: 0.5,
      }
    );
  }, [cp]);
  const pandi = {
    title: "Pandiyanad",
    text: "Pandiyanad cuisine, from the southern districts of Tamil Nadu, is known for its rich and spicy flavors, often using tamarind and coconut. Signature dishes include mutton chukka, meen kuzhambu (fish curry), and kothu parotta, showcasing hearty and robust tastes.",
    region: "Southern Tamil Nadu, India",
  };
  const chetti = {
    title: "Chettinad",
    text: "Chettinad cuisine is famous for its bold, spicy flavors and extensive use of freshly ground spices. Known for dishes like Chettinad chicken, pepper chicken, and varuval (dry curries), it also features a variety of vegetarian delicacies like kaikari pirattal.",
    region: "Sivaganga District, Tamil Nadu, India",
  };
  if (cp === 1) {
    return (
      <div
        className="hover-display-1"
        style={{
          position: "fixed",
          bottom: (0 * window.innerHeight) / 1080,
          left: 80 * (window.innerWidth / 1920),
          zIndex: 1100,
          padding: (50 * window.innerWidth) / 1920,
        }}
      >
        <p
          style={{
            display: "inline-block",
            fontFamily: "TTtravels Next Bold",
            fontSize: (55 * window.innerWidth) / 1920,
            color: "#ffe8b8",
          }}
          id="hover-display-heading-2"
        >
          {chetti ? chetti.title : ""}{" "}
          <div
            id="hover-display-line"
            style={{
              height: 1,
              margin: 0,
              width: "100%",
              backgroundColor: "#ffe8b8",
            }}
          ></div>
        </p>

        <p
          id="hover-display-text-2"
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            width: (500 * window.innerWidth) / 1920,
            marginTop: (18.5 * window.innerWidth) / 1920,
          }}
        >
          {chetti ? chetti.text : ""}
        </p>
        <p
          id="hover-display-text-2"
          style={{
            color: "#af9f8c",
            fontSize: (21 * window.innerWidth) / 1920,
            marginTop: (15 * window.innerWidth) / 1920,
          }}
        >
          Region: {chetti ? chetti.region : ""}
        </p>
      </div>
    );
  } else if (cp === 2) {
    return (
      <div
        className="hover-display"
        style={{
          position: "fixed",
          bottom: (0 * window.innerHeight) / 1080,
          left: 80 * (window.innerWidth / 1920),
          zIndex: 1100,
          padding: (50 * window.innerWidth) / 1920,
        }}
      >
        <p
          style={{
            display: "inline-block",
            fontFamily: "TTtravels Next Bold",
            fontSize: (55 * window.innerWidth) / 1920,
            color: "#ffe8b8",
          }}
          id="hover-display-heading-2"
        >
          {pandi ? pandi.title : ""}
          <div
            id="hover-display-line"
            style={{
              height: 1,
              margin: 0,
              width: "100%",
              backgroundColor: "#ffe8b8",
            }}
          ></div>
        </p>

        <p
          id="hover-display-text-2"
          style={{
            fontSize: (27 * window.innerWidth) / 1920,
            width: (500 * window.innerWidth) / 1920,
            marginTop: (18.5 * window.innerWidth) / 1920,
          }}
        >
          {pandi ? pandi.text : ""}
        </p>
        <p
          id="hover-display-text-2"
          style={{
            color: "#af9f8c",
            fontSize: (21 * window.innerWidth) / 1920,
            marginTop: (15 * window.innerWidth) / 1920,
          }}
        >
          Region: {pandi ? pandi.region : ""}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default PandiChettiExplain;
