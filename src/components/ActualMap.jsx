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
import pandiPathJson from "../assets/json/madurai.json";
const MapControls = ({ pos }) => {
  const map = useMap();
  const defaultPos = {
    lat: 10.262443428724893,
    lng: 78.8383847326833,
  };

  useEffect(() => {
    if (!map) return;
    if (!pos) {
      map.setZoom(8);
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
    lat: 10.262443428724893,
    lng: 78.8383847326833,
  });
  const pandiPath = pandiPathJson;

  const chettiPath = [
    { lat: 9.731542944475976, lng: 78.43435898466475 },
    {
      lat: 9.186567773109145,
      lng: 78.50540404559962,
    },
    {
      lat: 9.351706073750504,
      lng: 78.95048364035807,
    },
    {
      lat: 9.624451958578346,
      lng: 78.91628679651252,
    },
    {
      lat: 10.317533784517433,
      lng: 79.32243118765399,
    },
    {
      lat: 10.705000659089052,
      lng: 79.01279635480356,
    },
    {
      lat: 10.419127253005666,
      lng: 78.5274734306254,
    },
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
          defaultZoom={5}
          defaultCenter={position}
          mapId={import.meta.env.VITE_MAP_ID}
          disableDefaultUI
        >
          <Polygon
            path={pandiPath}
            strokeColor={"#ccb1eb"}
            strokeOpacity={0.5}
            strokeWeight={1}
            fillColor={"#ccb1eb"}
            fillOpacity={0.1}
          />
          <Polyline
            strokeWeight={10}
            strokeColor={"#ed928c"}
            strokeOpacity={0.5}
            path={chettiPath}
          />
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
                      background={"#ccb1eb"}
                      glyphColor={"#887ba8"}
                      borderColor={"#887ba8"}
                      scale={1.5}
                    />
                  ) : (
                    <Pin
                      background={"#ccb1eb"}
                      glyphColor={"#887ba8"}
                      borderColor={"#887ba8"}
                      scale={1}
                    />
                  )
                ) : cur && cur.name === place.name ? (
                  <Pin
                    background={"#ed928c"}
                    glyphColor={"#b26464"}
                    borderColor={"#b26464"}
                    scale={1.5}
                  />
                ) : (
                  <Pin
                    background={"#ed928c"}
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
