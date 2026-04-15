"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GlobeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
          ".globe-inner",
          { rotateY: 360 },
          { duration: 2, ease: "linear", repeat: Infinity },
        ),
      );
    };

    const stop = () => {
      animationControls.current.forEach((c) => c.stop());
      animationControls.current = [];
      animate(".globe-inner", { rotateY: 0 }, { duration: 0.5 });
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
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <motion.path
          className="globe-inner"
          style={{ transformOrigin: "12px 12px" }}
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        />
      </motion.svg>
    );
  },
);

GlobeIcon.displayName = "GlobeIcon";
export default GlobeIcon;
