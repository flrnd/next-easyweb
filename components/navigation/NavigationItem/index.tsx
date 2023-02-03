import classNames from "classnames";
import Link from "next/link";

import { INavigationListItem } from "../../../lib/types";

interface Props {
  item: INavigationListItem;
  margin?: string;
}

const NavigationItem = ({ item, margin }: Props): JSX.Element => {
  return (
    <li aria-label="navigation-item">
      <Link href={item.href} className={classNames(margin)}>
        {item.name}
      </Link>
    </li>
  );
};

export default NavigationItem;
