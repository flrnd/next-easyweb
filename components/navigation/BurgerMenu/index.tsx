import Link from "next/link";
import { useState } from "react";
import { NavigationItemList } from "..";
import { Button } from "../../controls";
import { motion } from "framer-motion";

interface IProps {
  menu: string[];
}

const BurgerMenu = ({ menu }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (): void => setIsOpen(!isOpen);

  const modalContentVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const modalVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <div className="burger-menu ml-auto">
        <Button onClick={handleClick}>
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
      </div>

      <motion.div
        className={isOpen ? "modal" : "hidden"}
        onClick={handleClick}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
        variants={modalVariants}
      >
        <motion.div
          className="modal-content"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          variants={modalContentVariants}
        >
          <div className="medium font-bold mb-5">
            <Link href="/" passHref>
              <a>Inicio</a>
            </Link>
          </div>
          <NavigationItemList list={menu} isVertical={isOpen} />
          <Link href="/signin" passHref>
            <a className="p-4 font-bold text-indigo-500 hover:text-indigo-800">
              login
            </a>
          </Link>
        </motion.div>
      </motion.div>
      <div className="nav-menu">
        <NavigationItemList list={menu} />
        <Link href="/signin" passHref>
          <a className="p-4 font-bold text-indigo-500 hover:text-indigo-800">
            login
          </a>
        </Link>
      </div>
    </>
  );
};

export default BurgerMenu;
