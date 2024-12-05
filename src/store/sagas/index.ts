import { put, takeLatest, all } from 'redux-saga/effects';


function* moveLeft() {
  yield put({ type: 'left' }) 
}

function* moveDown() {
  yield put({ type: 'down' }) 
}

function* watchLeft() {
  yield takeLatest('moveleft_saga', moveLeft) 
}

function* watchDown() {
  yield takeLatest('movedown_saga', moveDown) 
}

function* rootSaga() {
  yield all([watchLeft(), watchDown()]) 
}

export default rootSaga