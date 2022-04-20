import React from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(
    function () {
      window.scrollTo(0, 0);
    },
    [pathname]
  );

  return null;
}
