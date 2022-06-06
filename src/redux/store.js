import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import counterReducer from '../features/counter/counterSlice'
import editorReducer from '../features/editor/editorSlice'
import peopleReducer from '../features/peopleList/peopleListSlice'
import { peopleSaga } from '../features/peopleList/peopleListSaga'

const sagaMiddleware = createSagaMiddleware()
 
export default configureStore({
  reducer: {
    counter: counterReducer,
    editor: editorReducer,
    people: peopleReducer,
  },
  middleware: () => [
      sagaMiddleware,
  ],
});

sagaMiddleware.run(peopleSaga);