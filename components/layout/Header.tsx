import Link from "next/link";
import { siteMenu } from "../../test/__mocks__/fakeData";
import { Logo } from "../elements";
import { BurgerMenu, NavigationBar } from "../navigation";

const Header = (): JSX.Element => {
  return (
    <div className="container mx-auto">
      <NavigationBar>
        <Link href="/" passHref>
          <a>
            <Logo
              src="/assets/pictures/brand/vitary-logo.png"
              width={237}
              height={64}
            />
          </a>
        </Link>

        <BurgerMenu menu={siteMenu} />
      </NavigationBar>
    </div>
  );
};

export default Header;
