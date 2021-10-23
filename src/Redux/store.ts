/** @format */

import {
  createStore,
  compose,
  applyMiddleware,
  Store,
  EmptyObject,
} from "redux";
import { WeatherState } from "./Actions/types/Weather";
import { Actions } from "./Actions/index";
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
    weatherInfo: WeatherState;
  } & PersistPartial,
  Actions
> & {
  dispatch: Dispatch<Actions>;
} = createStore(
  persistedReducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);
let persistor = persistStore(store);
export const reduxStore = {
  store,
  persistor,
};
