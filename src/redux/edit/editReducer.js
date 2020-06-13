import { SET_EDIT, NO_EDIT } from "./editTypes";

const initialState = {
  isEdit: false,
  editId: ""
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT:
      return {
        ...state,
        isEdit: true,
        editId: action.payload
      };

    case NO_EDIT:
      return {
        ...state,
        isEdit: false,
        editId: ""
      };

    default:
      return state;
  }
};

export default editReducer;
