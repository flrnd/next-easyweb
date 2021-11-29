import classNames from "classnames";
import createNavigationList from "../../helpers/createNavigationList";
import NavigationListItem from "./NavigationListItem";

interface Props {
  isVertical?: boolean;
  list: string[];
}
const NavigationList = ({ isVertical = false, list }: Props): JSX.Element => {
  const navigationList = createNavigationList(list);

  return (
    <ul className={classNames("flex", isVertical && "flex-col")}>
      {navigationList.map((navItem) => (
        <NavigationListItem
          key={navItem.name}
          item={navItem}
          margin={!isVertical && "ml-4"}
        />
      ))}
    </ul>
  );
};

export default NavigationList;
