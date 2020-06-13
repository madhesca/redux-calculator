import { ALERT, NOALERT, ADDED } from "./alertTypes";

const initialState = {
  show: false,
  type: "",
  text: ""
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return {
        ...state,
        show: true,
        type: "success",
        text: "Item Added haha"
      };

    case ALERT:
      return {
        ...state,
        show: true,
        type: action.payload.type,
        text: action.payload.text
      };
    case NOALERT:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};

export default alertReducer;
