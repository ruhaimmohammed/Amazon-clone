import React from 'react'
import "./Checkout.css";
import Header from './Header';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <h2 className="checkout__title">
                    Shopping Basket
                </h2>
            </div>  
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
 