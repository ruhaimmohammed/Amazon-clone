import React from 'react'
import "./Checkout.css";
import Header from './Header';

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <h2 className="checkout__title">
                    Shopping Basket
                </h2>
            </div>  
            <div className="checkout__right">
                <h2>The subtotal will be here</h2>
            </div>
        </div>
    )
}

export default Checkout
 