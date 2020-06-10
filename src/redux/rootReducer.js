import { combineReducers } from "redux";
import itemReducer from "./items/itemReducer";
import formReducer from "./forms/formReducer";

export default combineReducers({
  items: itemReducer,
  forms: formReducer,
});
