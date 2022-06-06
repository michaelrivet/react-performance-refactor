import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPeopleData } from './peopleService';
import { triggerFetchPeople, setPeople, setLoading } from './peopleListSlice';

function* fetchAndStorePeople() {
    yield put(setLoading());
   try {
      const people = yield call(fetchPeopleData);
      yield put(setPeople(people));
   } catch (e) {
    // TODO: Error state
   }
}

export function* peopleSaga() {
  console.log('starting peopleSaga');
  yield takeLatest(triggerFetchPeople, fetchAndStorePeople);
}