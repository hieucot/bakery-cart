import React, { Component } from 'react';
import * as Message from './../constants/Message';

class Product extends Component {

    showBadge(badge, priceOld) {
        if (badge === "sale" && priceOld !== 0) {
            return <span className="product--badge product--badge-sale">Sale</span>
        }
        else if (badge === "" && priceOld !== 0) {
            return <span className="product--badge product--badge-sale">Sale</span>
        }
        else if (badge === "new") {
            return <span className="product--badge product--badge-new">New</span>
        }
    }

    render() {
        var { product } = this.props;
        return (
            <div className="product__item">
                <div className="product__picture">
                    <a href="# " className="product__img">
                        <img src={product.image} alt={product.name} />
                    </a>

                    {this.showBadge(product.productType, product.priceOld)}

                </div>
                <div className="product__content">
                    <div className="product__top">
                        <div className="product__info">
                            <h3 className="product__title">
                                <a href="# ">{product.name}</a>
                            </h3>
                            <p className="descriptions product__descriptions">
                                {product.descriptions}
                            </p>
                        </div>
                        <div className="product__pricing-wrap">
                            <span className={product.priceOld !== 0 ? "product__pricing product__pricing--old" : "product__pricing--disable"}>
                                {product.priceOld}
                                <sup>đ</sup>
                            </span>
                            <span className="product__pricing">
                                {product.price}
                                <sup>đ</sup>
                            </span>
                        </div>
                    </div>
                    <div className="product__bottom">
                        <div className="product__button">
                            <a href="# " className="btn btn--icon btn--primary-2 btn--zakaria">
                                <i className='bx bx-search'></i>
                            </a>
                        </div>
                        <div className="product__button">
                            <button
                                className="btn btn--icon btn--primary-2 btn--zakaria product__add"
                                onClick={() => this.onAddToCart(product)}
                            >
                                <i className='bx bx-cart'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    onAddToCart = (product) => {
        var { onAddToCart, onChangeMessageAdd } = this.props;
        onAddToCart(product);
        onChangeMessageAdd(Message.MSG_ADD_TO_CART_SUCCESS);
    }
}


export default Product;
