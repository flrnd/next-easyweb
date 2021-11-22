import { useState } from "react";
import { NavigationList } from ".";

interface IProps {
  menu: string[];
}

const BurgerMenu = ({ menu }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (): void => setIsOpen(!isOpen);
  return (
    <>
      <div className="burger-menu">
        <button
          id="nav-toggle"
          className="flex items-center"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className={isOpen ? "modal" : "hidden"} onClick={handleClick}>
        <div className="modal-content">
          <div className="medium font-bold mb-5">Menu</div>
          <NavigationList list={menu} isVertical={isOpen} />
        </div>
      </div>
      <div className="hidden md:block">
        <NavigationList list={menu} />
      </div>
    </>
  );
};

export default BurgerMenu;
