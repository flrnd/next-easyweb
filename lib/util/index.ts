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

const validatePasswordStrength = (
  password: string
): { validation: boolean; errors: string[] } => {
  if (!password) return { validation: false, errors: ["empty password"] };

  const messages = {
    lowerCase: "Must contain at least one lowercase letter",
    upperCase: "Must contain at least one uppercase letter",
    number: "Must contain at least one number",
    length: "Must be at least 8 characters long",
    symbol: "Must contain at least one symbol character",
  };

  const errors = [];

  const hasLength = password.length >= 8;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()--__+.]/.test(password);

  if (!hasLength) {
    errors.push(messages.length);
  }

  if (!hasLowerCase) {
    errors.push(messages.lowerCase);
  }

  if (!hasUpperCase) {
    errors.push(messages.upperCase);
  }

  if (!hasNumber) {
    errors.push(messages.number);
  }

  if (!hasSymbols) {
    errors.push(messages.symbol);
  }

  const validation =
    hasLength && hasLowerCase && hasUpperCase && hasNumber && hasSymbols;

  return {
    validation,
    errors,
  };
};

export {
  stringToId,
  calculateGridColumns,
  createNavigationList,
  validatePasswordStrength,
};
