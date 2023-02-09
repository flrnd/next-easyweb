import { fireEvent, render } from "@testing-library/react";
import BurgerMenu from ".";

const setup = () => {
  const menu = ["services", "about", "contact us"];
  const utils = render(<BurgerMenu menu={menu} />);

  const button = utils.getByLabelText("menu-button");
  const buttonIcon = utils.getByTitle("menu");
  const modal = utils.getByRole("dialog", { hidden: true });
  const modalContent = utils.getByLabelText("modal-content");
  const navigationLists = utils.getAllByLabelText("navigation-list");
  const navigationItems = utils.getAllByLabelText("navigation-item");

  return {
    button,
    buttonIcon,
    modal,
    modalContent,
    navigationLists,
    navigationItems,
    ...utils,
  };
};

describe("Burger Menu", () => {
  it("Should render a button", () => {
    const { button, buttonIcon } = setup();

    expect(button).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
  });

  it("should render a modal on button click", () => {
    const { modal, modalContent, button } = setup();

    expect(modal).toBeInTheDocument();
    fireEvent.click(button);
    expect(modal).toHaveClass("modal");
    expect(modalContent).toBeInTheDocument();
  });

  it("Should display a modal with menu items", () => {
    const { navigationLists, navigationItems } = setup();

    expect(navigationLists.length).toBe(2); // mobile and desktop
    expect(navigationItems.length).toBe(6); // menu items * 2, since its mobile and desktop
  });
});
