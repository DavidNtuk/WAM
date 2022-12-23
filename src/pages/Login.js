//import logo from './logo.svg';
import React from 'react';
// import Background from '../../src/img/cloth1.jpg'
import Button from '../component/Button/Button';

function Login () {
  return (
    <React.Fragment>
        <div className='Header' id='overlay'>
            {/* <div>
                <img src={Background} className="background-img" alt='' style={{ width:1490, height:650 }} />
            </div> */}
            <div className='header-text text-light text-center'>
                <h3 className='pb-1' >Summer Sale</h3>
                <h2 className='pb-4' >Wear Your Style</h2>
                <div>
                    <Button title="Shop now" bgColor="#000000"/>
                </div>
            </div>
            <div className='login-card text-center text-light'>
                <div className=''>
                    <h3 className='pb-5'>King's Hub</h3>
                    <h5 className='pb-2'>Welcome to King's Hub</h5>
                    <div class="pb-5">
                        <input type="email" class="pb-2" id="floatingInput"  />
                        <label for="" className='px-2'>Email address</label>
                    </div>
                    <div class="pb-3">
                        <input type="password" class="pb-2" id="floatingInput"  />
                        <label for="" className='px-2'>Password</label>
                    </div>
                    <div>
                        <Button title="Log in" bgColor="#000000"/>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    
  );
}

export default Login
