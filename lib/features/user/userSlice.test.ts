import { setupStore } from "lib/store";
import { signInUser } from "./userSlice";

const mockReturnValue = {
  user: { id: "1" },
  session: { access_token: "token" },
  error: null,
};

jest.mock("lib/util/supabase/supabase-client", () => ({
  __esModule: true,
  supabase: {
    auth: { signIn: jest.fn(() => mockReturnValue) },
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

    it("handles signIn", async () => {
      const { payload } = await initialStore.dispatch(
        signInUser({
          email: "some@email.com",
          password: "super secure pasword 12#",
        })
      );

      expect(payload).toEqual({
        session: { access_token: "token" },
        user: { id: "1" },
      });
    });
  });
});
