import gsap from "gsap";
import { useRef } from "react";
import { useContext, createContext, useState, useEffect } from "react";

export const Context = createContext({
  q_mark: true,
  setQMark: () => {},
  loading: true,
  setLoading: () => {},
  hovered: false,
  setHovered: () => {},
  mobile: false,
  setMobile: () => {},
  meshSelected: null,
  setMeshSelected: () => {},
  canSelect: false,
  setCanSelect: () => {},
  pointer: [0, 0],
  down: false,
  globeClicked: false,
  setGlobeClicked: () => {},
  mode: null,
  setMode: () => {},
  photos: [],
  fullscreen: null,
  setFullscreen: () => {},
  canScrollTo: false,
  questionSelected: -2,
  setQuestionSelected: () => {},
  invert: false,
  setInvert: () => {},
  speed: 1,
  setSpeed: () => {},
  light: false,
  setLight: () => {},
  interaction: 1,
  setInteraction: () => {},
  modelsPosition: {},
  setModelsPosition: () => {},
  chettiVis: false,
  pandiVis: false,
  questionInteractions: false,
  setQuestionInteractions: () => {},
  globeInteractions: false,
  setGlobeInteractions: () => {},
  sliderInteractions: false,
  setSliderInteractions: () => {},
  cardInteractions: false,
  setCardInteractions: () => {},
});

