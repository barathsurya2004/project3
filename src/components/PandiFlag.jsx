import pandiFlag from "../assets/icons/pandi-flag.svg";
import pandiIcon from "../assets/icons/pandisvg.svg";
import holder from "../assets/icons/placeholder.svg";
const PandiFlag = () => {
  return (
    <div
      className="pandi-flag-content"
      style={{
        display: "flex",
        position: "relative",
        width: "90%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "110vh",
          width: "50%",
          paddingTop: 300 * (window.innerHeight / 1080),
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            className="pandi-icon-container"
            style={{
              position: "absolute",
              transform: "translateY(-100%)",
              left: 0,
            }}
          >
            <img
              src={pandiIcon}
              alt=""
              style={{
                height: 250 * (window.innerHeight / 1080),
              }}
            />
          </div>
          <h1
            style={{
              fontSize: (89 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next DemiBold",
              color: "#BB8BE8",
            }}
          >
            Pandiyanad
            <br />
            Cuisine
          </h1>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={pandiFlag}
          alt=""
          style={{
            position: "absolute",
            top: "25vh",
            // transform: "translateY(-50%)",
            right: 0,
            height: 360 * (window.innerHeight / 1080),
          }}
        />
      </div>
      <div
        className=""
        style={{
          width: "100%",
          position: "relative",
          paddingTop: "15%",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            right: 0,

            marginTop: "15%",
            height: "85%",

            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              height: 300 * (window.innerHeight / 1080),
            }}
            src={holder}
            alt=""
          />
          <img
            style={{
              height: 300 * (window.innerHeight / 1080),
            }}
            src={holder}
            alt=""
          />
          <img
            style={{
              height: 300 * (window.innerHeight / 1080),
            }}
            src={holder}
            alt=""
          />
        </div>
        <div
          className="pandi-flag-content-actual"
          style={{
            width: "60%",
            padding: "0 10%",
          }}
        >
          <h2
            style={{
              fontSize: (55 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next DemiBold",
              color: "#BB8BE8",
              margin: 0,
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: (27 * window.innerHeight) / 1080,
              fontFamily: "Filson Pro Regular",
              color: "#BB8BE8",
              marginBottom: 70 * (window.innerHeight / 1080),
            }}
          >
            Pandiyanad cuisine offers a wide variety of dishes for every part of
            the meal, constantly evolving while retaining the wisdom of past
            generations. From quick snacks to slow-cooked delicacies, pandiyanad
            Cuisine has it all, the cuisine is deeply inspired by the Pandiyan
            kings. the culinary heritage is reflected by the Modern-day Madurai
            and its surrounding villages, once the capital of the Pandiyan
            dynasty,. The Pandiyans, key rulers of South India, were known for
            their extensive trade networks, making Madurai a bustling city that
            never sleeps, along with the food too!
          </p>
          <h2
            style={{
              fontSize: (55 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next DemiBold",
              color: "#BB8BE8",
              margin: 0,
            }}
          >
            History
          </h2>
          <p
            style={{
              fontSize: (27 * window.innerHeight) / 1080,
              fontFamily: "Filson Pro Regular",
              color: "#BB8BE8",
              marginBottom: 70 * (window.innerHeight / 1080),
            }}
          >
            Modern Pandiyanad cuisine has deep roots in the Pandiyan kings' era.
            The variety of foods, influenced by international trade, reflects
            the Pandiyans' connections with various parts of the world. The wide
            array of seafood dishes can be traced back to the overseas
            territories ruled by the Pandiyans. Food was integral to the city
            then and continues to be so today, every meal is a celebration!
          </p>
          <h2
            style={{
              fontSize: (55 * window.innerHeight) / 1080,
              fontFamily: "TTtravels Next DemiBold",
              color: "#BB8BE8",
              margin: 0,
            }}
          >
            Current
          </h2>
          <p
            style={{
              fontSize: (27 * window.innerHeight) / 1080,
              fontFamily: "Filson Pro Regular",
              color: "#BB8BE8",
              marginBottom: 70 * (window.innerHeight / 1080),
            }}
          >
            The Pandiyans' culinary legacy lives on with a lavish variety of
            foods and unforgettable tastes. Walking the streets of Madurai and
            its neighboring villages, one can find food readily available in
            welcoming homes and restaurants. However, a modern problem persists:
            the identity of Pandiyanad cuisine is being forgotten. Many locals
            are unaware of the historical significance of their cuisines and
            their kitchens and often mistake it for other nearby cuisines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PandiFlag;
