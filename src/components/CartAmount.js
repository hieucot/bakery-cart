import React, { Component } from 'react';


class CartAmount extends Component {
	render() {
		return (
			<h5 className="nav-cart__title">
				In cart:
				<span>{this.props.amount}</span>
				Products
			</h5>
		);
	}
}


export default CartAmount;
