import { createSlice } from '@reduxjs/toolkit'
import {selectCounterValue} from './selectors';

console.log('loading counterSlice');
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // This is dumb for something so simple but demonstrates needing to 
      const currentValue = selectCounterValue(state);
      state.value = currentValue + action.payload;
    },
    triggerIncrementAsync: state => state,
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, triggerIncrementAsync } = counterSlice.actions

export default counterSlice.reducer