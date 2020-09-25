import { useEffect, useState } from "react";

const useDeviceWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  return [width];
};

export default useDeviceWidth;
