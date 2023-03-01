import { useDispatch } from 'react-redux';
import './App.css';
// import Navbar from './component/Header/Navbar';
import Layout from './Layout';
import React, { useEffect } from 'react';
import { reloadUser } from './Redux/reducers/userReducers';
import { reloadCartItems } from './Redux/reducers/cartReducers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
    const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;
    const cardItems = localStorage.getItem('cardItem') ? JSON.parse(localStorage.getItem('cardItem')) : null;
    if (cardItems) {
      dispatch(reloadCartItems(cardItems));
    }
    if (user && token) {
      dispatch(reloadUser({
        user, token
      }));
    }
  }, []);

  
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
