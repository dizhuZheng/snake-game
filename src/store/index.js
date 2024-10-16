import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers/index.ts";
import watcherSagas from "./sagas/index.ts";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: gameReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  })

sagaMiddleware.run(watcherSagas);

export default store;