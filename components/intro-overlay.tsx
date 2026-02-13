"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Hej",
  "Olá",
  "नमस्ते",
  "سلام",
  "こんにちは",
  "안녕하세요",
  "你好",
  "שלום",
];

export function IntroOverlay() {
  const [isActive, setIsActive] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const seen = window.sessionStorage.getItem("introSeen");
    if (!seen) {
      setIsActive(true);
    }
  }, []);

  React.useEffect(() => {
    if (!isActive) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.documentElement.classList.add("intro-active");
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.classList.remove("intro-active");
      document.documentElement.classList.remove("intro-exit");
      document.body.style.overflow = previousOverflow;
    };
  }, [isActive]);

  React.useEffect(() => {
    if (!isComplete) {
      return;
    }

    document.documentElement.classList.add("intro-exit");

    const cleanupTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("intro-active");
      document.documentElement.classList.remove("intro-exit");
      setIsActive(false);
    }, 900);

    return () => window.clearTimeout(cleanupTimer);
  }, [isComplete]);

  React.useEffect(() => {
    if (!isActive || index > greetings.length) {
      return;
    }

    if (index === greetings.length) {
      const finishTimer = window.setTimeout(() => {
        setIsComplete(true);
        window.sessionStorage.setItem("introSeen", "1");
      }, 500);
      return () => window.clearTimeout(finishTimer);
    }

    const interval = index >= 4 ? 140 : 320;
    const timer = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => window.clearTimeout(timer);
  }, [index, isActive]);

  if (!isActive) {
    return null;
  }

  const word = greetings[Math.min(index, greetings.length - 1)];

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: isComplete ? "-100%" : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: isComplete ? 0.9 : 0.4, ease: "easeInOut" }}
      >
        <div className="px-6 text-center">
          <p className="display-text text-3xl font-semibold tracking-[0.08em] sm:text-5xl">
            {word}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
