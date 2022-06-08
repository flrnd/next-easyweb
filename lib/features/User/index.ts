import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiError, PostgrestError, Session, User } from "@supabase/supabase-js";
import {
  IProfileDetails,
  RootState,
  SignInOptions,
  SignUpOptions,
  UserState,
} from "../../types";
import { supabase } from "../../util/supabase/supabase-client";

const initialState: UserState = {
  session: null,
  user: null,
  errorMessage: null,
  profileDetails: null,
  siteConfig: null,
  userLoaded: false,
};

export const signInUser = createAsyncThunk<
  { user: User; session: Session },
  SignInOptions,
  { rejectValue: ApiError }
>("users/signin", async (options: SignInOptions, { rejectWithValue }) => {
  try {
    const { user, session, error } = await supabase.auth.signIn(options);
    if (error === null) {
      return { user, session };
    } else {
      return rejectWithValue(error);
    }
  } catch (error) {
    console.error("signIn user: ", error);
    return rejectWithValue(error);
  }
});

export const signUpUser = createAsyncThunk<
  { user: User; session: Session },
  SignUpOptions,
  { rejectValue: ApiError }
>("users/signup", async (options: SignUpOptions, { rejectWithValue }) => {
  try {
    const { user, session, error } = await supabase.auth.signUp(options);
    if (error === null) {
      return { user, session };
    } else {
      return rejectWithValue(error);
    }
  } catch (error) {
    console.error("signUp user: ", error);
    return rejectWithValue(error);
  }
});

export const fetchUserProfile = createAsyncThunk<
  { data: IProfileDetails; error: PostgrestError; status: number },
  string,
  { rejectValue: { error: PostgrestError; status: number } }
>("users/fetchProfile", async (userId: string, { rejectWithValue }) => {
  try {
    const results = await supabase
      .from("profiles")
      .select("first_name, last_name, billing_address, avatar_url")
      .eq("id", userId)
      .single();

    const { data, error, status } = results;
    if (data) {
      return { data, error, status };
    } else {
      return rejectWithValue({ error, status });
    }
  } catch (error) {
    console.error("fetchUserProfile: ", error);
    rejectWithValue(error);
  }
});

export const updateUserProfile = createAsyncThunk<
  { formData: IProfileDetails },
  IProfileDetails,
  { rejectValue: PostgrestError }
>(
  "users/updateProfile",
  async (formData: IProfileDetails, { rejectWithValue }) => {
    try {
      const user = supabase.auth.user();

      const update = {
        id: user.id,
        first_name: formData.first_name,
        last_name: formData.last_name,
        billing_address: formData.billing_address,
        avatar_url: formData.avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase
        .from("profiles")
        .upsert(update, { returning: "minimal" });

      if (error) {
        return rejectWithValue(error);
      } else {
        return { formData };
      }
    } catch (error) {
      console.error("updateUserProfile: ", error);
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.session = payload.session;
      state.userLoaded = true;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      state.errorMessage = payload.message;
      state.userLoaded = false;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.session = payload.session;
      state.userLoaded = true;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.errorMessage = payload.message;
      state.userLoaded = false;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, { payload }) => {
      state.profileDetails = payload.data;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, { payload }) => {
      state.errorMessage = payload.error.message;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, { payload }) => {
      state.profileDetails = payload.formData;
    });
    builder.addCase(updateUserProfile.rejected, (state, { payload }) => {
      state.errorMessage = payload.message;
    });
  },
});

export const selectUser = (state: RootState): UserState => state.user;
export const selectUserSession = (state: RootState): Session =>
  state.user.session;
export const selectUserProfile = (state: RootState): IProfileDetails =>
  state.user.profileDetails;
