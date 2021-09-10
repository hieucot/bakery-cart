import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Cart from './../components/Cart';
import CartItem from '../components/CartItem';
import CartAmount from './../components/CartAmount';
import CartResult from '../components/CartResult';
import * as Message from './../constants/Message';
import * as actions from './../actions/index';


class CartContainer extends Component {

	showCartTotal = (cart) => {
		var result = null;
		if (cart.length >= 0) {
			var total = 0;
			for (var i = 0; i < cart.length; i++) {
				total += cart[i].product.price * cart[i].quantity;
			}
			result = <CartResult cart={total} />
		}
		return result;
	};

	showTotalAmount = (cart) => {
		var result = null;
		if (cart.length >= 0) {
			var count = 0;
			for (var i = 0; i < cart.length; ++i) {
				if (cart[i]) {
					count++;
				}
			}
			result = <CartAmount amount={count} />
		}
		return result;
	};


	showCartItem = (cart) => {
		var { onRemoveProductInCart, onUpdateProductInCart } = this.props;

		var result = Message.MSG_CART_EMPTY;
		if (cart.length > 0) {
			result = cart.map((item, index) => {
				return (
					<CartItem
						key={index}
						item={item}
						index={index}
						onRemoveProductInCart={onRemoveProductInCart}
						onUpdateProductInCart={onUpdateProductInCart}
					/>
				)
			});
		}
		return result;
	};



	render() {
		var { cart } = this.props;
		return (
			<>
				<Cart
					cartAmount={this.showTotalAmount(cart)}
					cartResult={this.showCartTotal(cart)}
					cartItem={this.showCartItem(cart)}
				/>
			</>
		);
	}
}


CartContainer.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
		product: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			descriptions: PropTypes.string.isRequired,
			priceOld: PropTypes.number.isRequired,
			price: PropTypes.number.isRequired,
			productType: PropTypes.string.isRequired,
			inventory: PropTypes.number.isRequired
		}).isRequired,
		quantity: PropTypes.number.isRequired
	})).isRequired,
	onRemoveProductInCart: PropTypes.func.isRequired,
	onUpdateProductInCart: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onRemoveProductInCart: (product) => {
			dispatch(actions.actRemoveToCart(product));
		},
		onUpdateProductInCart: (product, quantity) => {
			dispatch(actions.actUpdateProduct(product, quantity));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
