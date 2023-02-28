import { combineReducers } from "redux";
import cartReducers from "./cartReducers";
import { productReducer } from "./productReducer";
import userReducers from "./userReducers";

const reducers = combineReducers({
    allProducts:productReducer,
    cart: cartReducers,
    user: userReducers,
})

export default reducers