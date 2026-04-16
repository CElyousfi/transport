"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MailIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      animate(".mail-flap", { rotateX: [0, -30, 0] }, { duration: 0.6, ease: "easeInOut" });
    }, [animate]);

    const stop = useCallback(() => {
      animate(".mail-flap", { rotateX: 0 }, { duration: 0.3 });
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <motion.path
          className="mail-flap"
          style={{ transformOrigin: "12px 4px" }}
          d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        />
      </motion.svg>
    );
  },
);

MailIcon.displayName = "MailIcon";
export default MailIcon;
