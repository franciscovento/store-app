import React, { useEffect } from 'react'
import { useContext } from 'react'
import AddToCart from '../components/AddToCart'
import ProductCard from '../components/ProductCard'
import ProductsContext from '../context/ProductsContext'

import './Shop.style.css'

const Shop = () => {
  const {products, setCart, cart, showCart, total, setTotal} = useContext(ProductsContext)


const handleAddToCart = (id, title, price, image ) => {

if (cart.find(x => x.id === id)) {
  let newArray = [...cart]
  const position = newArray.indexOf(newArray.find(x => x.id === id));
  newArray[position] = {id, title, price, image, cantidad: cart[position].cantidad + 1}
  setCart(newArray);
}else{
  setCart(prev => [...prev, {id, title, price, image, cantidad: 1}])
}
}

useEffect(()=>{
if (cart.length > 0){
  let arrayPrices = cart.map(x => x.cantidad * x.price);
  setTotal(Math.round(arrayPrices.reduce((acc, el) => acc+ el) * 100) / 100)
}
},[cart, setTotal])


  return (
    <div className='flex-grow-1'>
     {showCart &&  <div className='MiCarrito fixed-top'>
       <div className='MiCarrito-container'>
       <h3 className='fs-4'>Mi Carrito</h3>
      {cart && cart.length> 0 && 
        cart.map(x => <AddToCart key={x.id} price={x.price} cantidad={x.cantidad} title={x.title} image={x.image}   />)
        }
        <div>
          <h5>Cantidad: {cart.length} items </h5>
          <h5>Total: {total}</h5>
        </div>
       </div>
       <div>
       </div>
       <div>
         
       </div>
      </div>}
      <div className='ShopTitle'>
        <h1>Tienda Virtual</h1>
      </div>
      {products && products.length > 0 &&  
      <div className='productsContainer'>
        {products.map(x => <ProductCard key={x.id} id={x.id} title={x.title} image={x.image} price={x.price} category={x.category} description={x.description} handleAddToCart={handleAddToCart} />)}
      </div>
      }
    </div>
  )
}

export default Shop
