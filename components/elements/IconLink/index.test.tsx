import { HomeIcon } from "@heroicons/react/outline";
import { render } from "@testing-library/react";
import IconLink from ".";

describe("IconLink", () => {
  it("renders a icon with a link", () => {
    const href = "https://www.google.com/";
    const { getByRole } = render(<IconLink icon={<HomeIcon />} href={href} />);

    const link = getByRole("link") as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link.href).toBe(href);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });
});
