const ThereIsMore = () => {
  return (
    <div
      className="there's-more-container"
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: (305 * window.innerHeight) / 1080,
          margin: 0,
          width: "100%",
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
      <p
        style={{
          fontSize: (27 * window.innerWidth) / 1920,
          fontFamily: "TTtravels Next DemiBold",
          textAlign: "center",
          margin: (25 * window.innerHeight) / 1080,
          maxWidth: (1005 * window.innerWidth) / 1920,
        }}
      >
        On top of their rich history, diverse cultures, and widespread
        popularity, these cuisines offer a unique culinary experience that
        continues to captivate and delight people around the world. But wait!
      </p>
      <div
        style={{
          height: (40 * window.innerHeight) / 1080,
          margin: 0,
          width: "100%",
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
          fontSize: (89 * window.innerWidth) / 1920,
          fontFamily: "TTtravels Next DemiBold",
          textAlign: "center",
          margin: (25 * window.innerHeight) / 1080,
          color: "#D3AD62",
        }}
      >
        THERE’S MORE!
      </h1>
      <div
        style={{
          margin: 0,
          width: "100%",
          height: (500 * window.innerHeight) / 1080,
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
    </div>
  );
};

export default ThereIsMore;
