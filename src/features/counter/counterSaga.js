import { put, takeEvery, delay } from 'redux-saga/effects';
import { triggerIncrementAsync, increment } from './counterSlice';

function* incrementAsync() {
   yield put(increment());
   yield delay(1000);
   yield put(increment());
   yield delay(1000);
   yield put(increment());
   yield delay(1000);
   yield put(increment());
}

export function* counterSaga() {
    console.log('starting counterSaga');
    yield takeEvery(triggerIncrementAsync, incrementAsync);
}