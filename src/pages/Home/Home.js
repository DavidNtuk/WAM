//import logo from './logo.svg';
import React from 'react';
import "../../App.css"
import Button from '../../component/Button/Button';

function Home () {
  return (
    <React.Fragment>
      <div className='header d-flex'>
        {/* <div className='overlay'></div> */}
        <div className='header-flex d-flex align-items-center'>
          <div className='header-text text-dark text-center'>
            <h3 className='pb-1 text-md' >Shop Sales</h3>
            <h3 className='pb-1' >with</h3>
            <h2 className='pb-4 text-lg' >Roli Accessories</h2>
            <div className='pt-2'>
              <Button title="Shop now" bgColor="#ADD8E6"/>
            </div>
          </div>
          <div className='flex-end'>
            <img src="./img/new/slider.png" alt="" className='slider-img' />
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default Home
