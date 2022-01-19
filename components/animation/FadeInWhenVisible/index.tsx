import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  duration?: number;
  delay?: number;
  children: ReactNode;
}

const FadeInWhenVisible = ({
  duration = 0.5,
  delay = 0.2,
  children,
}: Props): JSX.Element => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: { opacity: 1, transition: { duration: duration, delay: delay } },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
