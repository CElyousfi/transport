"use client";

import { forwardRef, useImperativeHandle, useCallback } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SettingsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      animate(".settings-gear", { rotate: 90 }, { duration: 0.5, ease: "easeInOut" });
    }, [animate]);

    const stop = useCallback(() => {
      animate(".settings-gear", { rotate: 0 }, { duration: 0.5, ease: "easeInOut" });
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
        <motion.g className="settings-gear" style={{ transformOrigin: "12px 12px" }}>
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2M12 22v-2m5-15.66-1 1.73M7 20.66l1-1.73m9.66 1-1.73-1M3.34 7l1.73 1M22 12h-2M2 12h2m15.66 5-1.73-1M3.34 17l1.73-1m10.93-13.66-1 1.73M7 3.34l1 1.73" />
        </motion.g>
      </motion.svg>
    );
  },
);

SettingsIcon.displayName = "SettingsIcon";
export default SettingsIcon;
