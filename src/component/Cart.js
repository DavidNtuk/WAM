import React from "react";
import {Link} from "react-router-dom"
import "../App.css"
import Button from "./Button/Button";
import { useSelector } from "react-redux";
// import Button from "./Button/Button";
// import logo from "../../src/img/logo.jpg"

const Cart = () => {

 const cart = useSelector((state) => state.cart);

  return (
  <>
    <div className="text-center text-md pt-2 pb-5">
      Your Shoping Bag
    </div>
    {cart.products.length === 0 ? (
      <div className="pt-5 text-center border-4">
        <p><i>Your Shoping Cart is Currently Empty...</i></p>
        <Link className="link pt-5" to="/">
          <h5>SHOP NOW</h5>
        </Link>
      </div>
    ) : (
      <>
        <div>
          <div className="titles row pb-5">
            <h3 className="prodct-title col-3">Product</h3>
            <h3 className="prodct-price col-3">Price</h3>
            <h3 className="prodct-quantity col-3">Quantity</h3>
            <h3 className="prodct-total col-3">Total</h3>
          </div>
          <div className=""> 
            <div className="cart-items">
              {cart.products?.map(product =>(
                <div className="cart-item pt-2 pb-2 cart-content">
                  <div className="cart-product row align-items-center">
                    <div className="col-3">
                      <img 
                        src={product.image1} 
                        className="logo-img" 
                        alt={product.title} 
                        style={{ width: 100, height: 100 }} 
                      />
                    </div>
                    <div className="col-3">
                      <h6>{product.title}</h6>
                      <span>{product.size}</span>
                    </div>
                    <div className="col-3 d-flex">
                      <div className="">
                        <i
                        className="fas fa-arrow-up arrow-up"></i>
                      </div>
                      <div className="px-3">{product.quantity}</div>
                      <div className="">
                        <i
                        className="fas fa-arrow-down arrow-down"></i>
                      </div>
                    </div>
                    <div className="col-3">
                      <h6>$ {product.amount}</h6>
                    </div>  
                  </div>
                </div>
              ))}
            </div>            
          </div>
        </div>
      </>
    ) }
    
      {/* <div className="d-flex justify-content-between">
        <div className="shopping-cart-card pt-4">
          <div className="cart-content row align-items-center">
            <div className="col-1">
                <i
                className="far fa-times"></i>
            </div> 
            <div className="col-2">
              <img 
              src="img/logo.jpg" 
              className="logo-img" 
              alt='' 
              style={{ width: 70, height: 70 }} />
            </div>
            <div className="col-4 px-3">
              <h4>Paradex Watch diamond</h4>
              <span>white</span>
            </div>
            <div className="col-3 d-flex">
              <div className="">
                <i
                className="fas fa-arrow-up arrow-up"></i>
              </div>
              <div className="px-3">5</div>
              <div className="">
                <i
                className="fas fa-arrow-down arrow-down"></i>
              </div>
            </div>
            <div className="col-2">
              <h4>$ 500</h4>
            </div>
          </div> 
        </div>
        <div className="checkout-cart-card">
        <h3 className="p-3">ORDER SUMMARY</h3>
        <div className="pb-3 pt-3">
          <div className="d-flex justify-content-between p-3">
            <h4>Subtotal</h4>
            <span><h4>$</h4></span>
          </div>
          <div className="d-flex justify-content-between p-3">
            <h4>Estimated Shipping</h4>
            <span><h4>$</h4></span>
          </div>
          <div className="d-flex justify-content-between p-3">
            <h4>Shipping Discount</h4>
            <span><h4>$</h4></span>
          </div>
        </div>
          <div className="d-flex justify-content-between p-3">
            <h4>Total</h4>
            <span><h4>$</h4></span>
          </div>
        <div className="text-center pb-2">
          <Button 
            title="CHECKOUT NOW" 
            bgColor="#000000"
            />
        </div>
      </div>
      </div> */}
  </>
  )
};

export default Cart;