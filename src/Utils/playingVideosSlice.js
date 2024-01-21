import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlayingVideos = createAsyncThunk(
  "playingvideos",
  async (id) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDQUNlpl2iW69Q557dBkkJZamWWQkR-n7E`
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);
const playingVideosSlice = createSlice({
  name: "playingvideos",
  initialState: {
    loading: "idle",
    playingVideosContent: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayingVideos.pending, (state) => {
        state.loading = "Loading";
      })
      .addCase(fetchPlayingVideos.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.playingVideosContent = action.payload;
      })
      .addCase(fetchPlayingVideos.rejected, (state, action) => {
        state.loading = "Failed";
        state.error = action.error.message;
      });
  },
});
export default playingVideosSlice.reducer;
