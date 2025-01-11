import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Polyline } from "./PolyLine";
import { Polygon } from "./polygon";
import madurai from "../assets/json/madurai.json";
import aruppukottai from "../assets/json/virudunagar1.json";
import srivilliputhur from "../assets/json/srivilliputhur.json";
import virudunagar from "../assets/json/rajapalayam.json";
import v3 from "../assets/json/v3.json";
import v4 from "../assets/json/v4.json";
import v5 from "../assets/json/v5.json";
import v6 from "../assets/json/v6.json";
import theni from "../assets/json/theni.json";
import din1 from "../assets/json/din1.json";
import din2 from "../assets/json/din2.json";
import din3 from "../assets/json/din3.json";
import din4 from "../assets/json/din4.json";
import din5 from "../assets/json/din5.json";
import din6 from "../assets/json/din6.json";
import pudu1 from "../assets/json/chettiMap/pudu1.json";
import pudu2 from "../assets/json/chettiMap/pudu2.json";
import pudu3 from "../assets/json/chettiMap/pudu3.json";
import pudu4 from "../assets/json/chettiMap/pudu4.json";
import pudu5 from "../assets/json/chettiMap/pudu5.json";
import pudu6 from "../assets/json/chettiMap/pudu6.json";
import karai from "../assets/json/chettiMap/karai.json";
import siva1 from "../assets/json/chettiMap/siva1.json";
import siva2 from "../assets/json/chettiMap/siva2.json";
import siva3 from "../assets/json/chettiMap/siva3.json";
import siva4 from "../assets/json/chettiMap/siva4.json";
import siva5 from "../assets/json/chettiMap/siva5.json";
import siva6 from "../assets/json/chettiMap/siva6.json";
import param from "../assets/json/chettiMap/param.json";
import ram1 from "../assets/json/chettiMap/ram1.json";
import ram2 from "../assets/json/chettiMap/ram2.json";
const MapControls = ({ pos }) => {
  const map = useMap();
  const defaultPos = {
    lat: 10.262443428724893,
    lng: 78.8383847326833,
  };
  useEffect(() => {
    if (!map) return;
    if (!pos) {
      map.setZoom(8.5);
      return;
    } else {
      map.setZoom(12);
    }
    map.panTo((pos && pos.coord) || defaultPos);
  }, [map, pos]);

  return <></>;
};

const ActualMap = ({ places, cur }) => {
  const [position, setPosition] = useState({
    lat: 10.03550407752225,
    lng: 78.33772721390407,
  });
  const pandiPath = madurai;

  const pandiPaths = [
    madurai,
    aruppukottai,
    srivilliputhur,
    virudunagar,
    v3,
    v5,
    v6,
    theni,
    din1,
    din2,
    din3,
    din4,
    din5,
    din6,
  ];

  const chettiPaths = [
    pudu1,
    pudu2,
    pudu3,
    pudu4,
    pudu5,
    pudu6,
    karai,
    siva1,
    siva2,
    siva4,
    siva5,
    siva6,
    param,
    // ram1,
    // ram2,
  ];
  //   console.log(places, cur);
  return (
    <APIProvider apiKey={import.meta.env.VITE_API_GOOGLE}>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Map
          defaultZoom={8}
          defaultCenter={position}
          mapId={import.meta.env.VITE_MAP_ID}
          disableDefaultUI
        >
          {pandiPaths.map((path, index) => {
            return (
              <Polygon
                path={path}
                strokeColor={"#d0b5f0"}
                strokeOpacity={0.5}
                strokeWeight={1}
                fillColor={"#d0b5f0"}
                fillOpacity={0.1}
              />
            );
          })}
          {chettiPaths.map((path, index) => {
            return (
              <Polygon
                path={path}
                strokeColor={"#f0948e"}
                strokeOpacity={0.5}
                strokeWeight={1}
                fillColor={"#f0948e"}
                fillOpacity={0.1}
              />
            );
          })}

          {places.map((place) => {
            // console.log(place);
            return (
              <AdvancedMarker
                position={place.coord}
                key={place.name}
                onClick={() => {
                  setPosition(place.coord);
                }}
              >
                {place.cuisine === "pandi" ? (
                  cur && cur.name === place.name ? (
                    <Pin
                      background={"#d0b5f0"}
                      glyphColor={"#887ba8"}
                      borderColor={"#887ba8"}
                      scale={1.5}
                    />
                  ) : (
                    <Pin
                      background={"#d0b5f0"}
                      glyphColor={"#887ba8"}
                      borderColor={"#887ba8"}
                      scale={1}
                    />
                  )
                ) : cur && cur.name === place.name ? (
                  <Pin
                    background={"#f0948e"}
                    glyphColor={"#b26464"}
                    borderColor={"#b26464"}
                    scale={1.5}
                  />
                ) : (
                  <Pin
                    background={"#f0948e"}
                    glyphColor={"#b26464"}
                    borderColor={"#b26464"}
                    scale={1}
                  />
                )}
              </AdvancedMarker>
            );
          })}
          <MapControls pos={cur} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default ActualMap;
