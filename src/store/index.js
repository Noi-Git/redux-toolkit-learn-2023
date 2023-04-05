import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
});

// console.log(songsSlice.actions.addSong());

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
  type: "song/addSong",
  payload: "NewSong!!"
});

// the other way to add payload
store.dispatch(songsSlice.actions.addSong("some new song!"));

const finalState = store.getState();
console.log(JSON.stringify(finalState));
