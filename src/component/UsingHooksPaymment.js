import React from 'react';
import "../component/Header/custom.css"
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';

export default function App() {

  const {user: {email}} = useSelector((state) => state.user)

  

   const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY_WEB,
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: {email},
      phone_number: "09903994940",
      name: "King James",
    },
    customizations: {
      title: "Pay Now",
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  console.log(config)
  const fwConfig = {
    ...config,
    text: 'Pay Now',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="payment text-center pt-5 App">
     <h2 className='pt-5 pb-2 navbar-style'>Click to proceed...</h2>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}