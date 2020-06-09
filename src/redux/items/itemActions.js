import { DELETE_ITEM } from "./itemTypes";

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
});
