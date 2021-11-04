import { INavigationListItem } from "../types/interfaces";

const createNavigationList = (menu: string[]): INavigationListItem[] =>
  menu.map((item) => {
    return { name: item, href: `/${item}` };
  });

export default createNavigationList;
