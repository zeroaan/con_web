import { applyMiddleware, compose, createStore } from "redux";
import createSaga from "redux-saga";
import saga from "store/sagas";
import Reducer from "store/reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, Reducer);

const sagaMiddleWare = createSaga();

export const store = createStore(
  enhancedReducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);

sagaMiddleWare.run(saga);
