import Link from "next/link";
import { useState } from "react";
import { NavigationItemList } from "..";
import { Button } from "../../controls";

interface IProps {
  menu: string[];
}

const BurgerMenu = ({ menu }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (): void => setIsOpen(!isOpen);

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

      <div className={isOpen ? "modal" : "hidden"} onClick={handleClick}>
        <div className="modal-content">
          <div className="medium font-bold mb-5">Menu</div>
          <NavigationItemList list={menu} isVertical={isOpen} />
          <Link href="/signin" passHref>
            <a className=" medium font-bold text-indigo-500 hover:text-indigo-800">
              Login
            </a>
          </Link>
        </div>
      </div>
      <div className="nav-menu">
        <NavigationItemList list={menu} />
        <Link href="/signin" passHref>
          <a className="p-4 font-bold text-indigo-500 hover:text-indigo-800">
            Login
          </a>
        </Link>
      </div>
    </>
  );
};

export default BurgerMenu;
