import { SET_ORDER_BY } from "../actions/dashboard";

export default (state = "", action) => {
  switch (action.type) {
    case SET_ORDER_BY:
      return action.order;
    default:
      return state;
  }
};
