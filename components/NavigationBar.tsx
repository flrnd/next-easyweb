type Menu = {
  menu: string[];
};

const NavigationBar = ({
  menu = ["Home", "Services", "About"],
}: Menu): JSX.Element => {
  return (
    <nav className="flex justify-between container p-4">
      <div className="logo">Logotype</div>
      <div className="flex">
        {menu.map((item) => (
          <div key={item} className="px-2">
            {item}
          </div>
        ))}
      </div>
      <div className="cta">cta</div>
    </nav>
  );
};

export default NavigationBar;
