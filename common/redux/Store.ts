import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/common/redux/auth/AuthSlice";

export const store = configureStore({
  reducer: combineSlices(authSlice),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
