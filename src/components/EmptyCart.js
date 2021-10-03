import { useHistory} from "react-router-dom"
import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";


const EmptyCart = () => {

const history = useHistory();
const {storeDispatch} = useContext(ProductsContext);

const handleClick = () => {
storeDispatch({type:"SHOW_CART"});
history.push("/shop")
}

  return (
    <div>
        <h1>Carrito Vacio :(</h1>
        
        <button onClick={handleClick}>Go to shop</button>
    </div>
  )
}

export default EmptyCart
