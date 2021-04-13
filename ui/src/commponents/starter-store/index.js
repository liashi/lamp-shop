import React from 'react';

import Lamp from './lamp';

import banner from '../../assets/img/banner.svg';
import './style.css';

const StarterStore = (props) => {

    const obj = JSON.parse(localStorage.getItem('lamps'));
    const lamps = obj.lamps.map(item => (
        <Lamp
            a={props.a}
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
        />
    ));

    return (
        <div>
            <div className="banner">
                <img src={banner} alt="I LOVE LAMP"/>
            </div>
            <div
                className="content"
            >
                {lamps}
            </div>
        </div>
    );
};

export default StarterStore;

