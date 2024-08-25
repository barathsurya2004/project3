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
      }, 300); // Adjust the delay as needed
    }
  };

  const photos = [
    {
      alt: "chetti8.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1GBkcMxHO1sq-ilhdKmCOqtRWVoOF8F02",
      "File Size": "7.4 MB",
    },
    {
      alt: "pandi19.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FEA2SnsTHvUhXQfG_wgoU-GPpH8w8FXg",
      "File Size": "4.29 MB",
    },
    {
      alt: "pandi25.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1GKI4qiez8G2-yhnbefpon2m4IRkLH1oY",
      "File Size": "4.69 MB",
    },
    {
      alt: "chetti2.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1GTU1dJZAZsF_6wXh-ERlARivqBlitPKL",
      "File Size": "5.73 MB",
    },
    {
      alt: "chetti3.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1GQzMvx5pm6WJ5Gy55_tR1RBJ5Gfk86n6",
      "File Size": "3.44 MB",
    },
    {
      alt: "pandi6.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FUn7rkK5Zkj3l2BXp_miTJL0MzzTSb5N",
      "File Size": "3.18 MB",
    },
    {
      alt: "chetti7.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FDQfmb61W6JcI9jWD8k39lNhGRD8MjOe",
      "File Size": "1.81 MB",
    },
    {
      alt: "pandi2.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FUlHbnpCTJupJ23dkj88w71R-PNAOVrp",
      "File Size": "3.19 MB",
    },
    {
      alt: "pandi17.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FGTdwbdC2NcXeLj4uNJleSKoE55icn-s",
      "File Size": "2.77 MB",
    },
    {
      alt: "pandi26.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FEA2SnsTHvUhXQfG_wgoU-GPpH8w8FXg",
      "File Size": "2.4 MB",
    },
    {
      alt: "chetti1.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1GLUx-Cap5I69c1Bhz3TfbbuJZGC7a-ow",
      "File Size": "3.3 MB",
    },
    {
      alt: "chetti11.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1F5laWJkcWdFD1ZZETi0zCqP7dsC2Xo82",
      "File Size": "4.3 MB",
    },
    {
      alt: "chetti13.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1ExEqpANQbcIwSqSxUQ2mDYNeCl8cBXY0",
      "File Size": "3.56 MB",
    },
    {
      alt: "pandi13.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1EtYDPg8-OAxl991dFCe0OE9p2BKtKD1A",
      "File Size": "3.08 MB",
    },
    {
      alt: "chetti0.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1Eqbqxd9k9JSOc8xKAIoclt_xUEI1xH66",
      "File Size": "3.03 MB",
    },
    {
      alt: "chetti14.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1G4Y6D8NKrsz_CUEiW1PiNgUZzebEdPBw",
      "File Size": "54.64 MB",
    },
    {
      alt: "pandi24.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FiRdqUsywjhtLOOSFkfuD6q_wNQM0B2S",
      "File Size": "1.97 MB",
    },
    {
      alt: "pandi15.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FeOdQqUL1xklRnH790DLCIB4YcPGYDb2",
      "File Size": "6.35 MB",
    },
    {
      alt: "pandi8.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FtpAm2PAc3WDg8tzRaDEKCeLmwuJO1lV",
      "File Size": "3.13 MB",
    },
    {
      alt: "pandi4.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1G4f_l6HoAhxSX7bET8R5-YbiL7XWiiVK",
      "File Size": "2.83 MB",
    },
    {
      alt: "pandi3.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1Fjs1hpQJCVYT74JrOZx1z3MlaVCdjU7B",
      "File Size": "2.6 MB",
    },
    {
      alt: "chetti10.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FrTOC21rn-8KBKIdE2Y4tFXhX88cN60M",
      "File Size": "2.42 MB",
    },
    {
      alt: "chetti9.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1G9zmpdJTW58RFI5Nh_1hhnIGQmJ4eicH",
      "File Size": "6.16 MB",
    },
    {
      alt: "chetti4.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1FzqVDiaHEPm5G3fgKjmUeRDnQyvnN9wm",
      "File Size": "4.5 MB",
    },
    {
      alt: "pandi20.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HTM7qaPfLPaMm6SaL4OYwdLK5uGnUTr6",
      "File Size": "2.93 MB",
    },
    {
      alt: "pandi1.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HBDChwknBh27enmHS7d8BhO7tJWt68eD",
      "File Size": "2.38 MB",
    },
    {
      alt: "pandi28.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1H5nx5l2sTgufcqNVfi6SwnqXcBSMkd50",
      "File Size": "3.01 MB",
    },
    {
      alt: "pandi11.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1H98GIM0mohYKCHGleo7lxr4arrDxaZC2",
      "File Size": "3.06 MB",
    },
    {
      alt: "pandi7.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HBQkyXjgoILD4CVrHuDjLMmeJ9SRXEEL",
      "File Size": "3.32 MB",
    },

    {
      alt: "pandi31.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HX7PbunxNo4Xly5jOGnmjpCw2BV_5Gjr",
      "File Size": "93.73 MB",
    },
    {
      alt: "pandi29.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1Hs6WMUB2nUgWlfrrhxJIYjYTr3dk4Y0R",
      "File Size": "52.69 MB",
    },
    {
      alt: "chetti8.jpf",
      Thumbnail: "N/A",
      url: "https://lh3.googleusercontent.com/d/1IC3FJK8-k1x9A9emxJ7rtrfV8lFsLHmX",
      "File Size": "20.12 MB",
    },
    {
      alt: "pandi23.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1IFEeVrPz7EtGUa94tg1J9C-oDeqYH9Be",
      "File Size": "5.05 MB",
    },
    {
      alt: "pandi12.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1IFeE87Df3PfQVirt972pNIvIOTO5vGva",
      "File Size": "2.56 MB",
    },
    {
      alt: "pandi10.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1IJIyg52o26A-ZA_770Zygk_pEVmmOE3e",
      "File Size": "3.26 MB",
    },
    {
      alt: "pandi14.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HYn-fCKJArTJ4X2yhXXOtfmgLgZNz2Dr",
      "File Size": "3.39 MB",
    },
    {
      alt: "chetti12.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1Gli6mm3ByYpF6kNVGjz5-jNxc30zqT0w",
      "File Size": "6.91 MB",
    },
    {
      alt: "pandi0.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1Hul4eNfL2fz8bE7fEv-49e85yMGMqZfB",
      "File Size": "2.77 MB",
    },
    {
      alt: "pandi27.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HsBfl8_sjYpnu8phYcp7Yxy70eC5YaUi",
      "File Size": "2.14 MB",
    },
    {
      alt: "pandi21.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HsQ9nkG25AYozsiOsQjOMRy9t9gppZdh",
      "File Size": "2.42 MB",
    },
    {
      alt: "pandi22.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1GpAv7GlTT3ZkgMKh9mDyZ2qEoj8ZXYng",
      "File Size": "2.59 MB",
    },
    {
      alt: "pandi5.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1I1VCPIGHJzPwY5r9ckw_eLPInRa_Lq4u",
      "File Size": "2.35 MB",
    },
    {
      alt: "pandi18.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1Go4tyyA5NovmJFcflk3FF97IvgpMSI8G",
      "File Size": "4.89 MB",
    },
    {
      alt: "pandi16.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HghIpckfzt-9oNB1qXSfASiVPPs0k4YX",
      "File Size": "2.35 MB",
    },

    {
      alt: "chetti8.png",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1HhK0hrhzJOfSck80awz_fyl9vHeL-vIU",
      "File Size": "40.79 MB",
    },
    {
      alt: "pandi30.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1GWs2lMNMLf6CH1F0n3VT8U3g8qjoJ2dk",
      "File Size": "65.43 MB",
    },
    {
      alt: "pandi9.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1I8U2COHOdHQr3_EgWGPlc0UHpSB-j0lZ",
      "File Size": "3.32 MB",
    },
    {
      alt: "chetti6.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1Hm0nVQcUkEhDNx9EOiHaoohgMRxSZnB-",
      "File Size": "2.4 MB",
    },
    {
      alt: "chetti5.jpg",
      Thumbnail: "",
      url: "https://lh3.googleusercontent.com/d/1I5WVEV2bbb4UkRT93CIKoBHxty58DYYF",
      "File Size": "2.7 MB",
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
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
