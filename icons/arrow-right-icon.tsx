"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      animate(".ar-arrow", { x: [0, 4, 0] }, { duration: 0.4, ease: "easeInOut" });
    }, [animate]);

    const stop = useCallback(() => {
      animate(".ar-arrow", { x: 0 }, { duration: 0.3 });
    }, [animate]);

    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }), [start, stop]);

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
        <motion.g className="ar-arrow">
          <path d="m16 12-4-4" />
          <path d="M16 12l-4 4" />
          <path d="M16 12H8" />
        </motion.g>
      </motion.svg>
    );
  },
);

ArrowRightIcon.displayName = "ArrowRightIcon";
export default ArrowRightIcon;
