import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StarterStore from './commponents/starter-store';
import Header from './commponents/header';
import Cart from './commponents/cart';
import FullView from './commponents/starter-store/full-view';
import Register from './commponents/auth/register';
import Login from './commponents/auth/login';

import lampGold from './assets/img/lampGold.png';
import blueDesk from './assets/img/blueDesk.png';
import './App.css';


const App = () => {

    const [item, setItem] = useState();
    const onAddItem = () => {
        const arr = JSON.parse(localStorage.getItem("cart"))
        const newItem = arr ? arr.length : 0
        setItem(newItem)
    };
    useEffect(()=>{
        const object = JSON.parse(localStorage.getItem("lamps"));
        !object && localStorage.setItem("lamps", JSON.stringify({
            lamps: [
                {
                    id: 0,
                    name: "Gold",
                    price: 243.00,
                    img: lampGold,
                    description: "Some more information goes here..."
                },
                {
                    id: 1,
                    name: "Blue Desk",
                    price: 250.00,
                    img: blueDesk,
                    description: "Some more information goes here..."
                },
            ]
        }));
        const numberOfLamps = localStorage.setItem("numberOfLamps", JSON.stringify([
            {
                id: 0,
                number: 7
            },
            {
                id: 1,
                number: 8
            }
        ]));
        !numberOfLamps && localStorage.setItem("numberOfLamps", JSON.stringify([
            {
                id: 0,
                number: 7
            },
            {
                id: 1,
                number: 8
            }
        ]));
        const arr = JSON.parse(localStorage.getItem("cart"))
        const newItem = arr ? arr.length : 0
        setItem(newItem)
    })

    return (
        <BrowserRouter>
            <div className="header">
                <Header
                    item={item}
                />
            </div>
            <Route
                exat path="/store"
                render={() =>
                    <StarterStore
                    />
                }
            />
            <Route
                path="/fullView/:id?/"
                render={() =>
                    <FullView
                        onAddItem={onAddItem}
                    />
                }
            />
            <Route
                path="/cart"
                render={() =>
                    <Cart
                        onAddItem={onAddItem}
                    />
                }
            />
            <Route path="/register"
                   render={() =>
                       <Register/>
                   }
            />
            <Route
                path="/login"
                render={() =>
                    <Login/>
                }
            />
        </BrowserRouter>
    );
};
export default App;
