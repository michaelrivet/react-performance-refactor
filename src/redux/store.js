import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import counterReducer from '../features/counter/counterSlice'

const sagaMiddleware = createSagaMiddleware()
 
export default configureStore({
  reducer: {
    counter: counterReducer,
    middleware: () => [
        sagaMiddleware,
    ],
  },
})