export const ContextProvider = ({ children }) => {
  const [q_mark, setQMark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [meshSelected, setActiveMeshSelected] = useState(null);
  const [canSelect, setCanSelect] = useState(false);
  const [pointer, setPointer] = useState([0, 0]);
  const [down, setDown] = useState(false);
  const [globeClicked, setGlobeClicked] = useState(false);
  const [mode, setMode] = useState(null);
  const [fullscreen, setFullscreen] = useState(null);
  const canScrollTo = useRef(true);
  const [questionSelected, setQuestionSelected] = useState(null);
  const [invert, setInvert] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [light, setLight] = useState(false);
  const [interaction, setInteraction] = useState(1);
  const [modelsPosition, setModelsPosition] = useState({
    qMark: [0, 0],
    globe: [0, 0],
    globePandi: [0, 0],
    globeChetti: [0, 0],
  });
  const [questionInteractions, setQuestionInteractions] = useState(false);
  const [globeInteractions, setGlobeInteractions] = useState(false);
  const [sliderInteractions, setSliderInteractions] = useState(false);
  const [cardInteractions, setCardInteractions] = useState(false);

  const chettiVis = useRef(false);
  const pandiVis = useRef(false);
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPointer([clientX, clientY]);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root");
    if (invert) {
      gsap.to(root, {
        filter: "invert(1)",
      });
    } else {
      gsap.to(root, {
        filter: "invert(0)",
      });
    }
  }, [invert, speed, light, interaction]);
  const debounceTimeoutRef = useRef();

  const setMeshSelected = (mesh) => {
    if (mesh === null || globeClicked) {
      // Clear any existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      // Set state to null immediately
      setActiveMeshSelected(null);
    } else {
      // Clear any existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      // Set a new timeout to update the state after 300ms (or any suitable delay)
      debounceTimeoutRef.current = setTimeout(() => {
        setActiveMeshSelected(mesh);
      }, 150); // Adjust the delay as needed
    }
  };
  const photos = [
    {
      alt: "chetti14.jpg",
      Thumbnail: "Freshly made Chettinad Snacks (Manolam & Murukku)",
      url: "https://lh3.googleusercontent.com/d/1Jn6ABFHwsLrMoWDI_euqEWH50OOAKKGx",
    },
    {
      alt: "chetti13.jpg",
      Thumbnail: "The road trip begins",
      url: "https://lh3.googleusercontent.com/d/1fGBWq8GXLnFYUlQFK0Gg1rqwk5qOC1CM",
    },
    {
      alt: "pandi26.jpg",
      Thumbnail: "Dosa and its counterparts at Madurai",
      url: "https://lh3.googleusercontent.com/d/1OGSimQNMYXLjD1LlIBfwpwMVZrW3UP62",
    },
    {
      alt: "pandi25.jpg",
      Thumbnail: "A special conversation with Ram",
      url: "https://lh3.googleusercontent.com/d/15Ea3C0IpHl__uJtd3MdIdsnPis3vVhmS",
    },
    {
      alt: "pandi24.jpg",
      Thumbnail: "The legent himself (Inventor of bun parotta)",
      url: "https://lh3.googleusercontent.com/d/1t5pIdhvJH6ZXOp56f9uMH_Z9zUMIEcva",
    },
    {
      alt: "pandi19.jpg",
      Thumbnail: "Post Interview snap with Arun",
      url: "https://lh3.googleusercontent.com/d/14QkysytHE1BgUqYLcz13G1s-9FC_dgQK",
    },
    {
      alt: "pandi17.jpg",
      Thumbnail: "Famous Jigarthanda at Madurai",
      url: "https://lh3.googleusercontent.com/d/17Ss9HrWH4_cwqOpSqdRbG6BB6AjPY5mY",
    },
    {
      alt: "pandi15.jpg",
      Thumbnail: "The Heart Behind the Flavor at Amma Mess",
      url: "https://lh3.googleusercontent.com/d/1MJRBNKELlwfDHsJ5ZHO7wiGl59Iw180m",
    },
    {
      alt: "pandi13.jpg",
      Thumbnail: "The fine Pandiyanad meal for lunch",
      url: "https://lh3.googleusercontent.com/d/1U41QgWKw3UopqCDTcC0_1yfwVUIBgBoM",
    },
    {
      alt: "pandi8.jpg",
      Thumbnail: "Pandiyanad flavour factory",
      url: "https://lh3.googleusercontent.com/d/1XAJpsfYtAp9Fzia6zYnIAc9Ie8_z6TBP",
    },
    {
      alt: "pandi6.jpg",
      Thumbnail: "Banger Pandiyanad breakfast",
      url: "https://lh3.googleusercontent.com/d/1YEsO7YVZ5WF3rXgEM8Cf-Wue3UqMQzoO",
    },
    {
      alt: "pandi4.jpg",
      Thumbnail: "Crafted by Legacy, living within poeple",
      url: "https://lh3.googleusercontent.com/d/1XHZWbjtFdz_LwjuL7HQvFlKfZioCQMCZ",
    },
    {
      alt: "pandi3.jpg",
      Thumbnail: "Kalaki in Madurai",
      url: "https://lh3.googleusercontent.com/d/1gpU-fXowtCtPAVJGzYyOaaHgRHuXXklO",
    },
    {
      alt: "pandi2.jpg",
      Thumbnail: "The iconic Kari Dosa from Pandiyanad",
      url: "https://lh3.googleusercontent.com/d/1_IM34D0t2VOc-Vp9bE4Ov6d0hhSBd2la",
    },
    {
      alt: "chetti11.jpg",
      Thumbnail: "Chettinad - Where the land and food is red",
      url: "https://lh3.googleusercontent.com/d/1x20uoLggYmQ2H3vgSrldbb-0GqnvTc7S",
    },
    {
      alt: "chetti10.jpg",
      Thumbnail: "If 'Mind Blowing' was a  Chettinad gravy",
      url: "https://lh3.googleusercontent.com/d/1l2WMTusv2yvHGkCZV0pVNo-FG5o2E4Wx",
    },
    {
      alt: "chetti9.jpg",
      Thumbnail: "Chettinad Stories Worth Sharing",
      url: "https://lh3.googleusercontent.com/d/168ZN0ioPSRy_r9rgZwBaVZZkbSWbiCCc",
    },
    {
      alt: "chetti7.jpg",
      Thumbnail: "Tasting a Chettinad Classic",
      url: "https://lh3.googleusercontent.com/d/1g9RAsILawMyAJQ2pOwriond2Go_TYIRN",
    },
    {
      alt: "chetti8.jpg",
      Thumbnail: "Traditional Chettinad House",
      url: "https://lh3.googleusercontent.com/d/1GmQHh4k5Xua7mPyhv-9Y1qoNSmS19lrh",
    },
    {
      alt: "chetti4.jpg",
      Thumbnail: "Interior of a Chettinad House",
      url: "https://lh3.googleusercontent.com/d/1pwD-xIsprXmINCg_T0Zy3C3ktn4I14pQ",
    },
    {
      alt: "chetti3.jpg",
      Thumbnail: "Chettinad House's Lobby",
      url: "https://lh3.googleusercontent.com/d/1iB-o1eVMe1nRWGodeToDdg9q69e9eekQ",
    },
    {
      alt: "chetti2.jpg",
      Thumbnail: "Face-to-Face with the Chettinad Thunder",
      url: "https://lh3.googleusercontent.com/d/1kYV_7Wo9iMv2iBR0_pOfxXI_ZdiWIfAc",
    },
    {
      alt: "chetti1.jpg",
      Thumbnail: "Women-Run Chettinad Snack Factory",
      url: "https://lh3.googleusercontent.com/d/14XCOXj0ct7XT4qXEUD3yxB-JBDQeLffT",
    },
    {
      alt: "chetti0.jpg",
      Thumbnail: "Getting to the Roots",
      url: "https://lh3.googleusercontent.com/d/1rMKqKC-X_3Fuws2SdB2GFeMUKdWuvPtD",
    },
  ];
  const values = {
    q_mark,
    setQMark,
    loading,
    setLoading,
    hovered,
    setHovered,
    mobile,
    setMobile,
    meshSelected,
    setMeshSelected,
    canSelect,
    setCanSelect,
    pointer,
    down,
    setDown,
    globeClicked,
    setGlobeClicked,
    mode,
    setMode,
    photos,
    fullscreen,
    setFullscreen,
    canScrollTo,
    questionSelected,
    setQuestionSelected,
    invert,
    setInvert,
    speed,
    setSpeed,
    light,
    setLight,
    interaction,
    setInteraction,
    modelsPosition,
    setModelsPosition,
    chettiVis,
    pandiVis,
    questionInteractions,
    setQuestionInteractions,
    globeInteractions,
    setGlobeInteractions,
    sliderInteractions,
    setSliderInteractions,
    cardInteractions,
    setCardInteractions,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
