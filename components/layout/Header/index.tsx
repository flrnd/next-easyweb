import Link from "next/link";
import { logotype, siteMenu } from "../../../__mocks__/fakeData/data";
import { BurgerMenu, NavigationBar } from "../../navigation";
import { Logo } from "../../elements";

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
