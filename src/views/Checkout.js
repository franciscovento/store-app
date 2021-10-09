import React, { useContext } from 'react'
import AddToCart from '../components/AddToCart';
import ProductsContext from '../context/ProductsContext';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {storeState:{cart, total}, storeDispatch} = useContext(ProductsContext);


const onSubmitForm = (data) =>{
  alert(JSON.stringify(data))
}


  return (
    <div className='container'>
      <h1 className='text-center my-4'>Checkout</h1>
      <form onSubmit={handleSubmit(onSubmitForm)} className='row' action="">
      <div className='col-12 col-sm-6 d-flex flex-column gap-3'>
        <div className='d-flex gap-3 flex-wrap'>
        <input className='flex-grow-1 p-2' type="text" placeholder='Ingrese nombre' {...register('Name', {required:true})} />
        <input className='flex-grow-1 p-2' type="text" placeholder='Ingrese apellido' {...register('lastName', {required:true})} />
        </div>
        <div className='d-flex gap-3 flex-wrap'>
        <input className='flex-grow-1 p-2' type="text" placeholder='Numero de telefono'  {...register('Phone', {required:true})} />
        <input className='flex-grow-1 p-2' type="text" placeholder='Dirección de entrega' {...register('Adress', {required:true})}  />
        </div>
        <input className='p-2' type="text" placeholder='Referencia' {...register('Reference', {required:true})} />
        <div className='d-flex'>
        <textarea className='flex-grow-1 p-2' name="" id="" cols="30" rows="5" placeholder='Mensaje adicional...' {...register('Aditional', {required:true})} ></textarea>
        </div>
        <div>{errors.Name && <div className='text-danger'>*Todos los campos son obligatorios</div> }</div>
      </div>
      <div className='col-12 col-sm-6 '>
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
          <Link to='/cart'><button  type="button" className="btn btn-secondary m-1">Return to Cart</button></Link>
          <button type="submit" className="btn btn-primary m-1">Go to Pay</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Checkout
