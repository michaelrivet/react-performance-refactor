import { spawn} from 'redux-saga/effects';
import { peopleSaga } from "../features/peopleList/peopleListSaga";
import { counterSaga } from "../features/counter/counterSaga";

export function* rootSaga() {
	yield spawn(peopleSaga);
	yield spawn(counterSaga);
}