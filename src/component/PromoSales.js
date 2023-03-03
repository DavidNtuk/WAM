import React from 'react';
import Button from './Button/Button';
// import promoimg from "../../src/img/new/lllm.jpeg";
// import cartbag from "../../src/img/new/cartbag.png"

function Home () {
  return (
    <div className='promo-sales'>
      <div className='overlay'></div>
      <div className='categories-header-text text-light'>
        <h2 className='pb-1 text-lg' >Delivery Nation Wide</h2>
        <h2 className='pb-2 text-md' >Roli Accessories</h2>
        <p className='pb-5 text-sm '>Enjoy customer satisfacton at it's fullest...</p>
        <div className='pt-2'>
          <Button title="Shop now" bgColor="#ADD8E6"/>
        </div>
      </div>
      <img 
        src="img/new/cartbag.png"
        className="cart-bag-img" 
        alt='' 
      />
    </div>
    
  );
}

export default Home
