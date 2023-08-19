import React from "react";
import { motion, AnimationProps } from "framer-motion";
import { useMouse, useViewportSize } from "@mantine/hooks";

interface CursorProps extends AnimationProps {}

const Cursor = ({ animate }: CursorProps) => {
  const { x: mouseX, y: mouseY } = useMouse();
  const { width: viewWidth } = useViewportSize();
  const animationProps = animate && typeof animate === "object" ? animate : {};
  return (
    <motion.div
      style={{
        width: 24,
        height: 24,
        position: "fixed",
        display: viewWidth < 500 ? "none" : "flex",
        backgroundColor: "white",
        borderRadius: 9999,
        zIndex: 9999999999999999,
        pointerEvents: "none",
      }}
      animate={{
        x: mouseX - 12,
        y: mouseY - 72,
        ...animationProps,
      }}
      transition={{ type: "keyframes", duration: 0.05 }}
    />
  );
};

export default Cursor;
