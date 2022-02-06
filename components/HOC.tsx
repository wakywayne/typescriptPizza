import React from 'react'
import { CartItem, useStateDispatch } from './AppState'
import Cart from './Cart'

export interface AddToCartProps {
    addToCart: (item: Omit<CartItem, 'quantity'>) => void
}

export function withAddToCart<OriginalProps extends AddToCartProps>(
    ChildComponent: React.ComponentType<OriginalProps>) {
    const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
        const dispatch = useStateDispatch()
        const handleAddToCartClick: AddToCartProps['addToCart'] = (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    item,
                }
            }
            )
        }
        return <ChildComponent {...props as OriginalProps} addToCart={handleAddToCartClick} />
    }
    return AddToCartHOC;
}

export const WithAddToCartProps: React.FC<{
    children: (props: AddToCartProps) =>
        JSX.Element
}> = ({ children }) => {
    const dispatch = useStateDispatch()
    const handleAddToCartClick: AddToCartProps['addToCart'] = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item,
            }
        })
    }

    // Can you please show me exactly what it is that needs to be done here? 
    // I don;t understand what addToCart is supposed to equal and if I can make it equal to anything randomly, then I don't understand what value it holds?

    return children({ addToCart });
}