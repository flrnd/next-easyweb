import { render } from "@testing-library/react";
import NavigationItemList from ".";

describe("Navigation list", () => {
  it("should render a list with items", () => {
    const items = ["one", "two"];
    const { getAllByRole } = render(<NavigationItemList list={items} />);
    expect(getAllByRole("listitem")).toHaveLength(items.length);
  });
});
