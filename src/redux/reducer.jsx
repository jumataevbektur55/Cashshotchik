const initialState = {
  money: 20000,
  expenses: 0,
  products: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ToDo":
      if (action.payload.price > state.money) {
        alert("You don't have enough money!!!  ");
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
          money: state.money - +action.payload.price,
          expenses: state.expenses + +action.payload.price,
        };
      }
    case "DELETE_PRODUCT":
      const findProduct = state.products.find((el) => el.id === action.payload);
      if (findProduct) {
        let filterProducts = state.products.filter(
          (el) => el.id !== action.payload
        );
        return {
          ...state,
          products: filterProducts,
          money: state.money + +findProduct.price,
          expenses: +state.expenses - +findProduct.price,
        };
      }
    case "EDIT_PRODUCT":
      const findEdit = state.products.find((el) => el.id === action.payload.id);
      if (findEdit) {
        let chargedState = {
          ...state,
          money: (state.money - +action.payload.price) + +state.expenses ,
          expenses: +action.payload.price,  
        };
        const changedProduct = state.products.map((el) =>
          el.id === action.payload.id
            ? { ...el, name: action.payload.name, price: action.payload.price }
            : el
        );

        return {
          ...state,
          products: changedProduct,
          money: +chargedState.money,
          expenses: +chargedState.expenses,
        };
      }
    default:
      return state;
  }
};
