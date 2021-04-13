import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';

import cart from '../../../assets/img/addCart.svg';
import './style.css';

const FullView = (props) => {

    const [all, setAll] = useState(0);
    const [value, setValue] = useState(1);
    const [test, setTest] = useState (1)
    const {id} = useParams();
    const obj = JSON.parse(localStorage.getItem("lamps"));
    const lamp = obj.lamps[id];
    const handleChange = (e) => {
        setValue(e.target.value)
    };
    const addToCart = () => {
        localStorage.setItem("amount", JSON.stringify(value))
        const amount = JSON.parse(localStorage.getItem("amount"))
        setTest(amount)
        const a = all - amount
        // const cart = [{id:0, total: 1}]
        // const condition = cart.filter((item) => item.id === id)
        // if(condition.length > 0)
        // cart.map((item) => {
        //    if(item.id === id)
        //     return {id: item.id, value: item.value + value}
        // })
        if (a >= 0) {
            localStorage.setItem("numberOfLamps", JSON.stringify([{
                id: lamp.id,
                number: all - amount
            }]))
            setAll(all - amount)
            localStorage.setItem("cart", JSON.stringify([{id: lamp.id}]))
            props.onAddItem()
            setValue(1)
            setTest(1)
        } else {
            return localStorage.setItem("amount", JSON.stringify(value))
            const amount = JSON.parse(localStorage.getItem("amount"))
            setTest(amount)
        }
    };
    useEffect(() => {
        const a = JSON.parse(localStorage.getItem("numberOfLamps")).find(item => item.id == id && item)
        const newAll = a.number
        setAll(newAll)
    });

    return (
        <div className="fullView">
            <div className="fullView__top">
                <div className="lamp__img">
                    <img src={lamp.img} alt="lamp"/>
                </div>
                <div className="fullView__top-right">
                    <div className="lamp__info">
                        <div className="name">{lamp.name}</div>
                        <div className="price">${lamp.price}</div>
                        <div className="sku">SKU:{lamp.id}</div>
                        <div className="numberOfLamps">All:{all}</div>
                        <div className={test <= all ? "input_container" : "input_container-error"}>
                            <input
                                type="number"
                                min="1"
                                onChange={handleChange}
                                value={value}
                            />
                            <button
                                className="btn__add"
                                onClick={addToCart}
                            >
                                <img src={cart} alt="cart"/>
                                Add to Cart
                            </button>
                        </div>
                        {test > all &&
                        <div className="error">Error: There is not enough stock to add {lamp.name} to you cart</div>}
                    </div>
                </div>
            </div>
            <div className="fullView__bot">
                <h3>About this product</h3>
                <span>{lamp.description}</span>
            </div>
        </div>
    );
};

export default withRouter(FullView);
