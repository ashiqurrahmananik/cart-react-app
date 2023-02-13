import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from './features/cartSlice';
import Headnav from './Headnav';

const Home = () => {
  const items = useSelector((state) => state.allcart)
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    setProducts(await response.json())
  }
  useEffect(() => {
    getProducts();
  }, [])
  const dispatch = useDispatch()
  return (
    <div>
      <Headnav />


      {
        products.map((curElem) => {
          return (
            <div>
              <div className='body container'>

                <img src={curElem.image} width="200"></img>
                <p>{curElem.id}</p>
                <p>{curElem.title}</p>
                <p>{curElem.category}</p>
                <p>{curElem.price}</p>
                <button className='btn btn-danger' onClick={() => dispatch(addtocart(curElem))}>Add To Cart</button>



              </div>
            </div>
          )
        })
      }
    </div>

  )
}

export default Home
