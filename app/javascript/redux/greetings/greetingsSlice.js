import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const fetchGreetings = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    const response = await fetch("/random");
    const data = await response.json();
    return data;
  }
);

const greetingsSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default greetingsSlice.reducer;
