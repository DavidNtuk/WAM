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
        navigate('/');
    };

    return (
        <div className="dashboard m-5">      
            <div className="mt-5">
                <div className="p-3 dashboard-list">
                    <Link to="/information" className="link">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Information</h5>
                    </Link> 
                </div>
                <div className="p-3 dashboard-list">
                    <Link to="/Location" className="link">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Location</h5>
                    </Link>
                </div>
                <div className="p-3 dashboard-list">
                    <Link to="/Cart" className="link">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Cart</h5>
                    </Link> 
                </div>
                <div className="p-3 dashboard-list">
                    <Link to="/Favourite" className="link">
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Favourite</h5>
                    </Link> 
                </div>
                <div className="p-3 dashboard-list">
                    <Link to="/logout" className="link" onClick={handleLogout}>
                        <i className="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Logout</h5>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default Contact