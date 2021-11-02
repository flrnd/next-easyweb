import Link from "next/link";

import { INavigationListItem } from "../types/interfaces";

interface Props {
  item: INavigationListItem;
}

const NavigationListItem = ({ item }: Props): JSX.Element => {
  return (
    <Link href={item.href}>
      <a className="px-2">{item.name}</a>
    </Link>
  );
};

export default NavigationListItem;
