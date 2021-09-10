import React, { Component } from 'react';

class CartItem extends Component {

    render() {

        // item từ bên map CartContainer truyền qua.
        var { item } = this.props;

        return (
            <div className="nav-cart__item">
                <a href="# " className="nav-cart__thumbnail">
                    <img src={item.product.image} alt={item.product.name} />
                </a>
                <div className="nav-cart__product">
                    <div className="nav-cart__heading">
                        <h6 className="nav-cart__name">
                            <a href="# ">{item.product.name}</a>
                        </h6>
                        <button
                            className="nav-cart__remove"
                            onClick={() => this.onRemove(item.product)}
                        >
                            <i className='bx bx-trash-alt'></i>
                        </button>
                    </div>
                    <div className="nav-cart__option">
                        <div className="nav-cart__step">
                            <button
                                className="nav-cart__arrow"
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            >
                                <i className='bx bx-minus'></i>
                            </button>
                            <span className="nav-cart__quantity">
                                {item.quantity}
                            </span>
                            <button
                                className="nav-cart__arrow"
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            >
                                <i className='bx bx-plus'></i>
                            </button>
                        </div>
                        <div className="nav-cart__prices">
                            <span className={item.product.priceOld !== 0 ? "nav-cart__priceold" : "nav-cart__priceold--disable"}>
                                {item.product.priceOld}
                                <sup>đ</sup>
                            </span>
                            <h6 className="nav-cart__price">
                                {this.showTotal(item.product.price, item.quantity)}
                                <sup>đ</sup>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showTotal = (price, quantity) => {
        return price * quantity
    };

    onRemove = (product) => {
        var { onRemoveProductInCart } = this.props;
        onRemoveProductInCart(product);
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity);
        }
    }
}

export default CartItem;
