import { createContext, useReducer, useEffect } from "react";
import { getProductsApi } from "../services/getProductsApi";
import { productsReducer } from '../reducers/productsReducer'
const ProductsContext = createContext();

const initialState = {
    products: [],
    cart: [],
    showCart: false, 
    total: 0
}

const ProductsProvider = ({children}) => {
    
    const [storeState, storeDispatch] = useReducer(productsReducer, initialState)
    
    useEffect(()=> {
        const getData = async () => {
            const data = await getProductsApi();
            storeDispatch({type: "GET_PRODUCTS", payload: data})
        }
        getData();  
    },[]);

  

    return (
        <ProductsContext.Provider value={{storeState, storeDispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}


export {ProductsProvider}

export default ProductsContext;