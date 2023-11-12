import { createContext, useReducer } from "react";

// React Context > share data to multiple components instead of sending props
export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      // add to cart
      const newItem = action.payload;
      // check if cart already has same product type as newItem
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      ); // return item or null

      // Update cart
      // if item exist in cart > inside cart > change that item to newItem
      // else > add newItem in cart
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return {
        ...state,
        cart: { ...state.cart, cartItems },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
