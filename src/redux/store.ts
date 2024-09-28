import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import Logger from "./middleware/logger";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});
console.log(store.getState());
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
