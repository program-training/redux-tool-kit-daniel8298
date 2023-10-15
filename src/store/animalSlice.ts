import { blueGrey } from "@mui/material/colors";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalSliceState {
  animal: string;
  color: string;
}

const initialState: AnimalSliceState = { animal: "", color: "blueGrey" };

const animalSlice = createSlice({
  name: "animalSlice",
  initialState: initialState,
  reducers: {
    select(state: AnimalSliceState, action: PayloadAction<string>) {
      state.animal = action.payload;
      state.color = action.payload;
      return state;
    },
  },
});

export const { select } = animalSlice.actions;
export default animalSlice.reducer;
