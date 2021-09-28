import React from 'react'
import { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import ProductsContext from '../context/ProductsContext'
import './Shop.style.css'

const Shop = () => {
  const {products, setCart, cart} = useContext(ProductsContext)


const handleAddToCart = (id, title, price ) => {

if (cart.find(x => x.id === id)) {
  let newArray = [...cart]
  const position = newArray.indexOf(newArray.find(x => x.id === id));
  newArray[position] = {id, title, price, cantidad: cart[position].cantidad + 1}
  setCart(newArray);
}else{

  setCart(prev => [...prev, {id, title, price, cantidad: 1}])
}

}

console.log(cart)

  return (
    <div className='flex-grow-1'>
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
