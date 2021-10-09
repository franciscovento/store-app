import { BsTrash} from 'react-icons/bs'

const AddToCart = ({price, qty, title, image, storeDispatch, id, cart}) => {
    

    const handleDeleteDispatch = (id, cart) => {
      const newCart = cart.filter(x => x.id !== id);
      const total = newCart.length > 0 ? newCart.map(x => x.qty * x.price).reduce((acc, el) => acc+ el): 0
      storeDispatch({type: "REMOVE_FROM_CART", payload: {newCart, total} })
    }
    

    
  return (
    <>
    <tr>
      <th scope="row"> {qty} </th>
      <td><img style={{width: '30px', height:'20px', objectFit: 'contain'}} src={image} alt="imagen" /></td>
      <td>{title}</td>
      <td>${price}</td>
      <td style={{cursor: "pointer"}} onClick={()=>{handleDeleteDispatch(id, cart)} }> <BsTrash color='red' title='Delete item' /> </td>
    </tr>
</>
  )
}

export default AddToCart

