import createSagaMiddleware from "redux-saga";
import todoReducer from "./reducers/index.ts";
import { configureStore, Tuple } from '@reduxjs/toolkit'
import rootSaga from "./sagas/index.ts";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: todoReducer,
  middleware: () => new Tuple(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store