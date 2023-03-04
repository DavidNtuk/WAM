//import logo from './logo.svg';
import React, { Fragment } from 'react';
import "../../App.css"
import Button from '../../component/Button/Button';

function Home () {
  return (
    <Fragment>
      <div className='header d-flex'>
        {/* <div className='overlay'></div> */}
        <div className='header-flex d-flex align-items-center'>
          <div className='header-text text-dark text-center'>
            <h3 className='pb-1 text-md' >Shop Sales</h3>
            <h3 className='pb-1' >with</h3>
            <h2 className='pb-4 text-lg navbar-style pt-2' >Roli Accessories</h2>
            <div className='pt-2'>
              <Button title="Shop now" bgColor="#ADD8E6"/>
            </div>
          </div>
          <div className='flex-end'>
            <img src="./img/new/slider.png" alt="" className='slider-img' />
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default Home
