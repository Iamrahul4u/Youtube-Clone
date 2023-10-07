import { createSlice } from "@reduxjs/toolkit";
import { fetchData, searchResults } from "../utils/apiServices";
import axios from "axios";

const VideoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    search: [],
    filter: "",
  },
  reducers: {
    setVideos(state, action) {
      state.videos = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { setVideos, setSearch, setFilter } = VideoSlice.actions;
export default VideoSlice.reducer;

export const getVideos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.request(fetchData);
      const data = await response.data;
      dispatch(setVideos(data));
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getSearchVideos = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?&key=${
          import.meta.env.VITE_API_KEY
        }`,
        {
          params: {
            part: "snippet",
            maxResults: 20,
            q: query || "",
          },
        }
      );
      const data = await response.data;
      console.log(data);
      dispatch(setSearch(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getFilterVideos = (filter) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?&key=${
          import.meta.env.VITE_API_KEY
        }`,
        {
          params: {
            part: "snippet",
            maxResults: 20,
            q: filter || "",
          },
        }
      );
      const data = await response.data;
      dispatch(setFilter(filter));
      dispatch(setVideos(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
