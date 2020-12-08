import { applyMiddleware, createStore } from "redux";
import createSaga from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import saga from "store/sagas";
import Reducer from "store/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, Reducer);

const sagaMiddleWare = createSaga();

export const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

export const persistor = persistStore(store);

sagaMiddleWare.run(saga);
