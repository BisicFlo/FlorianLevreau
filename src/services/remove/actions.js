
import * as types from "./constants";

export function count_increment() {
	return (dispatch, state) => {
		dispatch({
			type: types.COUNT_INCREMENT
		});
	};
};

export function todos_add_todo(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.TODOS_ADD_TODO,
			payload: payload
		});

	};
};


