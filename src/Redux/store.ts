/** @format */

import {
  createStore,
  compose,
  applyMiddleware,
  Store,
  EmptyObject,
} from "redux";
import { Action, CurrentWeatherState } from "./Actions/types/CurrentWeather";
// import { Action } from "./index"
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./Reducers/rootReducer";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { Dispatch } from "react";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store: Store<
  EmptyObject & {
    CurrentWeatherInfo: CurrentWeatherState;
  } & PersistPartial,
  Action
> & {
  dispatch: Dispatch<Action>;
} = createStore(
  persistedReducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);
let persistor = persistStore(store);
export const reduxStore = {
  store,
  persistor,
};
