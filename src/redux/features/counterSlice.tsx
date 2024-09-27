import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload.value;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
