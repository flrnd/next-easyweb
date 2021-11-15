import { INavigationListItem } from "../types/interfaces";
import stringToId from "./stringToId";

const createNavigationList = (menu: string[]): INavigationListItem[] =>
  menu.map((item) => {
    return { name: item, href: `/${stringToId(item)}` };
  });

export default createNavigationList;
