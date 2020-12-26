import { useRef, useEffect } from "react";

const useFadeIn = (direction = "", duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 25%, 0)";
      case "down":
        return "translate3d(0, -25%, 0)";
      case "left":
        return "translate3d(25%, 0, 0)";
      case "right":
        return "translate3d(-25%, 0, 0)";
      default:
        return;
    }
  };

  useEffect(() => {
    const { current } = element;

    if (current) {
      current.style.transition = `all ${duration}s cubic-bezier(0, 0, 0.2, 1) ${delay}s`;
      current.style.opacity = 1;
      current.style.transform = `translate3d(0, 0, 0)`;
    }
  }, [duration, delay]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useFadeIn;
