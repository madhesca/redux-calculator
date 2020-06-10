import { combineReducers } from "redux";
import itemReducer from "./items/itemReducer";
import formReducer from "./forms/formReducer";
import alertReducer from "./alert/alertReducer";

export default combineReducers({
  items: itemReducer,
  forms: formReducer,
  alerts: alertReducer
});
