import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchAllCharacters({ payload }: any): any {
  yield put({ type: 'UPLOAD_ALL_CHARACTERS_REQUEST' });
  try {
    const characters = yield call(async () => {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${payload.page}`,
      );

      return await data.json();
    });
    yield put({ type: 'UPLOAD_ALL_CHARACTERS', payload: characters.results });
  } catch (e: any) {
    console.log(e);
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchNextPage({ payload }: any): any {
  yield put({ type: 'UPLOAD_ALL_CHARACTERS_REQUEST' });
  try {
    const nextPage = yield call(async () => {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${payload.page}`,
      );

      return await data.json();
    });
    yield put({ type: 'LOAD_MORE_CHARACTERS', payload: nextPage.results });
  } catch (e: any) {
    console.log(e);
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export function* rickAndMortySaga() {
  yield takeLatest('LOAD_ALL_CHARACTERS_REQUESTED', fetchAllCharacters);
}

export function* loadNextPage() {
  yield takeLatest('LOAD_NEXT_PAGE', fetchNextPage);
}
