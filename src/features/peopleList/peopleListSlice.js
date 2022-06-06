import { createSlice } from '@reduxjs/toolkit'

console.log('loading peopleListSlice');
export const peopleListSlice = createSlice({
  name: 'peopleList',
  initialState: {
    people: [],
    isLoading: true,
  },
  reducers: {
    setLoading: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true
    },
    setPeople: (state, action) => {
        state.isLoading = false;
        state.people = action.payload;
    },
    triggerFetchPeople: state => state,
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, setPeople, triggerFetchPeople } = peopleListSlice.actions

export default peopleListSlice.reducer