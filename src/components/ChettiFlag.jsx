import chettiflag from "../assets/icons/chetti-flag.svg";
import chettiIcon from "../assets/icons/chettisvg.svg";
import holder from "../assets/icons/placeholder1.svg";

import C_1 from "/videos/C-1_2_VP9.webm";
import C_2 from "/videos/C-2_2_VP9.webm";
import C_3 from "/videos/C-3_fin_VP9.webm";
import flagAnim from "/videos/flagg_chetti_1_VP9.webm";
import mask from "../assets/images/video_mask.svg";
const ChettiFlag = () => {
  return (
    <div
      className="chetti-flag-content"
      style={{
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        width: "90%",
        marginLeft: "auto",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // height: "110vh",
          // width: "50%",
          paddingTop: 300 * (window.innerHeight / 1080),
          paddingRight: "10%",
        }}
      >
        <div
          style={{
            position: "relative",
            // background: "white",
            transform: "translateY(85%)",
          }}
        >
          <div
            className="chetti-icon-container"
            style={{
              position: "absolute",
              transform: "translateY(-105%)",
              top: 0,
              right: 0,
            }}
          >
            <img
              src={chettiIcon}
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
              color: "#F07373",
              textAlign: "right",
            }}
          >
            Chettinad
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
            right: "50%",
            top: "20vh",
            transform: "translateX(-15%)",

            height: 720 * (window.innerHeight / 1080),
          }}
        >
          <video
            // ref={videoRef}
            playsInline
            muted
            autoPlay
            style={{
              height: "80%",
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
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          paddingTop: "50vh",
          position: "relative",
        }}
      >
        <div
          className="chetti-flag-content-actual"
          style={{
            width: "100%",
            padding: "0 10%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <video
              // ref={videoRef}
              playsInline
              muted
              autoPlay
              style={{
                height: 400 * (window.innerHeight / 1080),
                position: "absolute",
                top: 0,
                left: 200 * (window.innerWidth / 1920),
                transform: "translateX(-50%)",
              }}
              loop
              preload="metadata"
            >
              <source id="video-source" src={C_1} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            <div
              style={{
                width: "50%",
                // padding: "0 10% 0 0",
              }}
            >
              <h2
                style={{
                  fontSize: (55 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next DemiBold",
                  color: "#F07373",
                  margin: 0,
                  textAlign: "right",
                }}
              >
                About
              </h2>
              <p
                style={{
                  fontSize: (27 * window.innerHeight) / 1080,
                  fontFamily: "Filson Pro Regular",
                  color: "#F07373",
                  textAlign: "right",
                  marginBottom: 70 * (window.innerHeight / 1080),
                }}
              >
                Chettinad cuisine is as intricate and rich as the remarkable
                blend of spices it features. Originating from the culturally
                vibrant region of present-day Karaikudi and its neighboring
                villages in the Sivagangai district (often referred to as
                Chettinad, meaning "the land of Chettiars"), this cuisine
                reflects the legacy of the Chettiar community. Renowned across
                India for its bold flavors and diverse ingredients, Chettinad
                cuisine is a treasure trove of culinary artistry. <br />
                <br />
                While it shares historical ties with Pandiyanad cuisine, it has
                carved a distinct identity, offering a delightful array of
                unique recipes and unforgettable surprises, truly embodying the
                essence of its roots.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <video
              // ref={videoRef}
              playsInline
              muted
              autoPlay
              style={{
                height: 600 * (window.innerHeight / 1080),
                position: "absolute",
                top: 0,
                left: 200 * (window.innerWidth / 1920),
                transform: "translateX(-50%)",
              }}
              loop
              preload="metadata"
            >
              <source id="video-source" src={C_2} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            <div
              style={{
                width: "50%",
                // padding: "0 10% 0 0",
              }}
            >
              <h2
                style={{
                  fontSize: (55 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next DemiBold",
                  color: "#F07373",
                  margin: 0,
                  textAlign: "right",
                }}
              >
                History
              </h2>
              <p
                style={{
                  fontSize: (27 * window.innerHeight) / 1080,
                  fontFamily: "Filson Pro Regular",
                  color: "#F07373",
                  textAlign: "right",
                  marginBottom: 70 * (window.innerHeight / 1080),
                }}
              >
                Once, a thriving community lived around Puducherry's coastal
                region, excelling in trade and commerce. When seven families who
                had left for trade returned only to find their homeland
                devastated by a tsunami, they sought refuge in the elevated
                lands under the Pandiyan kings. The Pandiyans granted them land
                in exchange for work(accountign and commerce), leading to the
                formation of the seven villages (from the 7 families) that make
                up modern Chettinad.
                <br />
                <br /> Impressed by their work, the Pandiyans allotted a quarter
                of their land with its own jurisdiction and appointed a local
                king. This mini-kingdom, known as KaanaaduKaathan Parappu,
                meaning "the land of the ruler of a quarter of the Pandiyan's
                land," shaped Chettinad cuisine as an embodiment of rich history
                and exceptional flavor.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <video
              // ref={videoRef}
              playsInline
              muted
              autoPlay
              style={{
                height: 450 * (window.innerHeight / 1080),
                position: "absolute",
                top: 0,
                left: 200 * (window.innerWidth / 1920),
                transform: "translateX(-50%)",
              }}
              loop
              preload="metadata"
            >
              <source id="video-source" src={C_3} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            <div
              style={{
                width: "50%",
                // padding: "0 10% 0 0",
              }}
            >
              <h2
                style={{
                  fontSize: (55 * window.innerHeight) / 1080,
                  fontFamily: "TTtravels Next DemiBold",
                  color: "#F07373",
                  margin: 0,
                  textAlign: "right",
                }}
              >
                Current
              </h2>
              <p
                style={{
                  fontSize: (27 * window.innerHeight) / 1080,
                  fontFamily: "Filson Pro Regular",
                  color: "#F07373",
                  textAlign: "right",
                  marginBottom: 70 * (window.innerHeight / 1080),
                }}
              >
                Due to various reasons, Chettinad cuisine is one of the most
                popular cuisines nationwide. Most people think of Chettinad
                dishes when they think about South Indian food. The sole
                popularity of Chettinad cuisine and the craze around it is
                consuming the legacies of the nearby cuisines, leaving the
                people from the Chettinad region confused about what food
                carries their Chettinad legacy.
                <br />
                <br /> Despite this, since Chettinad cuisine evolves from a
                community, there is a constant claim of who makes the
                authentic Chettinad food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChettiFlag;
