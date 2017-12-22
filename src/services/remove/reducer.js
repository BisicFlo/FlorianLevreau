import * as types from "./constants";


const initialState = {
	items: [],
	
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		

		case types.REMOVE_TODO:
			var {items} = state;

			items.splice(0, 1);

			return {
				...state,
				items: items
			};
			break;

		default:
			return state;
			break;

	}
};


