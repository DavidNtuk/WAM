import React from 'react'
// import '../../Steps.css'
// import logo from '../img/Laptop.png'
// import tube from '../../assets/img/tube.svg'
import '../App.css'

const Steps = () => {
    return (
        <section className='step p-5 text-center '>
            <div className='row p-5 align-items-center'>
                <div className='col-md-4'>
                    <img src="img/Laptop.png" alt='delivery' className='step-image' style={{ width:150 , heigth:150 }}/>
                    <h3 className='step pt-4'>1.  Nation Wide Delivery</h3>
                    <p className='contact-p'>We deliver everywhere in the world. UK,US, Europe.</p>
                </div>
                <div className='col-md-4'>
                    <img src="img/new/moneylock.png" alt='payment' className='step-image' style={{ width:150 , heigth:150 }}/>
                    <h3 className='step pt-4'>2. Secure Payment</h3>
                    <p className='contact-p'>Secure Payment Pay with the world's most popular and secure payments methods.</p>
                </div>
                <div className='col-md-4'>
                    <img src="img/new/satisfaction.png" alt='100%' className='step-image' style={{ width:150 , heigth:150 }}/>
                    <h3 className='step pt-4'>3. 100% Satisfaction</h3>
                    <p className='contact-p'>Our brand will give you full customer satisfaction with quality goods</p>
                </div>
            </div>
        </section>
    )
}

export default Steps;