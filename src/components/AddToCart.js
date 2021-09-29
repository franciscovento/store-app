

const AddToCart = ({price, cantidad, title, image}) => {
    

    
    

  return (
    <div>
      <div className='d-flex justify-content-between'>
       <div className='d-flex align-items-center'>
       <div>
        <img style={{width: '30px', height:'20px', objectFit: 'contain'}} src={image} alt="imagen" />
        </div>
        <p>{cantidad} Und. </p>
        <p>{title}</p> 
       </div>
        <p>{price}</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default AddToCart
