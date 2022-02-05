import React from 'react';
import { useStateDispatch } from './AppState'
import { Pizza } from '../types'
import { AddToCartProps, WithAddToCartProps } from './HOC';

interface Props extends AddToCartProps {
    pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {


    const handleAddToCartClick = () => {
        addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
    }
    return (
        <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <WithAddToCartProps>
                {({ addToCart }) => {
                    return (<button onClick={() => {
                        addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
                    }}>Add to Cart</button>)

                }}
            </WithAddToCartProps>
        </div>
    )
}

export default SpecialOffer;

