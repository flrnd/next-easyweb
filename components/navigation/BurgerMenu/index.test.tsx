import { render } from "@testing-library/react";
import { BurgerMenu } from "..";

describe("Burger Menu", () => {
  const menu = ["services", "about", "contact us"];

  it("renders mobile and desktop menus", () => {
    const { getAllByRole } = render(<BurgerMenu menu={menu} />);

    expect(getAllByRole("listitem")).toHaveLength(menu.length * 2);
  });

  it("render a button", () => {
    const { getByTitle, getAllByRole } = render(<BurgerMenu menu={menu} />);

    expect(getByTitle("menu")).toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(menu.length * 2);
  });
});
