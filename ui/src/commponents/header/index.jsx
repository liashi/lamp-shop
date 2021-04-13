import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import cart from '../../assets/img/cart.svg';
import heart from '../../assets/img/heart.png';
import './style.css';

const Header = (props) => {

    const history = useHistory();

    return (
        <div className="navbar">
            <Link
                onClick={
                    () => {history.push(`/store`)}
                }
            >
                <img
                    src={heart}
                    className="icon_heart"
                    alt="heart"
                />
                Starter Store
            </Link>
            <div className="navbar__right">
                <Link
                    onClick={
                        () => {history.push(`/register`)}
                    }
                >
                    Sign up
                </Link>
                <Link
                    onClick={
                        () => {history.push(`/login`)}
                    }
                >
                    Sign in
                </Link>
                <Link
                    onClick={
                        () => {history.push(`/cart`)}
                    }
                >
                    <img
                        src={cart}
                        alt="cart"
                        className="icon_cart"
                    />
                    Cart ({props.item || 0})
                </Link>
            </div>
        </div>
    );
};

export default Header;