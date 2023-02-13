import React from 'react'
import Headnav from './Headnav'
import Home from './Home'
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  /*const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );*/
  const item = useSelector(state => state.allcart.cart);
  const { totalQuantity, totalPrice } = useSelector(state => state.allcart);

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
              <p>{data.quantity}</p>
              <p>{data.price}</p>


            </div >

          )

        })
      }
      <tr>
        <td colSpan="2">Total</td>
        <td>Totalquantity={totalQuantity}</td>
        <td>Totalprice={totalPrice}</td>
      </tr>

    </div >
  )
}

export default Cart
