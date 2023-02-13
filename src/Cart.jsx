import React from 'react'
import Headnav from './Headnav'
import Home from './Home'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      <div className='container'>
        <h6>Totalquantity={totalQuantity}</h6><br />
        <h6>Totalprice={totalPrice}</h6>
        <button className='btn btn-danger'><Link to="/checkout">checkout</Link></button>
      </div>

    </div >
  )
}

export default Cart
