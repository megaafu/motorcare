import { useEffect, useState } from "react";

const useFooterVisible = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      {
        root: null, // observes relative to viewport
        threshold: 0.10, // 10% visibility triggers state change
      }
    );

    observer.observe(footer);

    // Cleanup on unmount
    return () => {
      if (footer) observer.unobserve(footer);
      observer.disconnect();
    };
  }, []);

  return footerVisible;
};

export default useFooterVisible;

