// import { Button } from 'bootstrap'
import React from 'react'
//import {Link} from 'react-router-dom'
// import Button from './Button'
// import logo from '../Logo/logo.svg'
 import './Header/custom.css'

const Footer = () => {
    return(    
    <div>
      <div className='bgcolor row p-5 navbar-light'>
        <div className='brand col-md-4'>
            <h2 className='brand text-center navbar-style-1'>
                Welcome<br/>to<br className=''/>Roli Accessories
            </h2>
        </div>
        <hr className='mt-4'/>
        <div>
            <div className="d-flex justify-content-center pt-4 pb-4">
                <a href='https://www.facebook.com'><h5><i className="fa-brands fa-facebook px-2"></i></h5></a>
                <a href='https://www.twitter.com'><h5><i className="fa-brands fa-twitter px-2"></i></h5></a>
                <a href='https://www.gmail.com'><h5><i className="fa-brands fa-google-plus-g px-2"></i></h5></a>
                
                
            </div>
        </div>
      </div>
    </div>    
)
    }
export default Footer