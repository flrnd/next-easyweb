import Link from "next/link";
import { siteMenu } from "../../../__mocks__/fakeData";
import { useUser } from "../../../lib/store/hooks/useUser";
import { BurgerMenu, NavigationBar } from "../../navigation";
import { Logo } from "../../elements";
import NavigationBarWithLogin from "../../navigation/NavigationBarWIthLogin";

const Header = (): JSX.Element => {
  const { session } = useUser();

  if (session) {
    return <NavigationBarWithLogin />;
  } else {
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
  }
};

export default Header;
