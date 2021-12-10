import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import reducerShop from "./modules/cart/reducer";

const reducers = combineReducers({ reducerShop });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
