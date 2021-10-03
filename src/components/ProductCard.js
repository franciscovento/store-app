import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ProductCard.style.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const ProductCard = ({title, category, image, price, id, storeDispatch, cart}) => {


  
const handleDispatch = (title, category, image, price, id, cart, total) => {
  if (cart.length > 0 && cart.find(x => x.id === id)) {
    let newArray = [...cart];
    let position = newArray.indexOf(newArray.find(x => x.id === id));
    newArray[position] = {title, category, image, price, id, qty: newArray[position].qty +1 }
    storeDispatch({type: "ADD_TO_CART", payload:newArray})
  }else{
    let newArray = [...cart, {title, category, image, price, id, qty: 1 }];
    storeDispatch({type: "ADD_TO_CART", payload: newArray})
  }
  
}
 
  return (
        <Card className='ProductCard text-center text-sm-start'>
        <Card.Img style={{height: '300px', objectFit:'contain'}} variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className='fs-5'>$.{price}</Card.Subtitle>
            <Card.Text> <span><strong>category:</strong></span> {category}</Card.Text>
            <Button onClick={()=> handleDispatch(title, category, image, price, id, cart)} variant="primary">Add to cart <AiOutlinePlusCircle />
            </Button>
            {cart.find(x => x.id === id)? <div className='pt-1 text-secondary'><p className='mb-0'><span>{cart.find(x => x.id === id).qty}</span> item in cart</p> </div> : ""}
        </Card.Body>
        </Card>
  )
}

export default ProductCard
