import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
// import Footer from "./Component/Footer/Footer";
// import Home from "./pages/Home/Home";
import Showcase from "./pages/Showcase"
import Navbar from "./component/Header/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
// import Dashboard from "./pages/Dashboard"
import Information from "./pages/Information";
import Location from "./pages/Location";
import Profile from "./pages/Profile";
import ListPage from "./pages/Home/ListPage"
import Categories from "./pages/Home/Categories";
import Footer from "./component/Footer";
// import Test from "./pages/Test";
import ProductPage from  "./pages/ProductPage";
import Cart from "./component/Cart";
import UsingHooksPayment from "./component/UsingHooksPaymment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layout = () => {
    return(
        <Router>
            <ToastContainer/>
            <Navbar />
            <Routes>
                {/* General Route */}
                {/* <Route path="/" element={<Home />}/> */}
                <Route path="/" element={<Showcase />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/product/:id" element={<ProductPage />}/>
                <Route path="/profile" element={<Profile />}/>
                {/* <Route path="/dashboard" element={<Dashboard />}/> */}
                <Route path="/information" element={<Information />}/>
                <Route path="/location" element={<Location />}/>
                <Route path="/itemslist" element={<ListPage />}/>
                <Route path="/categories" element={<Categories />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/payment" element={<UsingHooksPayment />}/>
                {/* <Route path="/test" element={<Test />}/> */}
            </Routes>
            <Footer/>
        </Router>
    )
}

export default layout