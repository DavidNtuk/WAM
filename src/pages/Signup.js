import React, {useEffect, useState } from 'react';
import Button from '../component/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup () {

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
    const navigate = useNavigate();
    const [btnText, setBtnText] = useState("Sign in")

    useEffect(() =>{
        setError("")
    },[value.first_name,value.last_name,value.email,value.password,value.comfirmPassword,value.phone]);

    const handleSignUpSubmit = (e) =>{
        console.log("name")
    }

    const handleSignUp = () =>{
        handleSignUpSubmit();
        if (handleValueValidation()) {
            if (value.password !== value.comfirmPassword) {
                setError("password do not match");
            }else if(value.phone.length < 11){
                setError("Invalid phone Number");
            }else if(value.email === (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                setError("invalid email address")
            }else if(value.password.length< 4){
                setError("Password is not weak")
            }
            else{
                setBtnText("Processing");
                try 
                {
                    const res = axios.post("https://api-v1.devchris.com.ng/api/v1/users/register", value)
                    .then((response) => {
                        if (response.data === true) {
                            console.log("Not successful")
                            setError(response.data.message);
                            setBtnText("Sign up")
                        } else {
                            console.log("successful")
                            setSuccess(response.data.message);
                            setTimeout(() => {
                                navigate("/login");
                            }, 2000);
                            window.scroll(0,0);
                            // setBtnText('sign in');
                        }
                    })
                    
                } 
                    catch (error) {
                        console.log("error")
                    }                
            }
        }
        else{
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
                        <form onSubmit={() => handleSignUpSubmit()}>
                            <div className='d-flex justify-content-between'>
                                <div class="pb-4 ">
                                    <input
                                        onChange={(e) => setValue({...value, first_name: e.target.value})} 
                                        type="text" 
                                        class="pb-2"
                                        id="firstName"
                                        required  
                                    />
                                    <label for="" className='px-2'>First Name</label>
                                </div>
                                <div class="pb-4">
                                    <input 
                                        onChange={(e) => setValue({...value, last_name: e.target.value})}
                                        type="text" 
                                        class="pb-2" 
                                        id="lastName"
                                        required  
                                    />
                                    <label for="" className='px-2'>Last Name</label>
                                </div>
                            </div>
                            <div class="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, email: e.target.value})}
                                    type="email" 
                                    class="pb-2"
                                    id="email"
                                    required
                                />
                                <label for="" className='px-2'>Email address</label>
                            </div>
                            <div class="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, phone: e.target.value})}
                                    type="number" 
                                    class="pb-2" 
                                    id="phonenumber"
                                    required
                                />
                                <label for="" className='px-2'>phone Number</label>
                            </div>
                            <div class="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, password: e.target.value})}
                                    type="password" 
                                    class="pb-2" 
                                    id="password"  
                                    required
                                />
                                <label for="" className='px-2'>Password</label>
                            </div>
                            <div class="pb-4">
                                <input 
                                    onChange={(e) =>setValue({...value, comfirmPassword: e.target.value})}
                                    type="Password" 
                                    class="pb-2" 
                                    id="comfirmPassword" 
                                    required 
                                />
                                <label for="" className='px-2'>Comfirm Password</label>
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
