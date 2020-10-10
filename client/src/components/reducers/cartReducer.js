import React from "react";
import { ADD_TO_CART } from "../actions/action-types/cart-actions";

const initialState = {
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);

    let exists_item = state.addedItems.find((item) => action.id === item.id);
    if (exists_item) {
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};
export default cartReducer;
