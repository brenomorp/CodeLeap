import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return axios
    .get("https://dev.codeleap.co.uk/careers/")
    .then((res) => res.data);
});

interface IState {
  loading: boolean;
  error: string | null | undefined;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{
      id: number;
      username: string;
      created_datetime: string;
      title: string;
      content: string;
    }>;
  };
}

const initialState: IState = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [
      {
        id: 0,
        username: "",
        created_datetime: "",
        title: "",
        content: "",
      },
    ],
  },
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const postReducer = postSlice.reducer;
