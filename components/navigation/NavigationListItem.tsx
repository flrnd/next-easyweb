import classNames from "classnames";
import Link from "next/link";

import { INavigationListItem } from "../../types/interfaces";

interface Props {
  item: INavigationListItem;
  margin?: string;
}

const NavigationListItem = ({ item, margin }: Props): JSX.Element => {
  return (
    <li>
      <Link href={item.href}>
        <a className={classNames(margin)}>{item.name}</a>
      </Link>
    </li>
  );
};

export default NavigationListItem;
