import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchYoutubeVideos = createAsyncThunk(
  "youtubevideos",
  async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDQUNlpl2iW69Q557dBkkJZamWWQkR-n7E`
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const youtubeSlice = createSlice({
  name: "youtubevideos",
  initialState: {
    loading: "idle",
    youtubeContent: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYoutubeVideos.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchYoutubeVideos.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.youtubeContent = action.payload;
      })
      .addCase(fetchYoutubeVideos.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});
export default youtubeSlice.reducer;
