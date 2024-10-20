import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visitedPlaces: [],
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    toggleVisited: (state, action) => {
      const placeId = action.payload;
      if (state.visitedPlaces.includes(placeId)) {
        state.visitedPlaces = state.visitedPlaces.filter(
          (id) => id !== placeId
        );
      } else {
        state.visitedPlaces.push(placeId);
      }
    },
  },
});

export const { toggleVisited } = placesSlice.actions;
export default placesSlice.reducer;
