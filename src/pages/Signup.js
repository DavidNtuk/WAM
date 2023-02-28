import React, {useEffect, useState } from 'react';
import Button from '../component/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup () {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        comfirmPassword: "",
    })
    const [error, setError] = useState("");
    const [success, setSuccess] = useState('');
    const [btnText, setBtnText] = useState("Register")

    useEffect(() =>{
        setError("")
    },[value.first_name,value.last_name,value.email,value.password,value.comfirmPassword,value.phone]);

    const handleSignUp = () =>{
        if (handleValueValidation()) {
            if (value.password !== value.comfirmPassword) {
                setError("password do not match");
            } else if (value.phone.length < 11) {
                setError("Invalid phone Number");
            } else if (value.email === (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                setError("invalid email address")
            } else if (value.password.length < 4) {
                setError("Password is not strong");
            } else {
                setBtnText("Processing");
                try {
                    axios.post("https://api-v1.devchris.com.ng/api/v1/users/register", value)
                    .then((response) => {
                        if (response.data.status) {
                            setSuccess(response.data.message);
                            setTimeout(() => {
                                navigate("/login");
                            }, 2000);
                            window.scroll(0,0);
                        } else {
                            setError(response.data.message);
                            setBtnText("Register");
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
                } catch (error) {
                    console.log("something bad happened");
                    setError("Internal server error");
                    setBtnText("Register");
                }                
            }
        } else {
            setError("Please fill all input fields")
        }
    }

    const handleValueValidation =  () => {
        if (value.password && value.first_name && value.last_name && value.email && value.comfirmPassword) {
            return true;
        }
        return false;
    }




  return (
    <React.Fragment>
        <div className='signup-header' id='overlay'>
            <div className='signup-card text-center text-dark'>
                <div className=''>
                    <h3 className='pb-5'>Roli Accessories</h3>
                    <h5 className='pb-3'>Welcome to Roli's World</h5>
                        {success !== "" && <div className='success-message pt-1 pb-1'><i>{success}</i></div>}
                        <form>
                            <div className='d-flex justify-content-between'>
                                <div className="pb-4 ">
                                    <input
                                        onChange={(e) => setValue({...value, first_name: e.target.value})} 
                                        type="text" 
                                        className="pb-2"
                                        id="firstName"
                                        required  
                                    />
                                    <label htmlFor="" className='px-2'>First Name</label>
                                </div>
                                <div className="pb-4">
                                    <input 
                                        onChange={(e) => setValue({...value, last_name: e.target.value})}
                                        type="text" 
                                        className="pb-2" 
                                        id="lastName"
                                        required  
                                    />
                                    <label htmlFor="" className='px-2'>Last Name</label>
                                </div>
                            </div>
                            <div className="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, email: e.target.value})}
                                    type="email" 
                                    className="pb-2"
                                    id="email"
                                    required
                                />
                                <label htmlFor="" className='px-2'>Email address</label>
                            </div>
                            <div className="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, phone: e.target.value})}
                                    type="number" 
                                    className="pb-2" 
                                    id="phonenumber"
                                    required
                                />
                                <label htmlFor="" className='px-2'>phone Number</label>
                            </div>
                            <div className="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, password: e.target.value})}
                                    type="password" 
                                    className="pb-2" 
                                    id="password"  
                                    required
                                />
                                <label htmlFor="" className='px-2'>Password</label>
                            </div>
                            <div className="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, comfirmPassword: e.target.value})}
                                    type="Password" 
                                    className="pb-2" 
                                    id="comfirmPassword" 
                                    required 
                                />
                                <label htmlFor="" className='px-2'>Comfirm Password</label>
                            </div>
                        </form>
                        {error !== "" && <div className='error-message pt-1 pb-1'><i>{error}</i></div>}
                        
                    <h6 className='pt-2 pb-3'>Already have an account<Link to="/login" className='link text-warning'> login here</Link></h6>
                    <div>
                        <Button 
                            onClick={() => handleSignUp()}
                            title={btnText}
                            bgColor="#000000"
                        />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    
  );
}

export default Signup
