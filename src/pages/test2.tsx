import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { scroll } from "framer-motion";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [currentScroll, setCurrentScroll] = useState<any>(0);

  useEffect(() => {
    scroll(progress => setCurrentScroll(progress));
  }, []);

  // console.log({ currentScroll });

  return (
    <div className="w-screen h-[300vh] overflow-x-hidden m-0 p-0 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="wrapper w-[150px] h-[150px] fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
        <motion.div
          className="container w-[100%] h-[100%] overflow-hidden rounded-[30px] bg-[rgba(255,255,255,0.2)]"
          animate={{
            x: currentScroll * 500,
            y: currentScroll * -200,
          }}
          style={{
            scale,
          }}
        >
          <motion.div
            className="item !w-[100%] !h-[100%] origin-[50%_100%] bg-white"
            style={{
              scaleY: scrollYProgress,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
