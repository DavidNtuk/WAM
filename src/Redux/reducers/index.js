import { combineReducers } from "redux";
import cartReducers from "./cartReducers";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    cart: cartReducers,
    
    
})

export default reducers