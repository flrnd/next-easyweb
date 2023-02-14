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

const mockSignUpOptions: SignUpOptions = {
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
      // TODO:  using any to avoid ts compiler error.
      const { user, session }: any = result.payload;

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

    it("should handle signUp", async () => {
      mockReturnValue = {
        user: { id: "1" },
        session: { access_token: "token" },
        error: null,
      };

      const result = await initialStore.dispatch(signUpUser(mockSignUpOptions));
      const { user, session }: any = result.payload;

      expect(result.type).toEqual("users/signup/fulfilled");
      expect(user).toEqual({ id: "1" });
      expect(session).toEqual({ access_token: "token" });
    });

    it("should handle signUp errors", async () => {
      mockReturnValue = {
        user: {},
        session: {},
        error: "some error",
      };
      const result = await initialStore.dispatch(signInUser(mockSignUpOptions));

      expect(result.type).toEqual("users/signin/rejected");
      expect(result.payload).toBe("some error");
    });

    it("handles fetchUserProfile", async () => {
      const userId = "userId";

      const returnValue = {
        data: { full_name: "John" },
        error: null,
      };

      const userProfileQueryMock = userProfileQuery as jest.MockedFunction<any>;
      userProfileQueryMock.mockImplementation(() => returnValue);

      const result = await initialStore.dispatch(fetchUserProfile(userId));

      expect(result.type).toEqual("users/fetchProfile/fulfilled");
      expect(result.payload).toEqual({
        data: { full_name: "John" },
      });
    });

    it("handles fetchUserProfile error", async () => {
      const userId = "userId";
      const returnValue = {
        data: {},
        error: {
          error: { message: "Internal error" },
        },
      };

      const userProfileQueryMock = userProfileQuery as jest.MockedFunction<any>;
      userProfileQueryMock.mockImplementation(() => returnValue);

      const result = await initialStore.dispatch(fetchUserProfile(userId));

      expect(result.type).toEqual("users/fetchProfile/rejected");
      expect(result.payload).toEqual({ error: { message: "Internal error" } });
    });
  });
});
