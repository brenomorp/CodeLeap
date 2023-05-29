import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return axios
    .get("https://dev.codeleap.co.uk/careers/")
    .then((res) => res.data);
});

// export const addPost = createAsyncThunk("posts/addPost", async () => {
//   return axios.post("https://dev.codeleap.co.uk/careers/", {

//   });
// });

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
  newPostData: {
    username: string;
    created_datetime: null | Date;
    title: string;
    content: string;
  };
}

export const initialState: IState = {
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
  newPostData: {
    username: "",
    created_datetime: null,
    title: "",
    content: "",
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getUserName: (state, action) => {
      state.newPostData.username = action.payload;
    },
    getPostData: (state, action) => {
      state.newPostData = { ...state.newPostData, ...action.payload };
    },
  },
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

export const { getUserName, getPostData } = postSlice.actions;
export const postsReducer = postSlice.reducer;
