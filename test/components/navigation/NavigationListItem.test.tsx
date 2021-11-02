import { render, screen, within } from "@testing-library/react";
import { NavigationListItem } from "../../../components/navigation";

describe("Navigation List Item", () => {
  it("should render a <li> with link inside", () => {
    const item = {
      name: "name",
      href: "/name",
    };
    const URL = "http://localhost";
    const expetedHref = `${URL}${item.href}`;

    render(<NavigationListItem item={item} />);

    const listItem = screen.getByRole("listitem");
    const { getByRole } = within(listItem);
    const link = getByRole("link", { name: item.name }) as HTMLAnchorElement;

    expect(link.href).toBe(expetedHref);
  });
});
