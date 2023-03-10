// import { Button } from 'bootstrap'
import React from 'react'
//import {Link} from 'react-router-dom'
// import Button from './Button'
// import logo from '../Logo/logo.svg'
 import './Header/custom.css'

const Footer = () => {
    return(    
    <div>
      <div className='bgcolor row p-5'>
        <div className='row text-center'>
            <div className='brand col-md-6'>
                <h2 className='brand text-center navbar-style-1'>
                    Welcome<br/>to<br className=''/>Roli Accessories
                </h2>
            </div>
            <div className="footer-img col-md-6 align-items-center mb-5 ">
                <img 
                    src="img/roli-accessories.jpeg"
                    className="" 
                    alt='' 
                />
            </div>
        </div>
        <hr className='mt-4'/>
        <div className=''>
            <div className="d-flex justify-content-center pt-4 pb-4">
                <a href='http://facebook.com/RoliAccessories' target="_blank" rel="noopener noreferrer" ><h5><i className="fa-brands fa-facebook px-2"></i></h5></a>
                <a href='https://twitter.com/AccessoriesRoli' target="_blank" rel="noopener noreferrer" ><h5><i className="fa-brands fa-twitter px-2"></i></h5></a>
                <a href='https://www.instagram.com/roli_accessories/?hl=en' target="_blank" rel="noopener noreferrer"><h5><i className="fa-brands fa-instagram px-2"></i></h5></a> 
                <a href="mailto:rolihandmade@gmail.com?subject = Feedback&body = Message" ><h5><i className="fa-solid fa-message px-2"></i></h5></a>               
            </div>
        </div>
      </div>
    </div>    
)
    }
export default Footer