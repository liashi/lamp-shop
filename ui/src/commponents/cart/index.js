import React from 'react';

import del from '../../assets/img/deleteItem.png';
import './style.css';

const Cart = (props) => {

    const arr = JSON.parse(localStorage.getItem("cart"));
    const obj = JSON.parse((localStorage.getItem("lamps")));
    const amount = JSON.parse(localStorage.getItem("amount"));
    const lamp = arr && arr.map(item => (obj.lamps[item.id]));
    const delItem = () => {
        localStorage.removeItem("cart")
        localStorage.removeItem("amount")
        props.onAddItem()
    };

    return (
        <div className="cart">
            {lamp ? lamp.map(item => (
                    <div
                        key={item.id}
                        className="cart__top"
                    >
                        <div className="img__lamp">
                            <img src={item.img} alt="lamp"/>
                        </div>
                        <div className="info__lamp-container">
                            <div className="info__lamp">
                                <div className="name">{item.name}</div>
                                <div className="price">{amount}x{item.price}$</div>
                                <div className="description">{item.description}</div>
                            </div>
                        </div>
                        <div
                            className="btn__delete"
                            onClick={delItem}
                        >
                            <img src={del} alt="delete"/>
                        </div>
                    </div>))
                : <div className="cart__empty-container">
                    <div className="cart__empty">Cart is empty</div>
                </div>

            }
            <div className="cart__bot">

                <div className="total">
                    Sub total: ${lamp ? amount * lamp[0].price : 0}
                </div>
                <div className="btn__check-container">
                    <button className="btn__check">Check out</button>
                </div>

            </div>
        </div>
    );
};

export default Cart;