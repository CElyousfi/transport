"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const StarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "", fill = "none" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      animate(scope.current, { rotate: [0, 20, -20, 0], scale: [1, 1.1, 1] }, { duration: 0.5, ease: "easeInOut" });
    }, [animate, scope]);

    const stop = useCallback(() => {
      animate(scope.current, { rotate: 0, scale: 1 }, { duration: 0.3 });
    }, [animate, scope]);

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
        fill={fill as string}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
        style={{ transformOrigin: "center" }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </motion.svg>
    );
  },
);

StarIcon.displayName = "StarIcon";
export default StarIcon;
