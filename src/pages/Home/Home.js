//import logo from './logo.svg';
import React from 'react';
// import Background from '../../img/cloth1.jpg'
import Button from '../../component/Button/Button';

function Home () {
  return (
    <React.Fragment>
        <div className='header'>
            <div className='overlay'></div>
            <div className='header-text text-light text-center'>
                <h3 className='pb-1' >Shop Sales</h3>
                <h3 className='pb-1' >with</h3>
                <h2 className='pb-4' >Roli Accessories</h2>
                <div className='pt-2'>
                  <Button title="Shop now" bgColor="#000000"/>
                </div>
            </div>
        </div>
    </React.Fragment>
    
  );
}

export default Home
