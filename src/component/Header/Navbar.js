import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Cart from '../Cart';
import '../Header/custom.css';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const cartTotal = useSelector((state) => state.cart.quantity);
    const [loading, setLoading] = useState(false);

    const [products , setProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    },[]);

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/products/list');
            setProducts(response.data.data.products.data);
            setLoading(false)
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return(
        <div className='header-nav text-dark'>
            {/* <div className='overlay'></div> */}
            <div className='navbar-expand-lg'>
                <div className='nav-header d-flex justify-content-between pt-4 align-items-center'>
                    <div className='close-nav'>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbar">
                            <div className="navbar-toggler-icon"><i className="fas fa-bars"></i></div>
                        </button>
                    </div>
                    <div className='navbar-brand'>
                        <Link to="/" className="link">
                            <h2 className=''>Roli Accessories</h2>
                        </Link> 
                    </div>
                    <div className='collapse navbar-collapse justify-content-center close-nav' id='navbar' >
                        <nav>
                            <ul className='ul-links align-items-center'>
                                <li className='drop-down nav-item px-3 active'>
                                    <Link to="#" className='drop-link link'>New Arrivals<i className="fa-solid fa-angle-down px-2"></i></Link>
                                    <ul className='dropdown-content'>
                                        <div className='p-3'>{loading ? <div className="loading-spiner"></div> : <></>}</div>
                                        {
                                        products.map(({title, image1, unique_id}, index) =>{
                                            return(
                                                <Link to={`/product/${unique_id}`} key={index} className='link'>
                                                    <li className='p-3 text-center'>
                                                        <img src={image1} key={index} className="dropdown-img" alt='' style={{ width:70, height:70 }} />
                                                        <h6 className='pt-2'>{title.substring(0,10 )}...</h6>
                                                    </li>
                                                </Link>
                                            )
                                        })
                                        }                                
                                    </ul>
                                </li>
                                <li className='drop-down nav-item px-3'>
                                    <Link to="#" className='link drop-link' >Brand<i className="fa-solid fa-angle-down px-2"></i>
                                    </Link>
                                    <ul className='dropdown-content'>
                                        <Link to="#" className='link'>
                                            <li className='p-3 text-center'>
                                                <img src='/img/logo.jpg' className="dropdown-img" alt='' style={{ width:70, height:70 }} />
                                                <h6 className='pt-2'>Roli Accessories</h6>
                                            </li>
                                        </Link>                              
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='d-flex'>
                        <div className='nav-icon'>
                            <Link to="/categories" className='link px-2'>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </Link>  
                            <Link to="/cart" className='link px-2'>
                                <i className="fas fa-shopping-cart"></i>
                                <span className='cart-product-number'>{cartTotal}</span>
                            </Link>
                            {
                                isLoggedIn && (
                                    <Link to="/information" className='link px-3'>
                                        <i className="fa-solid fa-user"></i>
                                    </Link>
                                )
                            }
                        </div>
                        {
                            !isLoggedIn && (
                                <div className='d-flex' style={{ paddingLeft: '15px'}}>
                                    <Link to="/login" className='px-2' style={{ textDecoration:"none", color:'inherit'}}>
                                        Login
                                    </Link>
                                    <Link to="/signup" className='px-2' style={{ textDecoration:"none", color:'inherit'}}>
                                        Register
                                    </Link>                   
                                </div>
                            )
                        }
                    </div>
                </div>
            {/* { openCart && <Cart closeCart={setOpenCart}/> } */}
            </div>
        </div> 
    )
}

export default Navbar