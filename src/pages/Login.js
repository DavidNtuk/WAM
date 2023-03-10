import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../component/Button/Button';
import axios from 'axios';
import { loginUser } from '../Redux/reducers/userReducers';


function Login () {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const [credential, setCredential] = useState({
        email: "" ,
        password:"" ,
    });
    const [btnText , setBtnText] = useState("Login");
    const [error , setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        setError("");
    },[credential.email, credential.password])

    useEffect(() => {
        isLoggedIn && navigate('/');
    }, [isLoggedIn, navigate]);
    

    const handleLogin = () => {
        // e.preventDefault()
        if (!credential.email || !credential.password) {
            setBtnText("Login");
            setError("All fields are required");
        } else{
            setBtnText("processing...");
            try {
                axios.post("https://api-v1.devchris.com.ng/api/v1/users/login", credential)
                .then((response) => {
                    if (response.data.status) {
                        setSuccess(response.data.message);
                        dispatch(loginUser(response.data.data))
                        setTimeout(() => {
                            navigate("/");
                        }, 2000);
                        window.scroll(0,0);
                    } else {
                        setError(response.data.message);
                        setBtnText("login");
                        console.log("something wrong");
                    }
                }).catch((err) => {
                    if (!err.response.data.status) {
                        setError(err.response.data.message);
                    } else {
                        console.log("something else");
                        setError(err.message);
                    }
                    setBtnText("Login");
                });
            } catch (response) {
                console.log("something bad happened");
                setError("Internal server error");
                setBtnText("Login");
            }      
        }
    }


  return (
    <React.Fragment>
        <div className='overlay'></div>
        <div className='login-back-img'>
            <div className='login-header' id='overlay'>
                <div className='login-card text-center text-dark'>
                    <div className=''>
                    {success !== "" && <div className='success-message pt-1 pb-1'><i>{success}</i></div>}
                        <h3 className='pb-1 signup-brand navbar-style'>Roli Accessories</h3>
                        <h5 className='pb-3 navbar-style'>Welcome to Roli's World</h5>
                        <form>
                            <div className="pb-5">
                                <input 
                                    onChange={(e) => setCredential({...credential, email : e.target.value})}
                                    type="email" 
                                    className="pb-2" 
                                    id="email"
                                />
                                <label htmlFor="" className='px-2'>Email address</label>
                            </div>
                            <div className="pb-3">
                                <input
                                    onChange={(e) => setCredential({...credential, password: e.target.value})} 
                                    type="password" 
                                    className="pb-2" 
                                    id="pwd"  
                                />
                                <label htmlFor="" className='px-2'>Password</label>
                            </div>
                        </form> 
                        {error !== "" && <div className='error-message pt-1 pb-1'>{error}</div>}
                        <h6 className='pt-2 pb-3'>Don't have an account<Link to="/signup" className='link text-warning'> signup here</Link></h6>
                        <div>
                            <Button 
                                onClick={() => handleLogin()}
                                title={btnText} 
                                bgColor="#000000"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    
  );
}

export default Login
