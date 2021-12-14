import { render } from "@testing-library/react";
import NavigationItemList from ".";
import { UserContextProvider } from "../../../lib/store/context/UserContextProvider";

describe("Navigation list", () => {
  it("should render a list with items", () => {
    const items = ["one", "two"];
    const { getAllByRole } = render(
      <UserContextProvider>
        <NavigationItemList list={items} />
      </UserContextProvider>
    );
    expect(getAllByRole("listitem")).toHaveLength(items.length);
  });
});
