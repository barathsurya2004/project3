import React, { useState, useEffect, useRef } from "react";
import App from "./App";
import MobileLoader from "./components/MobileLoader";

const Layout = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (prevWidth.current < 1024 && windowSize.width >= 1024) {
      window.location.reload();
    }
    prevWidth.current = windowSize.width;
  }, [windowSize.width]);

  if (windowSize.width < 1024) {
    return <MobileLoader />;
  }
  return (
    <div>
      <App />
    </div>
  );
};

export default Layout;
