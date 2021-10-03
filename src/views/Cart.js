import AddToCart from "../components/AddToCart"
import { useContext } from "react"
import ProductsContext from "../context/ProductsContext"
import EmptyCart from "../components/EmptyCart"
import { Link } from "react-router-dom"
const Cart = () => {

  const { storeState:{cart, total}, storeDispatch } = useContext(ProductsContext)


  return (
    <div className='mt-4'>
    <h3 className='fs-4'>My Cart</h3>
    {cart.length === 0? <EmptyCart /> : 
    <div>
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
   <h5>Amount: {cart.length} items </h5>
   <h5>Total: ${total}</h5>
          <Link to='/shop'>Go to shop</Link>
          <Link to='/checkout'>Go to Checkout</Link>
 </div>
</div> }
    </div>   
  )
}

export default Cart
