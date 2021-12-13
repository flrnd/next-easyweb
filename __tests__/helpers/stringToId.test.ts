import { stringToId } from "../../lib/helpers";

describe("Name to ID", () => {
  it("returns an id", () => {
    const myString = "This is A string";
    const result = stringToId(myString);
    const expectedID = "this-is-a-string";
    expect(result).toEqual(expectedID);
  });
});
