import React, { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimationProps,
  HTMLMotionProps,
} from "framer-motion";
import { useMouse } from "@mantine/hooks";

interface ParticleProps extends AnimationProps, HTMLMotionProps<"div"> {}

const Particle = ({ style }: ParticleProps) => {
  const { x, y } = useMouse();
  return (
    <motion.div
      style={{
        ...{
          position: "absolute",
          backgroundColor: "#323235",
          width: 20,
          height: 20,
          borderRadius: 6,
          opacity: 0.4,
          right: 160,
          top: 90,
          rotateZ: 110,
        },
        ...style,
      }}
      animate={{ x: x / 50, y: y / 100 }}
      transition={{ type: "keyframes", duration: 0.1 }}
    />
  );
};

const Parallax = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [currentScroll, setCurrentScroll] = useState<any>(0);

  useMotionValueEvent(scrollY, "change", latest => {
    setCurrentScroll(latest);
  });

  return (
    <motion.div
      style={{ zIndex: -75, width: 650, height: 700, position: "absolute", top: "35%" }}
      initial={{ scaleX: 1.5, scaleY: 1.5, y: 0, opacity: 0 }}
      animate={{
        scaleX: 1.5 + scrollYProgress.get() * 5,
        scaleY: 1.5 + scrollYProgress.get() * 5,
        y: 0 + scrollYProgress.get() * 1500,
        opacity: 1 - scrollYProgress.get() * 4,
      }}
    >
      <Particle
        style={{
          width: 20,
          height: 20,
          borderRadius: 6,
          opacity: 0.4,
          right: 160,
          top: 90,
          rotateZ: 110,
        }}
      />
      <Particle
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          opacity: 0.3,
          right: 600,
          top: 200,
          rotateZ: -120,
        }}
      />
      <Particle
        style={{
          width: 9,
          height: 9,
          borderRadius: 2,
          opacity: 0.4,
          right: 624,
          top: 94,
          rotateZ: -110,
        }}
      />
      <Particle
        style={{
          width: 15,
          height: 15,
          borderRadius: 5,
          opacity: 0.2,
          right: 428,
          top: 64,
          rotateZ: -100,
        }}
      />
      <Particle
        style={{
          width: 12,
          height: 12,
          borderRadius: 4,
          opacity: 0.2,
          right: 448,
          top: 203,
          rotateZ: -100,
        }}
      />
      <Particle
        style={{
          width: 12,
          height: 12,
          borderRadius: 4,
          opacity: 0.2,
          right: 262,
          top: 251,
          rotateZ: 100,
        }}
      />
      <Particle
        style={{
          width: 9,
          height: 9,
          borderRadius: 2,
          opacity: 0.2,
          right: 104,
          top: 213,
          rotateZ: 100,
        }}
      />
      <Particle
        style={{
          width: 12,
          height: 12,
          borderRadius: 2,
          opacity: 0.15,
          right: 64,
          top: 111,
          rotateZ: 100,
        }}
      />
    </motion.div>
  );
};

export default Parallax;
