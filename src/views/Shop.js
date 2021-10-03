import { useContext} from 'react'
import ProductCard from '../components/ProductCard'
import ProductsContext from '../context/ProductsContext'

import './Shop.style.css'

const Shop = () => {
  const { storeState:{products, cart}, storeDispatch } = useContext(ProductsContext)
  
  return (
    <div className='flex-grow-1'>
      <div className='ShopTitle'>
        <h1>Shop</h1>
      </div>
      {products && products.length > 0 &&  
      <div className='productsContainer'>
        {products.map(x => <ProductCard key={x.id} id={x.id} title={x.title} image={x.image} price={x.price} category={x.category} description={x.description} storeDispatch={storeDispatch} cart={cart} />)}
      </div>
      }
    </div>
  )
}

export default Shop
