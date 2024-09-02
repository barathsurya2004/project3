import CardsCanvas from "./CardsCanvas";
import button from "../assets/icons/cardButton.svg";
import activePage from "../assets/icons/pagination.svg";
import gsap from "gsap";
const CardHolder = ({ children }) => {
  return (
    <>
      <div
        className="left-button-cards"
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          zIndex: 1000,
        }}
      >
        <img
          src={button}
          style={{
            width: (24 * window.innerWidth) / 1920,
            transform: "rotate(180deg)",
            opacity: 0.3,
            cursor: "pointer",
          }}
          alt=""
          onPointerEnter={(e) => {
            gsap.to(e.target, {
              opacity: 1,
              duration: 0.2,
            });
          }}
          onPointerLeave={(e) => {
            gsap.to(e.target, {
              opacity: 0.3,
              duration: 0.2,
            });
          }}
        />
      </div>
      <CardsCanvas>{children}</CardsCanvas>
      <div
        className="right-button-cards"
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          zIndex: 1000,
        }}
      >
        <img
          src={button}
          style={{
            width: (24 * window.innerWidth) / 1920,
            opacity: 0.3,
            cursor: "pointer",
          }}
          alt=""
          onPointerEnter={(e) => {
            gsap.to(e.target, {
              opacity: 1,
              duration: 0.2,
            });
          }}
          onPointerLeave={(e) => {
            gsap.to(e.target, {
              opacity: 0.3,
              duration: 0.2,
            });
          }}
        />
      </div>
      <div
        className="pagination-cards"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
        }}
      >
        <div
          className="pagination-button"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "black",
            borderRadius: "50%",
            margin: "0 5px",
          }}
        >
          <img
            src={activePage}
            style={{
              width: (15 * window.innerWidth) / 1920,
              height: (15 * window.innerHeight) / 1080,
            }}
            alt=""
          />
        </div>
        <div
          className="pagination-button"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "black",
            borderRadius: "50%",
            margin: "0 5px",
          }}
        >
          <img
            src={activePage}
            style={{
              width: (15 * window.innerWidth) / 1920,
              height: (15 * window.innerHeight) / 1080,
            }}
            alt=""
          />
        </div>
        <div
          className="pagination-button"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "black",
            borderRadius: "50%",
            margin: "0 5px",
          }}
        >
          <img
            src={activePage}
            style={{
              width: (15 * window.innerWidth) / 1920,
              height: (15 * window.innerHeight) / 1080,
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CardHolder;
