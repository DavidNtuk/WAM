//import logo from './logo.svg';
import 
// {useRef, useState, useEffect } 
react
from 'react';
// import Background from '../../src/img/cloth1.jpg'
import Button from '../component/Button/Button';
import React from 'react';

// const User_reg = /^[a-zA-Z][a-zA-Z0-9-_]{3-24}$/;
// const pwd_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8-24}$/

function Signup () {
    // const userRef =  useRef()
    // const errRef = useRef()

    // const [user, setuser] = useState('');
    // const [validName , setValidName] = useState(false);
    // const [userFocus , setUserFocus] = useState(false);


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
            <div className='signup-card text-center text-light'>
                <div className=''>
                    <h3 className='pb-5'>King's Hub</h3>
                    <h5 className='pb-3'>Welcome to King's Hub</h5>
                    <div className='d-flex justify-content-between'>
                        <div class="pb-4 ">
                            <input type="text" class="pb-2" id="floatingInput"  />
                            <label for="" className='px-2'>First Name</label>
                        </div>
                        <div class="pb-4">
                            <input type="text" class="pb-2" id="floatingInput"  />
                            <label for="" className='px-2'>Last Name</label>
                        </div>
                    </div>
                    <div class="pb-4">
                        <input type="email" class="pb-2" id="floatingInput"  />
                        <label for="" className='px-2'>Email address</label>
                    </div>
                    <div class="pb-4">
                        <input type="password" class="pb-2" id="floatingInput"  />
                        <label for="" className='px-2'>Password</label>
                    </div>
                    <div class="pb-4">
                        <input type="password" class="pb-2" id="floatingInput"  />
                        <label for="" className='px-2'>Comfirm Password</label>
                    </div>
                    <div>
                        <Button title="Sign in" bgColor="#000000"/>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    
  );
}

export default Signup
