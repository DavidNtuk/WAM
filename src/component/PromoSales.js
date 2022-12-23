import React from 'react';
// import promoimg from "../../src/img/new/lllm.jpeg";
// import cartbag from "../../src/img/new/cartbag.png"

function Home () {
  return (
    <React.Fragment>
        <div className='overlay'></div>
        <div className='promo-header'>
          <img 
          src="img/new/lllm.jpeg"
          className="" 
          alt='' />
        </div>

        <img 
          src="img/new/cartbag.png"
          className="cart-bag-img" 
          alt='' />
    </React.Fragment>
    
  );
}

export default Home
