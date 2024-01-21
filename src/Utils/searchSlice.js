import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchVideo = createAsyncThunk(
  "searchVideos",
  async (searchContent) => {
    try {
      const response = await axios.get(
        `
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchContent}&key=AIzaSyBoS-42_ZpuPpZcnBaYsVzJ-RMqhvn9zuc`
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const searchSlice = createSlice({
  name: "searchVideos",
  initialState: {
    loading: "idle",
    searchContent: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchVideo.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchSearchVideo.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.searchContent = action.payload;
      })
      .addCase(fetchSearchVideo.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});
export default searchSlice.reducer;
