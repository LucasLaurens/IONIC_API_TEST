export function get_item() {
    return dispatch => {
        return dispatch({
            type: 'GET_ITEM'
        });
    }
};

export const create_item = (item) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'CREATE_ITEM',
            item
        })
    }
}

export const delete_item = (item) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_ITEM',
            item
        })
    }
}