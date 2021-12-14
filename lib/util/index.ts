import { INavigationListItem } from "../types";

const stringToId = (myString: string): string => {
  return myString.toLocaleLowerCase().replace(/[^a-z0-9]/g, "-");
};

const calculateGridColumns = (length: number): number => {
  if (!length) return 0;

  switch (length % 2 === 0) {
    case true:
      return 2;
    case false:
      return 3;
  }
};

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

export { stringToId, calculateGridColumns, createNavigationList };
