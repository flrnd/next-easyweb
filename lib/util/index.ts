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

const validatePasswordStrength = (password: string): boolean => {
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()--__+.]/.test(password);

  return hasLowerCase && hasUpperCase && hasNumber && hasSymbols;
};

export {
  stringToId,
  calculateGridColumns,
  createNavigationList,
  validatePasswordStrength,
};
