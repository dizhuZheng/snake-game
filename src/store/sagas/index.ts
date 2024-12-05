import { put, takeLatest, all } from 'redux-saga/effects';


function* moveLeft() {
  yield put({ type: 'left' }) 
}

function* moveUp() {
  yield put({ type: 'up' }) 
}

function* moveRight() {
  yield put({ type: 'right' }) 
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

function* watchUp() {
  yield takeLatest('moveup_saga', moveUp) 
}

function* watchRight() {
  yield takeLatest('moveright_saga', moveRight) 
}

function* rootSaga() {
  yield all([watchLeft(), watchDown(), watchRight(), watchUp()]) 
}

export default rootSaga