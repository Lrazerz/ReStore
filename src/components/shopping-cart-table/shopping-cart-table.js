import React from "react";
import {connect} from "react-redux";

import './shopping-cart-table.css';


const ShoppingCartTable = ({items, orderTotal, onIncrease, onDecrease, onDelete}) => {
    return (
        <div className='shopping-cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th className='text-right pr-5'>Actions</th>
                </tr>
                </thead>

                <tbody>
                {items.map((item, idx) => {
                    const {id, title, count, totalPrice: total} = item;
                    return (
                        <tr key={id}>
                            <td>{idx+1}</td>
                            <td>{title}</td>
                            <td>{count}</td>
                            <td>{total}</td>
                            <td>
                                <button
                                    className="btn btn-outline-danger btn-sm float-right"
                                    onClick={() => onDelete(id)}>
                                    <i className="fa fa-trash-o" />
                                </button>
                                <button
                                    className="btn btn-outline-success btn-sm float-right"
                                    onClick={() => onIncrease(id)}>
                                    <i className="fa fa-plus-circle" />
                                </button>
                                <button
                                    className="btn btn-outline-warning btn-sm float-right"
                                    onClick={() => onDecrease(id)}>
                                    <i className="fa fa-minus-circle" />
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <div className='order-total'>
                {orderTotal}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
        orderTotal: state.orderTotal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {console.log('Increase ', id)},
        onDecrease: (id) => {console.log('Decrease ', id)},
        onDelete: (id) => {console.log('Delete ', id)},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);