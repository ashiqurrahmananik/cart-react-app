import React from 'react'
import Headnav from './Headnav'
import Home from './Home'
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  /*const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );*/
  const item = useSelector(state => state.allcart.cart);

  const dispatch = useDispatch();
  return (
    <div>
      <Headnav />
      {
        item.map((data) => {
          return (
            <div className='body container'>

              <img src={data.image} width="200"></img>
              <p>{data.title}</p>
              <p>{data.price}</p>

            </div >
          )

        })
      }
    </div>
  )
}

export default Cart
