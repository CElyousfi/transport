"use client";

import { forwardRef, useImperativeHandle, useRef, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CrosshairIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();
    const isAnimatingRef = useRef(false);

    const start = useCallback(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      while (isAnimatingRef.current) {
        await animate(
          ".crosshair-ring",
          { scale: [1, 1.12, 1], opacity: [1, 0.6, 1] },
          { duration: 0.8, ease: "easeInOut" },
        );
        if (!isAnimatingRef.current) break;
      }
    }, [animate]);

    const stop = useCallback(() => {
      isAnimatingRef.current = false;
      animate(".crosshair-ring", { scale: 1, opacity: 1 }, { duration: 0.3 });
    }, [animate]);

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
        <motion.g className="crosshair-ring" style={{ transformOrigin: "12px 12px" }}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </motion.g>
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </motion.svg>
    );
  },
);

CrosshairIcon.displayName = "CrosshairIcon";
export default CrosshairIcon;
