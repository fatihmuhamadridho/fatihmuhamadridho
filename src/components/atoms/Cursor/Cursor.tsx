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
        width: 32,
        height: 32,
        position: "fixed",
        display: viewWidth < 500 ? "none" : "flex",
        backgroundColor: "black",
        borderRadius: 9999,
        zIndex: 9999999,
        pointerEvents: "none",
      }}
      animate={{
        x: animate ? mouseX - 50 : mouseX - 16,
        y: animate ? mouseY - 50 : mouseY - 16,
        ...animationProps,
      }}
      transition={{ type: "keyframes", duration: 0.05 }}
    />
  );
};

export default Cursor;
