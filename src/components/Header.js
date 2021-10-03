import  Navbar  from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { useContext } from "react"
import ProductsContext from "../context/ProductsContext"
import ChargedCart from "./ChargedCart"
import EmptyCart from "./EmptyCart"


const Header = () => {
const {storeState:{cart, showCart, total}, storeDispatch} = useContext(ProductsContext);




  return (
    <>
    <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to='/'>React Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to='/shop' >Shop</Nav.Link>
        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        <Button onClick={()=>storeDispatch({type: "SHOW_CART"})} >Cart</Button>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    {showCart &&  <div className='MiCarrito fixed-top'>
       <div className='MiCarrito-container'>
      {cart.length === 0? <EmptyCart /> : <ChargedCart cart={cart} total={total} storeDispatch={storeDispatch}/> }
       </div>
      </div>}
    </>
  )
}

export default Header
