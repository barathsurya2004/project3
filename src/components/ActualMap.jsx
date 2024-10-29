import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  useMap,
} from "@vis.gl/react-google-maps";
import gsap from "gsap";
import { useEffect, useState } from "react";
const MapControls = ({ pos }) => {
  const map = useMap();
  const defaultPos = {
    lat: 10.262443428724893,
    lng: 78.8383847326833,
  };

  useEffect(() => {
    if (!map) return;
    if (!pos) {
      map.setZoom(5);
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
                {cur != null && cur.cuisine == "pandi" ? (
                  <Pin
                    background={"#ccb1eb"}
                    glyphColor={"#887ba8"}
                    borderColor={"#887ba8"}
                  />
                ) : (
                  <Pin
                    background={"#ed928c"}
                    glyphColor={"#b26464"}
                    borderColor={"#b26464"}
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
