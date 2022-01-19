import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  duration?: number;
  delay?: number;
  children: ReactNode;
}

const FadeIn = ({
  duration = 0.5,
  delay = 0.1,
  children,
}: Props): JSX.Element => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.span>
  );
};

export default FadeIn;
