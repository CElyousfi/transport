"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TruckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const animationControls = useRef<Array<ReturnType<typeof animate>>>([]);

    const start = async () => {
      animationControls.current.forEach((c) => c.stop());
      animationControls.current = [];

      animationControls.current.push(
        animate(
          ".truck-cabin",
          { x: [0, 1.5, 0, -0.5, 0] },
          { duration: 0.6, ease: "easeInOut", repeat: Infinity },
        ),
      );
      animationControls.current.push(
        animate(
          ".truck-wheel-front",
          { rotate: 360 },
          { duration: 0.6, ease: "linear", repeat: Infinity },
        ),
      );
      animationControls.current.push(
        animate(
          ".truck-wheel-rear",
          { rotate: 360 },
          { duration: 0.6, ease: "linear", repeat: Infinity },
        ),
      );
    };

    const stop = () => {
      animationControls.current.forEach((c) => c.stop());
      animationControls.current = [];
      animate(".truck-cabin", { x: 0 }, { duration: 0.3 });
      animate(".truck-wheel-front", { rotate: 0 }, { duration: 0.3 });
      animate(".truck-wheel-rear", { rotate: 0 }, { duration: 0.3 });
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
      >
        <motion.g className="truck-cabin">
          <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
          <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
          <path d="M9 18h5" />
        </motion.g>
        <motion.circle className="truck-wheel-rear" cx="7" cy="18" r="2" style={{ transformOrigin: "7px 18px" }} />
        <motion.circle className="truck-wheel-front" cx="17" cy="18" r="2" style={{ transformOrigin: "17px 18px" }} />
      </motion.svg>
    );
  },
);

TruckIcon.displayName = "TruckIcon";
export default TruckIcon;
