import NavigationBar from "./NavigationBar";

const Header = (): JSX.Element => {
  return (
    <div className="header bg-gray-500">
      <div className="">
        <NavigationBar />
      </div>
    </div>
  );
};

export default Header;
