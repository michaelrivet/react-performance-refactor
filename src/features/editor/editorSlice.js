import { createSlice } from '@reduxjs/toolkit'
import { EditorState } from "draft-js";

export const editorSlice = createSlice({
  name: 'counter',
  initialState: {
    editorState: EditorState.createEmpty(),
  },
  reducers: {
    reset: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.editorState = EditorState.createEmpty();
    },
    change: (state, action) => {
        state.editorState = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { reset, change } = editorSlice.actions

export default editorSlice.reducer