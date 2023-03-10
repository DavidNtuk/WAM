import React from "react";
import { Link, useNavigate } from "react-router-dom"
import "../App.css"
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/reducers/userReducers";


const Contact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };

    return (
        <div className="dashboard m-5">      
            <div className="mt-5">
                <Link to="/information" className="link">
                    <div className="p-3 dashboard-list">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Information</h5>
                    </div>
                </Link>
                <Link to="/Location" className="link">
                    <div className="p-3 dashboard-list">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Location</h5>
                    </div>
                </Link>
                <Link to="/Cart" className="link">
                    <div className="p-3 dashboard-list">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Cart</h5> 
                    </div>
                </Link>
                <Link to="/Favourite" className="link">
                    <div className="p-3 dashboard-list"> 
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Favourite</h5> 
                    </div>
                </Link>
                <Link to="/logout" className="link" onClick={handleLogout}>
                    <div className="p-3 dashboard-list">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Logout</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Contact