import React, { Component } from 'react';
import MessageContainer from './../containers/MessageContainer';

class Cart extends Component {
    render() {
        //  Props bên CartContainer truyền qua
        var { cartAmount, cartResult, cartItem } = this.props;

        return (
            <>
                <div className="nav-cart__header" >
                    <div className="nav-cart__view">
                        {cartAmount}
                        {cartResult}
                    </div>

                    <button className="nav-cart__close">
                        <i className='bx bx-x'></i>
                    </button>
                    <MessageContainer />
                </div>
                <div className="scroll--bar nav-cart__body">
                    {cartItem}
                </div>
                <div className="nav-cart__footer">
                    <a href="# " className="btn btn--outline btn--md btn--zakaria">Go to cart</a>
                    <a href="# " className="btn btn--primary btn--md btn--zakaria">Checkout</a>
                </div>
            </>
        );
    }
}

export default Cart;
