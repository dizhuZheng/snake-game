import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducers/index.ts";
import watcherSagas from "./sagas/index.ts";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: counterReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  })

sagaMiddleware.run(watcherSagas);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store