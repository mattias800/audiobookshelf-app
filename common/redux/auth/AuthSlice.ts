import { createSlice } from "@reduxjs/toolkit";

export interface AuthSliceState {
  serverUrl: string | undefined;
  token: string | undefined;
}

const initialState: AuthSliceState = {
  serverUrl: "https://audiobookshelf.tacoduck.party/",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    setToken: create.reducer<string>((state, action) => {
      state.token = action.payload;
    }),
    setServerUrl: create.reducer<string>((state, action) => {
      state.serverUrl = action.payload;
    }),
  }),
  selectors: {
    token: (state) => state.token,
    serverUrl: (state) => state.serverUrl,
  },
});
