import Logo from "components/elements/Logo";
import BurgerMenu from "components/navigation/BurgerMenu";
import NavigationBar from "components/navigation/NavigationBar";
import { logotype, siteMenu } from "fakeData/data";
import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <div className="container mx-auto">
      <NavigationBar>
        <Link href="/" passHref>
          <a>
            <Logo
              responsive={false}
              src={logotype.src}
              width={logotype.dimensions.width}
              height={logotype.dimensions.height}
            />
          </a>
        </Link>

        <BurgerMenu menu={siteMenu} />
      </NavigationBar>
    </div>
  );
};

export default Header;
