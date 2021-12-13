import { cleanup, render } from "@testing-library/react";
import { BurgerMenu } from "../../../components/navigation";

afterAll(cleanup);

describe("Burger Menu", () => {
  const menu = ["services", "about", "contact us"];

  it("renders mobile and desktop menus", () => {
    const { getAllByRole } = render(<BurgerMenu menu={menu} />);

    expect(getAllByRole("listitem")).toHaveLength(menu.length * 2);
  });

  it("render a button", () => {
    const { getByTitle } = render(<BurgerMenu menu={menu} />);

    expect(getByTitle("menu")).toBeInTheDocument();
  });
});
