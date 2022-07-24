import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { myState } from "./reducer";

const initialState = {};
const middleWare = [thunk];

const reducers = combineReducers({myState});
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;