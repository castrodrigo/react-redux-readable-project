import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

export default composeWithDevTools(applyMiddleware(...middlewares));
