import {ActionTypes} from "../constants/action-type";

export const setProducts = (products) =>{
 return{
    type: ActionTypes.SET_PRODUCTS,
    payload: products
 };
}

export const selectedProducts = (products) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
}

export const login = (user) =>{
    return{
        type: ActionTypes.LOGIN,
        payload: user
    }
}