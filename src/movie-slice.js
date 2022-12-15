import { createSlice } from "@reduxjs/toolkit";
import { movieData } from "./movie-data";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadMovies: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies = movieData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadMovies } = movieSlice.actions;

export default movieSlice.reducer;
