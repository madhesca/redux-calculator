import { combineReducers } from "redux";
import itemReducer from "./items/itemReducer";

export default combineReducers({
  items: itemReducer
});
