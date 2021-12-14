import classNames from "classnames";
import { NavigationItem } from "..";
import { useUser } from "../../../lib/store/hooks/useUser";
import { createNavigationList } from "../../../lib/util";
import { Button } from "../../controls";

interface Props {
  isVertical?: boolean;
  list: string[];
}

const NavigationItemList = ({
  isVertical = false,
  list,
}: Props): JSX.Element => {
  const navigationList = createNavigationList(list);
  const { session } = useUser();

  return (
    <div
      className={classNames("flex", isVertical && "flex-col", "items-center")}
    >
      <ul className={classNames("flex", isVertical && "flex-col")}>
        {navigationList.map((navItem) => (
          <NavigationItem
            key={navItem.name}
            item={navItem}
            margin={!isVertical && "ml-4"}
          />
        ))}
      </ul>
      {session ? (
        <Button
          background="bg-indigo-600"
          textColor="text-white"
          rounded="rounded-md"
          shadow="shadow-md"
          margin="ml-4"
          hoverBg="bg-indigo-700"
          href="/dashboard/profile"
          label="Dashboard"
        />
      ) : (
        <Button
          background="bg-indigo-600"
          textColor="text-white"
          rounded="rounded-md"
          shadow="shadow-md"
          margin={classNames(!isVertical && "ml-4")}
          hoverBg="bg-indigo-700"
          href="/signin"
          label="sign in"
        />
      )}
    </div>
  );
};

export default NavigationItemList;
