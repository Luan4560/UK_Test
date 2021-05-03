import {takeEvery, all, call, put} from 'redux-saga/effects';
import {getInfoSuccess, GET_INFO_REQUEST} from '../actions';
import axios from 'axios';

function* getInfoSaga({payload}) {
  const {search} = payload;
  try {
    const response = yield call(
      axios.get,
      `http://api.tvmaze.com/search/shows/?q=${search}`,
    );
    yield put(getInfoSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* getInfoWatcher() {
  yield takeEvery(GET_INFO_REQUEST, getInfoSaga);
}

export default function* infoSaga() {
  yield all([getInfoWatcher()]);
}
