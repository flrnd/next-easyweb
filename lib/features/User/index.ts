import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";
import { RootState, SignInOptions, UserState } from "../../types";
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
  "users/login",
  async (options: SignInOptions, thunkAPI) => {
    try {
      const { user, session, error } = await supabase.auth.signIn(options);
      if (error === null) {
        return { user, session };
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    } catch (error) {
      console.error(error);
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
  },
});

export const selectUser = (state: RootState): UserState => state.user;
export const selectUserSession = (state: RootState): Session =>
  state.user.session;
