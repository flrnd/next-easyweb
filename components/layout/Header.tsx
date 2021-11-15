import { NavigationBar, NavigationList } from "../navigation";

const list = ["services", "about", "contact us"];

const Header = (): JSX.Element => {
  return (
    <div className="navigation-bar">
      <NavigationBar>
        <div className="logo">logo</div>
        <NavigationList list={list} />
      </NavigationBar>
    </div>
  );
};

export default Header;
