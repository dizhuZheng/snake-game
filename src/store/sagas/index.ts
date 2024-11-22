import { put, takeLatest, takeEvery, delay, all } from 'redux-saga/effects';


function* increment() {
  yield put({ type: 'increment' }) // 相当于：dispatch({ type: 'increment' })
}
/*function* moveRight() {
  yield put({ type: 'right' })
}

function* moveUp() {
  yield put({ type: 'up' }) 
}

function* moveDown() {
  yield put({ type: 'down' }) 
}*/

function* watchLeft() {
  yield takeEvery('increment_saga', increment) 
}

function* rootSaga() {
  yield all([watchLeft()]) 
}

export default rootSaga