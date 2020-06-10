import { DELETE_ITEM, EDIT_ITEM } from "./itemTypes";

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const editItem = id => ({
  type: EDIT_ITEM,
  payload: id
});
