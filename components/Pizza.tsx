import React, { useContext } from 'react'
import { useStateDispatch } from './AppState';
import { Pizza } from '../types';
import { AddToCartProps, withAddToCart } from './HOC';

interface Props extends AddToCartProps {
    pizza: Pizza;
}


const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
    const handleAddToCartClick = () => {
        addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
    }
    return (
        <div>
            <li>
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <button onClick={handleAddToCartClick}>Add to Cart</button>
            </li>
        </div>
    )

}

export default withAddToCart(PizzaItem);