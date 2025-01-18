import { useLayoutEffect, useState } from "react";



function useWindowResize() {
  const [windowResize, setwindowResize] = useState({
    width: 0,
    height: 0,
  });
  function handleResize() {
    setwindowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowResize;
}

export default useWindowResize;
