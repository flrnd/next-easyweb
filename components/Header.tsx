import NavigationBar from "./NavigationBar";
import NavigationMenu from "./NavigationMenu";

const menu = ["home", "services", "about"];

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <NavigationBar>
        <div className="logo">logo</div>
        <NavigationMenu menu={menu} />
      </NavigationBar>
    </div>
  );
};

export default Header;
