const initState = {
    items: [
		{
			id: 1,
			name: "Pokémon Yellow"
		},
		{
			id: 2,
			name: "Mega Man X"
		},
		{
			id: 3,
			name: "One Push Man"
		}
	]
}

const itemsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ITEM':
            console.log('get items')
            return state
        case 'CREATE_ITEM':
            console.log('create item', action.item)
            return {
                ...state,
                items: [...state.items, action.item]
            }
        // case 'DELETE_ITEM':
        //     console.log('delete item', action.id)
        //     return state
        // case 'EDIT_ITEM':
        //     console.log('edit item', action.item)
        //     return state
        default:
            return state
    }
}

export default itemsReducer