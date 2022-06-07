import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";
import {
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
      console.error(error);
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
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "users/getProfile",
  async (userId: string, thunkAPI) => {
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
        return thunkAPI.rejectWithValue({ error, status, data });
      }
    } catch (error) {
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
  },
});

export const selectUser = (state: RootState): UserState => state.user;
export const selectUserSession = (state: RootState): Session =>
  state.user.session;
