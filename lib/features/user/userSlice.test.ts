import userReducer from "lib/features/user/userSlice";

describe("userSlice", () => {
  describe("reducers", () => {
    it("should return the initial state", () => {
      expect(userReducer(undefined, { type: undefined })).toEqual("");
    });
  });
});
