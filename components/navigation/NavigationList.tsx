import createNavigationList from "../../util/createNavigationList";
import NavigationListItem from "./NavigationListItem";

interface Props {
  isVertical?: boolean;
  list: string[];
}
const NavigationList = ({ isVertical = false, list }: Props): JSX.Element => {
  const navigationList = createNavigationList(list);

  return (
    <ul className={`flex ${isVertical && "flex-col"}`}>
      {navigationList.map((navItem) => (
        <li key={navItem.name}>
          <NavigationListItem item={navItem} />
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
