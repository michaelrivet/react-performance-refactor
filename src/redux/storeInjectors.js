import { combineReducers } from "redux";

export function createReducer(staticReducers, asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export function createSliceInjector({ replaceReducer, staticReducers }) {
  // Add a dictionary to keep track of the registered async reducers
  const asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  const injectSlices = (asyncSlices) => {
    let hasNewSlice = false;
    for (const key in asyncSlices) {
      if (asyncReducers[key]) {
        continue;
      }
      hasNewSlice = true;
      asyncReducers[key] = asyncSlices[key];
    }
    if (hasNewSlice) {
      replaceReducer(createReducer(staticReducers, asyncReducers));
    }
  };

  return injectSlices;
}

export function createSagaInjector({ runSaga, rootSaga }) {
  // Create a dictionary to keep track of injected sagas
  const injectedSagas = new Map();

  const isInjected = (key) => injectedSagas.has(key);

  const injectSaga = (key, saga) => {
    // We won't run saga if it is already injected
    if (isInjected(key)) return injectedSagas.get(key);

    // Sagas return task when they executed, which can be used
    // to cancel them
    const task = runSaga(saga);

    // Save the task if we want to cancel it in the future
    injectedSagas.set(key, task);

    // Return the running saga reference
    return task;
  };

  if (rootSaga) {
    // Inject the root saga as it a staticlly loaded file,
    injectSaga("rootSaga", rootSaga);
  }

  return injectSaga;
}
