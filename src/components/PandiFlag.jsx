import pandiFlag from "../assets/icons/pandi-flag.svg";
import pandiIcon from "../assets/icons/pandisvg.svg";
import holder from "../assets/icons/placeholder.svg";
import P_1 from "/videos/P-1_1.webm";
import P_2 from "/videos/P-2_1.webm";
import P_3 from "/videos/P-3_1.webm";
import flagAnim from "/videos/flagg_pandi.webm";
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
          // justifyContent: "center",
          alignItems: "center",
          // height: "110vh",
          paddingTop: 300 * (window.innerHeight / 1080),
        }}
      >
        <div
          style={{
            position: "relative",
            // background: "white",
            marginLeft: "10%",
            transform: "translateY(85%)",
          }}
        >
          <div
            className="pandi-icon-container"
            style={{
              position: "absolute",
              transform: "translateY(-105%)",
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
              color: "#bf8eed",
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
        <div
          style={{
            position: "absolute",
            top: "25vh",
            // transform: "translateY(-50%)",
            right: 0,
            height: 360 * (window.innerHeight / 1080),
          }}
        >
          <video
            // ref={videoRef}
            playsInline
            muted
            autoPlay
            style={{
              height: 360 * (window.innerHeight / 1080),
            }}
            loop
            preload="metadata"
          >
            <source id="video-source" src={flagAnim} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        className=""
        style={{
          width: "100%",
          position: "relative",
          paddingTop: "50vh",
        }}
      >
        <div
          className="pandi-flag-content-actual"
          style={{
            width: "100%",
            padding: "0 10%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              // background: "white",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: (55 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next DemiBold",
                  color: "#bf8eed",
                  margin: 0,
                  width: "60%",
                }}
              >
                About
              </h2>
              <p
                style={{
                  fontSize: (27 * window.innerHeight) / 1080,
                  fontFamily: "Filson Pro Regular",
                  color: "#bf8eed",
                  width: "60%",
                  marginBottom: 70 * (window.innerHeight / 1080),
                }}
              >
                Pandiyanad cuisine offers a wide variety of dishes for every
                part of the meal, constantly evolving while retaining the wisdom
                of past generations. From quick snacks to slow-cooked
                delicacies, pandiyanad Cuisine has it all, the cuisine is deeply
                inspired by the Pandiyan kings. the culinary heritage is
                reflected by the Modern-day Madurai and its surrounding
                villages, once the capital of the Pandiyan dynasty,. The
                Pandiyans, key rulers of South India, were known for their
                extensive trade networks, making Madurai a bustling city that
                never sleeps, along with the food too!
              </p>
            </div>
            <video
              // ref={videoRef}
              playsInline
              muted
              autoPlay
              style={{
                height: 300 * (window.innerHeight / 1080),
              }}
              loop
              preload="metadata"
            >
              <source id="video-source" src={P_1} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* <img
              style={{
                height: 300 * (window.innerHeight / 1080),
              }}
              src={holder}
              alt=""
            /> */}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: (55 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next DemiBold",
                  color: "#bf8eed",
                  margin: 0,
                  width: "60%",
                }}
              >
                History
              </h2>
              <p
                style={{
                  fontSize: (27 * window.innerHeight) / 1080,
                  fontFamily: "Filson Pro Regular",
                  color: "#bf8eed",
                  width: "60%",
                  marginBottom: 70 * (window.innerHeight / 1080),
                }}
              >
                Modern Pandiyanad cuisine has deep roots in the Pandiyan kings'
                era. The variety of foods, influenced by international trade,
                reflects the Pandiyans' connections with various parts of the
                world. The wide array of seafood dishes can be traced back to
                the overseas territories ruled by the Pandiyans. Food was
                integral to the city then and continues to be so today, every
                meal is a celebration!
              </p>
            </div>
            <video
              // ref={videoRef}
              playsInline
              muted
              autoPlay
              style={{
                height: 300 * (window.innerHeight / 1080),
              }}
              loop
              preload="metadata"
            >
              <source id="video-source" src={P_2} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: (55 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next DemiBold",
                  color: "#bf8eed",
                  margin: 0,
                  width: "60%",
                }}
              >
                Current
              </h2>
              <p
                style={{
                  fontSize: (27 * window.innerHeight) / 1080,
                  fontFamily: "Filson Pro Regular",
                  color: "#bf8eed",
                  width: "60%",
                  marginBottom: 70 * (window.innerHeight / 1080),
                }}
              >
                The Pandiyans' culinary legacy lives on with a lavish variety of
                foods and unforgettable tastes. Walking the streets of Madurai
                and its neighboring villages, one can find food readily
                available in welcoming homes and restaurants. However, a modern
                problem persists: the identity of Pandiyanad cuisine is being
                forgotten. Many locals are unaware of the historical
                significance of their cuisines and their kitchens and often
                mistake it for other nearby cuisines.
              </p>
            </div>
            <video
              // ref={videoRef}
              playsInline
              muted
              autoPlay
              style={{
                height: 300 * (window.innerHeight / 1080),
              }}
              loop
              preload="metadata"
            >
              <source id="video-source" src={P_3} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PandiFlag;
