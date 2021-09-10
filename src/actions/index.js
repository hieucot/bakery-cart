import * as types from './../constants/ActionType';

export const actMessage = (message) => {
	return {
		type: types.CHANGE_MESSAGE,
		message
	}
}
export const actAddToCart = (product, quantity) => {
	return {
		type: types.ADD_TO_CART,
		product,
		quantity
	}
}

export const actRemoveToCart = (product) => {
	return {
		type: types.REMOVE_TO_CART,
		product
	}
}

export const actUpdateProduct = (product, quantity) => {
	return {
		type: types.UPDATE_PRODUCT,
		product,
		quantity
	}
}
