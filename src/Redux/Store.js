import { legacy_createStore as createStore } from "redux";
// import { devToolsEnhancer } from 'redux-devtools-extension';
import  reducers from "./reducers/index";

const store = createStore(
    reducers, 
    {} , 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store