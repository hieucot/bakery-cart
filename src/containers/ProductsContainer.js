import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Products from './../components/Products';
import Product from './../components/Product';

import * as actions from './../actions/index'


class ProductsContainer extends Component {

	showProducts(products) {
		var result = null;
		var { onAddToCart, onChangeMessageAdd } = this.props;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<Product
						key={index}
						product={product}
						onAddToCart={onAddToCart}
						onChangeMessageAdd={onChangeMessageAdd}
					/>
				);
			});
		}

		return result
	};

	render() {
		var { products } = this.props;

		return (
			<>
				<Products>
					{this.showProducts(products)}
				</Products>
			</>
		);
	}
}


ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			descriptions: PropTypes.string.isRequired,
			priceOld: PropTypes.number.isRequired,
			price: PropTypes.number.isRequired,
			productType: PropTypes.string.isRequired,
			inventory: PropTypes.number.isRequired
		}),

	).isRequired,
	onAddToCart: PropTypes.func.isRequired,
	onChangeMessageAdd: PropTypes.func.isRequired

};

const mapStateToProps = state => {
	return {
		products: state.products
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) => {
			dispatch(actions.actAddToCart(product, 1));
		},
		onChangeMessageAdd: (message) => {
			dispatch(actions.actMessage(message));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
