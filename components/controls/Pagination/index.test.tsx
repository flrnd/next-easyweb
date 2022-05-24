import { render } from "@testing-library/react";
import Pagination from ".";
import { IProject } from "../../../lib/types";

const path = "test-projects";
const items: IProject[] = [
  {
    slug: "some-project",
    title: "Some project",
    client: "ACME",
    year: "2011",
    description: "description some project",
    ogImage: { url: "" },
    url: "http://someproject.com/",
    content: "empty",
  },
  {
    slug: "another-project",
    title: "Another project",
    client: "MEAC",
    year: "2012",
    description: "description from another project",
    ogImage: { url: "" },
    url: "http://anotherproject.com/",
    content: "empty",
  },
  {
    slug: "super-branding",
    title: "Super brand branding",
    client: "STAR",
    year: "2013",
    description: "description of super brand branding",
    ogImage: { url: "" },
    url: "http://brandbrand.com/",
    content: "empty",
  },
];

describe("Pagination", () => {
  it("Should render a next item link", () => {
    const position = 0; // array position

    const expectedNext = `http://localhost/${path}/${items[1].slug}`;

    const { getAllByRole } = render(
      <Pagination current={position} items={items} path={path} />
    );
    const links = getAllByRole("link") as HTMLAnchorElement[];

    expect(links.length).toBe(1);
    expect(links[0].href).toBe(expectedNext);
  });

  it("Should render previous and next item links", () => {
    const position = 1; // array position

    const expectedPrevious = `http://localhost/${path}/${items[0].slug}`;
    const expectedNext = `http://localhost/${path}/${items[2].slug}`;

    const { getAllByRole } = render(
      <Pagination current={position} items={items} path={path} />
    );
    const links = getAllByRole("link") as HTMLAnchorElement[];

    expect(links.length).toBe(2);
    expect(links[0].href).toBe(expectedPrevious);
    expect(links[1].href).toBe(expectedNext);
  });

  it("Should render a previous item link", () => {
    const position = 2; // array position

    const expectedPrevious = `http://localhost/${path}/${items[1].slug}`;

    const { getAllByRole } = render(
      <Pagination current={position} items={items} path={path} />
    );
    const links = getAllByRole("link") as HTMLAnchorElement[];

    expect(links.length).toBe(1);
    expect(links[0].href).toBe(expectedPrevious);
  });
});
