 import { ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART } from "./constant";



 const cartItem= (state=[] , action) => {
    switch(action.type) {
        case ADD_TO_CART:

           return [...state,action.payload]

        case REMOVE_FROM_CART:
            console.log("Çalış payload",action.payload)
            return state.filter(cartItem=> cartItem.product.id !== action.payload.id)

        case CLEAR_CART:
        return state=[]

    }
    return state;
 }
 export default cartItem;