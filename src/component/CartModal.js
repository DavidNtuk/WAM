import React from "react";
import {Link} from "react-router-dom"
import "../App.css"
import Button from "./Button/Button";
// import logo from "../../src/img/logo.jpg"

const Cart = ({closeCart}) => {
  return (
    <div className='cart-container'>
      <div className="cart-content container ">
        <div>
          <div className=" cart-wrapper d-flex justify-content-between">
            <h3 className="text-blue pb-4">My Cart</h3>
            <button 
            className="text-blue cart-x"
            onClick={() => closeCart(false)}
            >
              X
            </button>
          </div>
        </div>
        <div>
          <div className="content-cart pt-2 align-items-center">
            <div className="d-flex align-items-center pt-3 pb-4 ">
                <img src="img/logo.jpg" className="logo-img" alt='' style={{width:50,height:50 }} />
                <Link className="link" to="#">
                    <h6 className='px-2'>Versace product</h6>
                </Link>
            </div> 
          </div>
        </div>
      </div>
      <div className="cart-button">
        <div className="d-flex justify-content-between align-items-center pt-2">
          <h6>Total</h6>
          <h6>$</h6>
        </div>
        <div className="text-center pt-3 pb-3">
          <Button title='Continue to checkout' bgColor='#000000' width=""/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
