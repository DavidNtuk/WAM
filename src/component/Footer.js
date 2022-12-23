// import { Button } from 'bootstrap'
import React from 'react'
//import {Link} from 'react-router-dom'
// import Button from './Button'
// import logo from '../Logo/logo.svg'
 import './Header/custom.css'

const Footer = () => {
    return(    
    <div>
      <div className='bgcolor row p-5 navbar-light mt-5'>
        <div className='brand col-md-4'>
            <h2 className='brand'>
                Lorem
            </h2>
            <p className=''>Welcome to King's Hub, the modern<br/>extranet and community
                Platform.
            </p>
        </div>
        <div className='col-md-8'>
            <div className='row'>
                <div className='col-md-4'>
                    <h4 className='link-header'>
                        Lorem
                    </h4>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a  className="nav-link" href='#'>Dashboard</a>                    
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link"href='#'> Members</a>
                        </li>
                        <li className='nav-item'>
                            <a  className="nav-link" href='#'>latest News</a> 
                        </li>
                    </ul>
                
                </div>
                <div className='brand col-md-4'>
                    <h4 className='link-header'>
                        Lorem
                    </h4>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a  className="nav-link" href='#'>Dashboard</a>                    
                        </li>
                    </ul>
                
                </div>
                <div className='brand col-md-4'>
                    <h4 className='link-header'>
                        Lorem
                    </h4>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a  className="nav-link" href='#'>Dashboard</a>                    
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link"href='#'> Members</a>
                        </li>
                        <li className='nav-item'>
                            <a  className="nav-link" href='#'>latest News</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='mt-4'/>
        <div>
            <div className="d-flex justify-content-center pt-4 pb-4">
                <h5><i className="fa-brands fa-facebook px-2"></i></h5>
                <h5><i className="fa-brands fa-twitter px-2"></i></h5>
                <h5><i className="fa-brands fa-google-plus-g px-2"></i></h5>
            </div>
        </div>
      </div>
    </div>    
)
    }
export default Footer