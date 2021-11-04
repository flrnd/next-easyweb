import Link from "next/link";

import { INavigationListItem } from "../../types/interfaces";

interface Props {
  item: INavigationListItem;
}

const NavigationListItem = ({ item }: Props): JSX.Element => {
  return (
    <li>
      <Link href={item.href}>
        <a className="px-2">{item.name}</a>
      </Link>
    </li>
  );
};

export default NavigationListItem;
