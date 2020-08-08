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