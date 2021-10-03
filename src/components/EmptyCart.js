import { useHistory} from "react-router-dom"
import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import { FaRegSadTear} from 'react-icons/fa'

const EmptyCart = () => {

const history = useHistory();
const {storeDispatch} = useContext(ProductsContext);

const handleClick = () => {
storeDispatch({type:"SHOW_CART"});
history.push("/shop")
}

  return (
    <div>
        <h5>Don't have items in your cart <FaRegSadTear size='1em'/> </h5>
        
        <button onClick={handleClick}>Go to shop</button>
    </div>
  )
}

export default EmptyCart
