import { all, spawn, call } from 'redux-saga/effects';

import { rickAndMortySaga, loadNextPage } from './rickAndMortySaga';

export function* rootSaga() {
  const sagas = [rickAndMortySaga, loadNextPage];

  yield all(
    sagas.map((saga) => spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    })),
  );
}
