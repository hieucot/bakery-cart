import * as types from './../constants/ActionType';
import * as Message from './../constants/Message';

var initialState = Message.MSG_DEFAULT;

const message = (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_MESSAGE:
			return action.message;
		default:
			return state;
	}
}

export default message;