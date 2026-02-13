"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  pressScale?: number;
};

export function Tilt({
  children,
  className,
  maxTilt = 10,
  pressScale = 0.98,
}: TiltProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const smoothX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const smoothY = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const smoothScale = useSpring(scale, { stiffness: 240, damping: 20 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    rotateX.set(-yPercent * maxTilt);
    rotateY.set(xPercent * maxTilt);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const handlePress = () => {
    scale.set(pressScale);
  };

  const handleRelease = () => {
    scale.set(1);
  };

  return (
    <div
      className={cn("relative", className)}
      style={{ perspective: "1200px" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onPointerDown={handlePress}
      onPointerUp={handleRelease}
      onPointerCancel={handleRelease}
    >
      <motion.div
        style={{ rotateX: smoothX, rotateY: smoothY, scale: smoothScale }}
        className="h-full transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}
