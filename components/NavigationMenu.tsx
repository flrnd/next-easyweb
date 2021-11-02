import Link from "next/link";

interface IMenu {
  isVertical?: boolean;
  menu: string[];
}
const NavigationMenu = ({ isVertical = false, menu }: IMenu): JSX.Element => {
  const navigationMenuItems = menu.map((item) => {
    return { name: item, href: `/${item}` };
  });

  return (
    <div className={`flex ${isVertical && "flex-col"}`}>
      {navigationMenuItems.map((navItem) => (
        <span key={navItem.name} className="px-2">
          <Link href={navItem.href}>
            <a>{navItem.name}</a>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default NavigationMenu;
