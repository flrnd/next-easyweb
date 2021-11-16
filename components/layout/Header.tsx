import { Logo } from "../elements";
import { NavigationBar, NavigationList } from "../navigation";

const list = ["services", "about", "contact us"];

const Header = (): JSX.Element => {
  return (
    <div className="container mx-auto">
      <NavigationBar>
        <div className="logo">
          <Logo
            src="/assets/pictures/brand/vitary-logo.png"
            width={237}
            height={64}
          />
        </div>
        <NavigationList list={list} />
      </NavigationBar>
    </div>
  );
};

export default Header;
