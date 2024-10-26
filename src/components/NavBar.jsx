import place from "../assets/icons/navPlace.svg";

import arrow from "../assets/icons/navToggleArrow.svg";
const NavBar = () => {
  return (
    <div
      className="nav-bar-cont"
      style={{
        position: "absolute",
        zIndex: 1000,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="nav-bar"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          // borderRadius: "5rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "5rem",
            border: "5px solid #d3ad62",
            clipPath: "polygon(0 5%, 100% 5%, 100% 95%, 0 95%)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img
            style={{
              width: "4rem",
              height: "4rem",
              margin: 0,
            }}
            src={place}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img
            style={{
              width: "4rem",
              height: "4rem",
              margin: 0,
            }}
            src={place}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img
            style={{
              width: "4rem",
              height: "4rem",
              margin: 0,
            }}
            src={place}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img
            style={{
              width: "4rem",
              height: "4rem",
              margin: 0,
            }}
            src={place}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img
            style={{
              width: "4rem",
              height: "4rem",
              margin: 0,
            }}
            src={place}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
