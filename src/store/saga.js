// export default function* () {
//   console.log('I am redux-saga');
// }

import {all} from 'redux-saga/effects';
import infoSaga from './modules/list/listSaga';

export default function* () {
  yield all([infoSaga()]);
}
