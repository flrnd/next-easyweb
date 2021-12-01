import { createNavigationList } from "../../lib/helpers/";

describe("Create navigation List", () => {
  it("should return a Navigation List from a string list", () => {
    const list = ["item", "list"];
    const expected = [
      {
        name: "item",
        href: "/item",
      },
      {
        name: "list",
        href: "/list",
      },
    ];

    expect(createNavigationList(list)).toEqual(expected);
  });
});
