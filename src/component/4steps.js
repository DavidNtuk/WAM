import React from 'react'
import '../App.css'

const Steps = () => {
    return (
        <section className='step p-5 mb-5 text-center '>
            <div className='row p-5 align-items-center'>
                <div className='col-md-4'>
                    <img src="img/Laptop.png" alt='delivery' className='step-image'/>
                    <h3 className='step pt-4'>1.  Nation Delivery</h3>
                    <p className='contact-p'>We deliver to everywhere around the Nation</p>
                </div>
                <div className='col-md-4'>
                    <img src="img/new/moneylock.png" alt='payment' className='step-image'/>
                    <h3 className='step pt-4'>2. Secure Payment</h3>
                    <p className='contact-p'>Secure Payment Pay with the most popular and secure payments methods.</p>
                </div>
                <div className='col-md-4'>
                    <img src="img/new/satisfaction.png" alt='100%' className='step-image' />
                    <h3 className='step pt-4'>3. 100% Satisfaction</h3>
                    <p className='contact-p'>Our brand will give you full customer satisfaction with quality goods</p>
                </div>
            </div>
        </section>
    )
}

export default Steps;