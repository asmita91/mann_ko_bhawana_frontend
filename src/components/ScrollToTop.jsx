// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     console.log("Scrolling to top for:", pathname);

//     window.scrollTo(0, 0);
//   }, [pathname]);
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");
    console.log(
      "Scrolling to top for:",
      pathname,
      scrollContainer ? "Custom Container" : "Window"
    );
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
      console.log("Scrolled custom container to top");
    } else {
      window.scrollTo(0, 0);
      console.log("Scrolled window to top");
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
