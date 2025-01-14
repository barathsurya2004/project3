import CardsCanvas from "./CardsCanvas";
import button from "../assets/icons/chettiArrow.svg";
import activePage from "../assets/icons/chettiPagi.svg";
import gsap from "gsap";
import { Children, useContext, useState } from "react";
import { Context } from "../context";
import { ChettiCross } from "../../public/Models/Cards/selection/Chetti_cross1";
import { ChettiTick } from "../../public/Models/Cards/selection/Chetti_tick1";
const CardHolder = ({ children, idd, reg }) => {
  const [active, setActive] = useState(0);
  const { setCardInteractions, cardSelectionHelper, changed, setChanged } =
    useContext(Context);
  const [selected, setSelected] = useState(false);
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
        onClick={() => {
          setActive((active - 1 + children.length) % children.length);
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

      <CardsCanvas
        cur={active}
        idd={idd}
        changed={false}
        onDoubleClick={() => {
          const temp = reg + "_" + idd + "_" + (active + 1);
          cardSelectionHelper(temp);
          setSelected(!selected);
          setChanged(true);
          setTimeout(() => {
            setChanged(false);
          }, 2000);
        }}
        onClick={() => {
          setCardInteractions(true);
        }}
      >
        {/* <ChettiCross /> */}
        <ChettiCross selected={!selected} />
        <ChettiTick selected={selected} />
        {Children.map(children, (child, index) => {
          if (index === active) {
            return child;
          }
        })}
      </CardsCanvas>
      <div
        className="right-button-cards"
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          zIndex: 1000,
        }}
        onClick={() => {
          setActive((active + 1) % children.length);
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
          bottom: "13%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
        }}
      >
        {Children.map(children, (child, index) => {
          return (
            <div
              className="pagination-button"
              style={{
                width: "10px",
                height: "10px",
                // backgroundColor: "black",
                borderRadius: "50%",
                margin: "0 5px",
              }}
              onClick={() => {
                setActive(index);
              }}
            >
              <img
                src={activePage}
                style={{
                  width: (15 * window.innerWidth) / 1920,
                  height: (15 * window.innerHeight) / 1080,
                  opacity: index === active ? 1 : 0.3,
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
