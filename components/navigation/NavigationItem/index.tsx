import classNames from "classnames";
import Link from "next/link";

import { INavigationListItem } from "../../../lib/types";

interface Props {
  item: INavigationListItem;
  margin?: string;
}

const NavigationItem = ({ item, margin }: Props): JSX.Element => {
  return (
    <li>
      <Link href={item.href}>
        <a className={classNames(margin)}>{item.name}</a>
      </Link>
    </li>
  );
};

export default NavigationItem;
