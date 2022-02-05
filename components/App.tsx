import React from 'react';
import ReactDom from 'react-dom';
import pizzas from '../src/data/pizza.json';
import Pizza from './Pizza';
import AppCss from './App.module.css';
import Cart from './Cart';
import AppState from './AppState';
import SpecialOffer from './SpecialOfferComponent'

export default function App() {
    const SpecialOfferPizza = pizzas.find((pizza: Pizza) => {
        return pizza.specialOffer

    })
    return (
        <AppState>
            <div>
                <h1 className={AppCss.header}>Pizza Time!</h1>
                <div className={AppCss.container}>
                    <Cart />
                    {SpecialOfferPizza && <SpecialOffer pizza={SpecialOfferPizza} />}
                    <ul>
                        {
                            pizzas.map((pizza) => {
                                return <Pizza key={pizza.id} pizza={pizza} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </AppState>
    )
}
