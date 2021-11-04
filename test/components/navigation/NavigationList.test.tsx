import { render, within } from "@testing-library/react";
import { NavigationList } from "../../../components/navigation";

describe("Navigation list", () => {
  it("should render a list with items", () => {
    const items = ["one", "two"];
    const { getByRole } = render(<NavigationList list={items} />);
    const list = getByRole("list");
    const { getAllByRole } = within(list);
    expect(getAllByRole("listitem").length).toBe(items.length);
  });
});
