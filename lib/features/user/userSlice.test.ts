import { setupStore } from "lib/store";
import { signInUser } from "./userSlice";

jest.mock("lib/util/supabase/supabase-client", () => ({
  __esModule: true,
  supabase: {
    rpc: jest.fn(),
  },
}));

const initialStore = setupStore();

describe("userSlice", () => {
  describe("reducers", () => {
    it("has initialState", () => {
      const initialState = {
        user: {
          errorMessage: null,
          profileDetails: null,
          session: null,
          siteConfig: null,
          user: null,
          userLoaded: false,
        },
      };

      expect(initialStore.getState()).toEqual(initialState);
    });

    it("handles signIn", () => {
      expect(
        initialStore.dispatch(
          signInUser({
            email: "some@email.com",
            password: "super secure pasword 12#",
          })
        )
      );
    });
  });
});
