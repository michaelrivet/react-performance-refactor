import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import counterReducer from '../features/counter/counterSlice'
import editorReducer from '../features/editor/editorSlice'

const sagaMiddleware = createSagaMiddleware()
 
export default configureStore({
  reducer: {
    counter: counterReducer,
    editor: editorReducer,
  },
  middleware: () => [
      sagaMiddleware,
  ],
})