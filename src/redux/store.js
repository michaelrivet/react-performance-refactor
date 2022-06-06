import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import counterReducer from "../features/counter/counterSlice";
import editorReducer from "../features/editor/editorSlice";
import peopleReducer from "../features/peopleList/peopleListSlice";
import { peopleSaga } from "../features/peopleList/peopleListSaga";

// import {
//   createReducer,
//   createSliceInjector,
//   createSagaInjector,
// } from "./storeInjectors";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    editor: editorReducer,
    people: peopleReducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(peopleSaga);

// function createStore() {
//   const store = {
//     ...configureStore({
//       reducer: createReducer({
//         counter: counterReducer,
//       }),
//       middleware: () => [sagaMiddleware],
//       devTools: {
//         name: ` Store (${window.location.hostname})`,
//         trace: true,
//         maxAge: 500,
//       },
//     }),
//     runSaga: sagaMiddleware.run,
//   };

//   store.injectSlices = createSliceInjector({
//     replaceReducer: store.replaceReducer,
//   });

//   store.injectSaga = createSagaInjector({
//     runSaga: sagaMiddleware.run,
//   });

//   return store;
// }

// export default createStore();
