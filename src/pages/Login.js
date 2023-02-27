import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../component/Button/Button';
import axios from 'axios';


function Login () {
    const [credential, setCredential] = useState(
        {
            emaiil: "" ,
            password:"" ,
        }
    );
    const [btnText , setBtnText] = useState("Login");
    const [error , setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = () =>{
        //    e.preventDefault();
       console.log("name")
    }

    useEffect(() =>{
        setError("");
    },[credential.email, credential.password])

    const handleLogin = () =>{
        handleFormSubmit();
        // e.preventDefault()
        if (!credential.email || !credential.password) {
            setBtnText("Login")
            setError("All fields are r?>equired")
        } else{
            setBtnText("processing...")
        try{
            const res = axios.post("https://api-v1.devchris.com.ng/api/v1/users/login", credential)
            .then((response) => {
                // console.log(response)
                if (response.data.status === true) {
                    console.log(response)
                    setSuccess(response.data.message);
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                    window.scroll(0,0);
                    localStorage.setItem('Login',[credential.email , credential.password] )
                }else{
                //     setError(response.data.message);
                //     setBtnText("login");
                        console.log("something wrong");
                }
            })   
            } 
            catch (response) {
                console.log("something bad happened")
                // if (response.data.status === false) {
                //     setError("sdfa")
                //     setError(response.data.message);
                // } else {
                //     console.log("ypp")
                // }
                setBtnText("login")
            }      
        }

    }


  return (
    <React.Fragment>
        <div className='login-header' id='overlay'>
            <div className='login-card text-center text-dark'>
                <div className=''>
                {success !== "" && <div className='success-message pt-1 pb-1'><i>{success}</i></div>}
                    <h3 className='pb-5'>Roli Accessories</h3>
                    <h5 className='pb-3'>Welcome to Roli's World</h5>
                    <form onSubmit={() => handleFormSubmit()}>
                        <div class="pb-5">
                            <input 
                                onChange={(e) => setCredential({...credential, email : e.target.value})}
                                type="email" 
                                class="pb-2" 
                                id="email"
                            />
                            <label for="" className='px-2'>Email address</label>
                        </div>
                        <div class="pb-3">
                            <input
                                onChange={(e) => setCredential({...credential, password: e.target.value})} 
                                type="password" 
                                class="pb-2" 
                                id="pwd"  
                            />
                            <label for="" className='px-2'>Password</label>
                        </div>
                    </form> 
                    {error !== "" && <div className='error-message pt-1 pb-1'><i>{error}</i></div>}
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
    </React.Fragment>
    
  );
}

export default Login
