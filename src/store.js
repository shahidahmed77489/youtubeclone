import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./Utils/youtubeVideoesSlice";
import playingVideosReducer from "./Utils/playingVideosSlice";
import searchVideosReducer from "./Utils/searchSlice";
import showreducer from "./Utils/sidemenuSlice";
const store = configureStore({
  reducer: {
    youtubeVideosData: youtubeReducer,
    playingVideosData: playingVideosReducer,
    searchVideosData: searchVideosReducer,
    showData: showreducer,
  },
});
export default store;
