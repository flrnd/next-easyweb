import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";
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

export const signInUser = createAsyncThunk(
  "users/signin",
  async (options: SignInOptions, thunkAPI) => {
    try {
      const { user, session, error } = await supabase.auth.signIn(options);
      if (error === null) {
        return { user, session };
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    } catch (error) {
      console.error("signIn user: ", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "users/signup",
  async (options: SignUpOptions, thunkAPI) => {
    try {
      const { user, session, error } = await supabase.auth.signUp(options);
      if (error === null) {
        return { user, session };
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    } catch (error) {
      console.error("signUp user: ", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "users/fetchProfile",
  async (userId: string, thunkAPI) => {
    try {
      const results = await supabase
        .from("profiles")
        .select("first_name, last_name, billing_address, avatar_url")
        .eq("id", userId)
        .single();

      const { data, error, status } = results;
      if (data) {
        const profileDetails = data as IProfileDetails;
        return { profileDetails, error, status };
      } else {
        return thunkAPI.rejectWithValue({ error, status, data });
      }
    } catch (error) {
      console.error("fetchUserProfile: ", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "users/updateProfile",
  async (formData: IProfileDetails, thunkAPI) => {
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
        return thunkAPI.rejectWithValue(error);
      } else {
        return { formData };
      }
    } catch (error) {
      console.error("updateUserProfile: ", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signInUser.fulfilled.toString()]: (state, { payload }) => {
      state.user = payload.user;
      state.session = payload.session;
      state.userLoaded = true;
    },
    [signInUser.rejected.toString()]: (state, { payload }) => {
      state.errorMessage = payload.message;
      state.userLoaded = false;
    },
    [signUpUser.fulfilled.toString()]: (state, { payload }) => {
      state.user = payload.user;
      state.session = payload.session;
      state.userLoaded = true;
    },
    [signUpUser.rejected.toString()]: (state, { payload }) => {
      state.errorMessage = payload.message;
      state.userLoaded = false;
    },
    [fetchUserProfile.fulfilled.toString()]: (state, { payload }) => {
      state.profileDetails = payload.profileDetails;
    },
    [fetchUserProfile.fulfilled.toString()]: (state, { payload }) => {
      state.errorMessage = payload.message;
    },
    [updateUserProfile.fulfilled.toString()]: (state, { payload }) => {
      state.profileDetails = payload.formData;
    },
    [updateUserProfile.rejected.toString()]: (state, { payload }) => {
      state.errorMessage = payload.message;
    },
  },
});

export const selectUser = (state: RootState): UserState => state.user;
export const selectUserSession = (state: RootState): Session =>
  state.user.session;
export const selectUserProfile = (state: RootState): IProfileDetails =>
  state.user.profileDetails;
