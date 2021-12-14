import { render } from "@testing-library/react";
import { SocialIconList } from "..";

describe("SocialIconList", () => {
  it("renders a list of N Social Icons with Link", () => {
    const items = [
      {
        icon: "twitter",
        href: "https://www.example.com",
      },
      {
        icon: "facebook",
        href: "https://www.example.es",
      },
    ];

    const { getAllByRole } = render(<SocialIconList items={items} />);

    const links = getAllByRole("link");
    const icons = document.querySelectorAll("svg");
    expect(links).toHaveLength(items.length);
    expect(icons).toHaveLength(items.length);
  });
});
