import { motion } from "framer-motion";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ReactNode } from "react";

import SEO from "next-seo.config";

interface Props {
  children: ReactNode;
}

const LandingLayout = ({ children }: Props): JSX.Element => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className="layout">
      <Head>
        <link
          rel="preload"
          href="/fonts/sentient/Sentient-Variable.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <motion.main
        className="py-6"
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default LandingLayout;
