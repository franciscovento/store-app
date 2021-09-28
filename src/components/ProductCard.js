import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ProductCard.style.css'

const ProductCard = ({title, category, image, price, id, handleAddToCart}) => {



  return (
        <Card className='ProductCard text-center text-sm-start'>
        <Card.Img style={{height: '300px', objectFit:'contain'}} variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className='fs-5'>$.{price}</Card.Subtitle>
            <Card.Text> <span><strong>category:</strong></span> {category}</Card.Text>
            <Button onClick={()=>handleAddToCart(id, title, price)} variant="primary">Agregar al carrito</Button>
        </Card.Body>
        </Card>
  )
}

export default ProductCard
