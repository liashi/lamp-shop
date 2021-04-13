import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

const Lamp = (props) => {

    const history = useHistory()

    return (
        <div className="lamp"
             onClick={
                 ()=> { history.push(`/fullView/${props.id}/`)}
             }
        >
            <img src={props.img} alt="lamp"/>
            <div className="lamp_bot">
                <div className="name">{props.name}</div>
                <div className="price">${props.price}</div>
            </div>
        </div>
    );
};
export default Lamp;