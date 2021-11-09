import calculateGridColumns from "../../util/calculateGridColumns";

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
