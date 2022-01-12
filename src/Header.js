import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    let name = user?.email.substring(0, user?.email.lastIndexOf("@")) ;

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        } 
    }


    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-FL-Logo-by-Greenlines-Studios-580x387.jpg" alt="Amazon_Logo" />
            </Link>
            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={ handleAuthentication } className="header__option">
                        <span className='header__optionLineOne'>
                            Hello { user ? name.charAt(0).toUpperCase() + name.slice(1) : "Guest" }
                        </span>
                        <span className='header__optionLineTwo'>
                            { user ? 'Sign Out' : 'Sign In' }
                        </span>
                    </div>
                </Link>

                <Link to="/orders">
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                </Link>
                

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
