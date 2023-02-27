import { ActionTypes } from "../constants/action-type";

const initialState = {
    profile: {
        first_namme: "",
        last_namme: "",
        email: "",
        password: "",
        phone: "",
    }
}

export const userReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.LOGIN:
            console.log("login", action.payload.user );
            return {...state, products:payload};
        default:
            return state;
            console.log(state)
    }
}