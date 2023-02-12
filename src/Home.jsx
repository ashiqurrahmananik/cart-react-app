import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useSelector} from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    /*const items = useSelector((state) => state.cart)*/
    const [products, setProducts] = useState([]);
    const getProducts = async() =>{
        const response = await fetch('https://fakestoreapi.com/products')
        setProducts(await response.json())
    }
    useEffect(() => {
        getProducts();
    },[])
  return (
    <div>
      
      <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">CartWebApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
        <Nav.Link ><Link to="/cart">Cart</Link></Nav.Link>
        <Nav.Link ><Link to="/checkout">Checkout</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {
            products.map((curElem) => {
                return (
                    <div>
                          <div className='body container'>
                            <div>
                            <img src={curElem.image} width="200"></img>
                            <p>{curElem.title}</p>
                            <p>{curElem.category}</p>
                            <p>{curElem.price}</p>
                            <button className='btn btn-danger'>Add To Cart</button>
                            </div>
                        </div>    
                    </div>
                )
            })
        }

    </div>
  )
}

export default Home
