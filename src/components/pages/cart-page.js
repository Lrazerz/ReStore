import React from 'react';
import ShoppingCartTable from '../shopping-cart-table';

const CartPage = ({orderTotal}) => {
    return (
        <ShoppingCartTable orderTotal={orderTotal}/>
    )
};

export default CartPage;