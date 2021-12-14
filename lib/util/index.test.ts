import { calculateGridColumns, createNavigationList, stringToId } from ".";

describe("Name to ID", () => {
  it("returns an id", () => {
    const myString = "This is A string";
    const result = stringToId(myString);
    const expectedID = "this-is-a-string";
    expect(result).toEqual(expectedID);
  });
});

describe("Calculate Grid Columns", () => {
  it("returns 2 with even length", () => {
    const result = calculateGridColumns(6);
    expect(result).toBe(2);
  });
  it("returns 3 with odd length", () => {
    const result = calculateGridColumns(7);
    expect(result).toBe(3);
  });
  it("returns 0 with undefined/null length", () => {
    const undefinedResult = calculateGridColumns(undefined);
    const nullResult = calculateGridColumns(null);

    expect(undefinedResult).toBe(0);
    expect(nullResult).toBe(0);
  });
});

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
