import { FETCH_POSTS, POST_SELECTED, DELETE_POST } from  '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };

        case POST_SELECTED:
        console.log('your reducer')

        return {
            ...state,
            item: action.payload,
        };

        case DELETE_POST:
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload)
            
        };

        default:
            return state;
    }
}