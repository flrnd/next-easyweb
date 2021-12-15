import {
  calculateGridColumns,
  createNavigationList,
  stringToId,
  validatePasswordStrength,
} from ".";

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

describe("Validate password streng", () => {
  it("Should return false and empty password when no password passed", () => {
    const result = validatePasswordStrength("");
    expect(result.validation).toBe(false);
    expect(result.errors).toEqual(["empty password"]);
  });

  it("123456 Should return false and 4 error messages", () => {
    const password = "123456";

    const result = validatePasswordStrength(password);

    expect(result.validation).toBe(false);
    expect(result.errors.length).toBe(4);
  });

  it("12345678 Should return false and 3 error messages", () => {
    const password = "12345678";

    const result = validatePasswordStrength(password);

    expect(result.validation).toBe(false);
    expect(result.errors.length).toBe(3);
  });

  it("12345678a Should return false and 2 error messages", () => {
    const password = "12345678a";

    const result = validatePasswordStrength(password);

    expect(result.validation).toBe(false);
    expect(result.errors.length).toBe(2);
  });

  it("aA12345678 Should return false and 1 error message", () => {
    const password = "aA12345678";

    const result = validatePasswordStrength(password);

    expect(result.validation).toBe(false);
    expect(result.errors.length).toBe(1);
  });

  it("aA12345678# Should return true and 0 error messages", () => {
    const password = "aA12345678#";

    const result = validatePasswordStrength(password);

    expect(result.validation).toBe(true);
    expect(result.errors.length).toBe(0);
  });
});
