import { setupStore } from "lib/store";
import { SignInOptions, SignUpOptions } from "lib/types";
import userProfileQuery from "lib/util/supabase/userProfileQuery";
import reducer, {
  fetchUserProfile,
  initialState,
  signInUser,
  signUpUser,
} from "./userSlice";

let mockReturnValue;

jest.mock("lib/util/supabase/supabase-client", () => ({
  __esModule: true,
  supabase: {
    auth: {
      signIn: jest.fn(() => mockReturnValue),
      signUp: jest.fn(() => mockReturnValue),
    },
  },
}));

jest.mock("lib/util/supabase/userProfileQuery", () => jest.fn());

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
    it("Should return the initial State", () => {
      expect(
        reducer(undefined, {
          type: undefined,
        })
      ).toEqual(initialState);
    });

    it("should handle signIn", async () => {
      mockReturnValue = {
        error: null,
        user: { id: "1" },
        session: { access_token: "token" },
      };

      const result = await initialStore.dispatch(signInUser(mockSignInOptions));
      const { user, session } = result.payload;

      expect(result.type).toEqual("users/signin/fulfilled");
      expect(user).toEqual({ id: "1" });
      expect(session).toEqual({ access_token: "token" });
    });

    it("should handle signIn errors", async () => {
      mockReturnValue = {
        user: {},
        session: {},
        error: "some error",
      };

      const result = await initialStore.dispatch(signInUser(mockSignInOptions));

      expect(result.type).toEqual("users/signin/rejected");
      expect(result.payload).toBe("some error");
    });

    it("handles signUp", async () => {
      mockReturnValue = {
        user: { id: "1" },
        session: { access_token: "token" },
        error: null,
      };

      const { payload } = await initialStore.dispatch(
        signUpUser(mockSingUpOptions)
      );

      expect(payload).toEqual({
        session: { access_token: "token" },
        user: { id: "1" },
      });
    });

    it("handles signUp error", async () => {
      mockReturnValue = {
        user: {},
        session: {},
        error: "some error",
      };

      const { payload } = await initialStore.dispatch(
        signUpUser(mockSingUpOptions)
      );

      expect(payload).toEqual("some error");
    });

    it("handles fetchUserProfile", async () => {
      const userId = "userId";

      const returnValue = {
        data: { full_name: "John" },
        error: null,
        status: {},
      };

      const userProfileQueryMock = userProfileQuery as jest.MockedFunction<any>;
      userProfileQueryMock.mockImplementation(() => returnValue);

      const { payload } = await initialStore.dispatch(fetchUserProfile(userId));

      expect(payload).toEqual(returnValue);
    });
  });
});
