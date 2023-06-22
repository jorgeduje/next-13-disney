import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myList: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("favsMovies")) : [],
};

export const favSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    handleFav: (state, action) => {
      let existe = state.myList.some((movie) => movie.id === action.payload.id);
      if (!existe) {
        state.myList = [...state.myList, action.payload];
      } else {
        let newArray = state.myList.filter(
          (movie) => movie.id !== action.payload.id
        );
        state.myList = newArray;
      }
      typeof window !== "undefined" && localStorage.setItem("favsMovies", JSON.stringify(state.myList));
    },
  },
});

export const { handleFav } = favSlice.actions;

export default favSlice.reducer;
