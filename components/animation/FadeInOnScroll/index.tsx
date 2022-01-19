import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

const FadeInOnScroll = ({
  duration = 0.5,
  delay = 0.2,
  children,
}: Props): JSX.Element => {
  const [animationStart, setAnimationStart] = useState(false);

  const variants = {
    visible: { opacity: 1, transition: { duration: duration, delay: delay } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    const handleScroll = () => setAnimationStart(true);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={animationStart ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
