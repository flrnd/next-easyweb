import { setupStore } from "lib/store";
import { SignInOptions, SignUpOptions } from "lib/types";
import { signInUser, signUpUser } from "./userSlice";

const mockReturnValue = {
  user: { id: "1" },
  session: { access_token: "token" },
  error: null,
};

jest.mock("lib/util/supabase/supabase-client", () => ({
  __esModule: true,
  supabase: {
    auth: {
      signIn: jest.fn(() => mockReturnValue),
      signUp: jest.fn(() => mockReturnValue),
    },
  },
}));

const initialStore = setupStore();

const mockSignInOptions: SignInOptions = {
  email: "some@email.com",
  password: "super Secure password 12#",
};

const mockSingUpOptions: SignUpOptions = {
  email: "my@email.com",
  password: "secure password",
};

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
        signInUser(mockSignInOptions)
      );

      expect(payload).toEqual({
        session: { access_token: "token" },
        user: { id: "1" },
      });
    });

    it("handles signUp", async () => {
      const { payload } = await initialStore.dispatch(
        signUpUser(mockSingUpOptions)
      );

      expect(payload).toEqual({
        session: { access_token: "token" },
        user: { id: "1" },
      });
    });
  });
});
