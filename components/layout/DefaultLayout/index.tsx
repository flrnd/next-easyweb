import { DefaultSeo } from "next-seo";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Footer, Header } from "..";

import SEO from "../../../next-seo.config";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props): JSX.Element => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className="layout">
      <DefaultSeo {...SEO} />
      <Header />
      <motion.main
        className="py-6 px-2 md:px-0"
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
