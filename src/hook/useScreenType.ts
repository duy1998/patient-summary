import { useEffect, useRef, useState } from "react";

export enum ScreenType {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}

export function useScreenType() {
  const [parentWidth, setParentWidth] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    const updateParentWidth = () => {
      if (parentRef.current) {
        const width = (parentRef.current as HTMLElement).getBoundingClientRect()
          .width;
        setParentWidth(width);
      }
    };

    // Initial measurement
    updateParentWidth();

    // Update on resize
    const handleResize = () => {
      updateParentWidth();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let screenType;

  if (parentWidth < 600) {
    screenType = ScreenType.MOBILE;
  } else if (parentWidth >= 600 && parentWidth < 1024) {
    screenType = ScreenType.TABLET;
  } else if (parentWidth >= 1024) {
    screenType = ScreenType.DESKTOP;
  }

  return { screenType, parentWidth, parentRef };
}
