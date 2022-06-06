import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import counterReducer from "../features/counter/counterSlice";
import editorReducer from "../features/editor/editorSlice";
import peopleReducer from "../features/peopleList/peopleListSlice";
import { rootSaga } from "./rootSaga";

import {
  createReducer,
  createSliceInjector,
  createSagaInjector,
} from "./storeInjectors";

const sagaMiddleware = createSagaMiddleware();

function createStore() {
  const store = {
    ...configureStore({
      reducer: createReducer({
        counter: counterReducer,
        editor: editorReducer,
        people: peopleReducer,
      }),
      middleware: () => [sagaMiddleware],
      devTools: {
        name: ` Store (${window.location.hostname})`,
        trace: true,
        maxAge: 500,
      },
    }),
    runSaga: sagaMiddleware.run,
  };

  store.injectSlices = createSliceInjector({
    replaceReducer: store.replaceReducer,
  });

  store.injectSaga = createSagaInjector({
    runSaga: sagaMiddleware.run,
    rootSaga,
  });

  return store;
}

export default createStore();
