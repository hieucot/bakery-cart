import React, { Component } from 'react';


class CartResult extends Component {
    render() {
        return (
            <h6 className="nav-cart__title">
                Total price:
                <span>
                    {/* Props từ CartContainer hàm showCartTotal truyền qua */}
                    {this.props.cart}
                    <sup>đ</sup>
                </span>
            </h6>
        );
    }


}

export default CartResult;
