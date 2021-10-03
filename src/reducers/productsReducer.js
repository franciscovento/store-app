
export const productsReducer = (state, action)=> {
    switch (action.type) {
        case "ADD_TO_CART":
                return {
                    ...state,
                    cart: action.payload,
                    total: action.payload.map(x => x.qty * x.price).reduce((acc, el) => acc+ el, 0).toFixed(2)
                }
         case "REMOVE_FROM_CART":
             return {
                 ...state,
                 cart: action.payload.newCart,
                 total: action.payload.total.toFixed(2)
             }
          
        case "SHOW_CART":
            return {
                ...state,
                showCart: !state.showCart
            }
            
        case "CHANGUE_CART_QTY":
            return{
                ...state,
                cart: state.cart.filter(x => x.id === action.payload.id? x.qty=action.payload.qty: x.qty)
            }

        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}


