import * as types from "./constants";


const initialState = {
	items: [],
	
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		

		case types.TODOS_ADD_TODO:
			var {items} = state;

			items.push(
				{
					id: Date.now(),
					text: action.payload.text,
					prix:  action.payload.prix,
					image:  action.payload.image, /* /!\ */
					nombre: action.payload.nombre,
					description: action.payload.description,
					completed: false,
					index: action.payload.index,
				}
			);

			return {
				...state,
				items: items
			};
			break;

		case types.REMOVE_TODO:
		var {items} = state;
		

			items.splice(  action.payload.index - 1 , 1);

			console.log("test index rudux  - ", typeof (items[action.payload.index ]));

			return {
				...state,
				items: items
			};
			break;

		case types.REMOVE_LAST_TODO:
		var {items} = state;
	

			items.pop();

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


