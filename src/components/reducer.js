// Here we define all the application level states and define actions to make state changes
// A stateprovider is created as a component and data is retrieved from statelevel to component and application level

// selector function. stipulates the total basket and what the basket should contain

export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  // the .reduce function to return item and amount
  return basket.reduce((amount, item) => item.price + amount, 0);
};

//the reduce is immutable thus using const
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //returns the initial state indicated by ...state
        ...state,
        // adds to the initial state, the basket and action.item
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // identifies the state of the basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product(id: ${action.id}) as its not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
