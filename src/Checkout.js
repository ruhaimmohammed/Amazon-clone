import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    let name = user?.email.substring(0, user?.email.lastIndexOf("@"));

    return (
        <div className="main">
            <Header />
            <div className='checkout'>

                <div className="checkout__left">
                    <h2 className="checkout__titleName">
                        Hello {user ? name.charAt(0).toUpperCase() + name.slice(1) : "Guest"}
                    </h2>
                    <h2 className="checkout__title">
                        Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
