import { render } from "@testing-library/react";
import { BurgerMenu } from "..";
import { UserContextProvider } from "../../../lib/store/context/UserContextProvider";

describe("Burger Menu", () => {
  const menu = ["services", "about", "contact us"];

  it("renders mobile and desktop menus", () => {
    const { getAllByRole } = render(
      <UserContextProvider>
        <BurgerMenu menu={menu} />
      </UserContextProvider>
    );

    expect(getAllByRole("listitem")).toHaveLength(menu.length * 2);
  });

  it("render a button", () => {
    const { getByTitle, getAllByRole } = render(
      <UserContextProvider>
        <BurgerMenu menu={menu} />
      </UserContextProvider>
    );

    expect(getByTitle("menu")).toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(menu.length * 2);
  });
});
