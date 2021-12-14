import classNames from "classnames";
import { NavigationListItem } from "..";
import { createNavigationList } from "../../../lib/util";

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
