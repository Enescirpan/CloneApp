 import {createStore,combineReducers,applyMiddleware} from "redux"
 import { composeWithDevTools } from "redux-devtools-extension"
 import  ThunkMiddleware  from "redux-thunk"
 import cartItems from "./reducers/cartitems"

 const reducers = combineReducers({
    cartItems:cartItems

 })
 const store = createStore(
    
    reducers,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))

    )

    export default store;
