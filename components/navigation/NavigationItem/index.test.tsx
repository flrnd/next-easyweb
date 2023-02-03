import { render, screen, within } from "@testing-library/react";
import NavigationItem from ".";

const mockUrl = (url: string): string => `http://localhost${url}`;

describe("Navigation List Item", () => {
  it("should render a <li> with link inside", () => {
    const item = {
      name: "name",
      href: "/name",
    };

    const expectedHref = mockUrl(item.href);

    render(<NavigationItem item={item} />);

    const listItem = screen.getByRole("listitem");
    const { getByRole } = within(listItem);
    const link = getByRole("link", {
      name: item.name,
    }) as HTMLAnchorElement;

    expect(link.href).toBe(expectedHref);
  });
});
