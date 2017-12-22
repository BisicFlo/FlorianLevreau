
import * as types from "./constants";



export function todos_add_todo(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.TODOS_ADD_TODO,
			payload: payload
		});

	};
};

export function remove_todo(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.REMOVE_TODO,
			payload: payload
	
		});

	};
};


export function remove_last_todo(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.REMOVE_LAST_TODO,

	
		});

	};
};