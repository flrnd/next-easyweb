import { render } from "@testing-library/react";
import { NavigationListItem } from "../../../components/navigation";

describe("Navigation List Item", () => {
  const item = {
    name: "name",
    href: "/name",
  };

  it("should render a <li>", () => {
    const { getByRole } = render(<NavigationListItem item={item} />);

    expect(getByRole("listitem").nextSibling).toBe(item.name);
  });
});
