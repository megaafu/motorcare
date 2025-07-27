import { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      const scrolled = documentElement.scrollTop;

      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;
      const scrollPercent = (scrolled / maxHeight) * 100;

      setScroll(scrollPercent);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scroll;
};

export default useScroll;
