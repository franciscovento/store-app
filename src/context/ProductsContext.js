import { createContext } from "react";
import { useState, useEffect } from "react";
import { getProductsApi } from "../services/getProductsApi";

const ProductsContext = createContext();




const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        const getData = async () => {
            const data = await getProductsApi();
            setProducts(data);
        }
        getData();  
    },[]);

const value = {
  products,
  cart,
  setCart,
}

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}


export {ProductsProvider}

export default ProductsContext;