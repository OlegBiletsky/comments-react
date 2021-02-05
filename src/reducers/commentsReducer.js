import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    
} from '../constants/actionTypes';

const initialState = {
    comments: {
        isLoading: null,
        error: null,
        database: [],
    },
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                comments: {
                    isLoading: true,
                    error: null,
                    database: []
                },
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: {
                    isLoading: false,
                    error: false,
                    database: action.payload,
                },
            };
        case GET_COMMENTS_FAIL:
            return {
                ...state,
                comments: {
                    isLoading: false,
                    error: action.payload,
                    database: false,
                },
            };
        default:
            return state;
    }
};
export default blogReducer;