import { INavigationListItem } from "../types/interfaces";
import stringToId from "./stringToId";

const createNavigationList = (menu: string[]): INavigationListItem[] =>
  menu.map((item) => {
    switch (item.toLowerCase()) {
      case "home":
        return { name: "Home", href: "/" };
      case "inicio":
        return { name: "Inicio", href: "/" };
      default:
        return { name: item, href: `/${stringToId(item)}` };
    }
  });

export default createNavigationList;
