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
     <div className='bg-primary p-2 text-white'>
     <h3 className='fs-4'>Shop Cart</h3>
      <p>You have {cart.length} products in your cart</p>
     </div>
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
        <div >
          <h5>Total to pay: ${total}</h5>
          <div className='d-flex justify-content-between'>
          <button   type="button" className="btn btn-secondary m-1"onClick={goToShop}>Continue shopping</button>
          <button type="button" className="btn btn-primary m-1" onClick={goToCheckout}>Go to Checkout</button>
          </div>
        </div>
      </div>
  )
}

export default ChargedCart
