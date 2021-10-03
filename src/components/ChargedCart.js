import AddToCart from "./AddToCart"
import { useHistory } from "react-router"

const ChargedCart = ({cart, total, storeDispatch}) => {

  const history = useHistory();


  const goToShop = () => {
  storeDispatch({type:"SHOW_CART"});
  history.push("/shop")
  }
  
  const goToCheckout = () => {
    storeDispatch({type:"SHOW_CART"});
    history.push("/checkout")
  }


  return (
    <div>
      <h3 className='fs-4'>My Shop Cart</h3>
       <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Img</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
      {cart && cart.length> 0 && 
        cart.map(x => <AddToCart key={x.id} price={x.price} qty={x.qty} title={x.title} image={x.image} storeDispatch={storeDispatch} id={x.id} cart={cart} />)
      }
      </tbody>
      </table>
        <div>
          <h5>amount: {cart.length} items </h5>
          <h5>Total: ${total}</h5>
          <button onClick={goToShop}>Continue shopping</button>
          <button onClick={goToCheckout}>Go to Checkout</button>
        </div>
      </div>
  )
}

export default ChargedCart
