"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ChevronDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      animate(scope.current, { y: [0, 3, 0] }, { duration: 0.4, ease: "easeInOut" });
    }, [animate, scope]);

    const stop = useCallback(() => {
      animate(scope.current, { y: 0 }, { duration: 0.2 });
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
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
      >
        <polyline points="6 9 12 15 18 9" />
      </motion.svg>
    );
  },
);

ChevronDownIcon.displayName = "ChevronDownIcon";
export default ChevronDownIcon;
