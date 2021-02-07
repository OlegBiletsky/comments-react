import {
    GET_MORE_COMMENTS_REQUEST,
    GET_MORE_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    GET_PAGE_COMMENTS_REQUEST,
    GET_PAGE_COMMENTS_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL,
} from "../constants/actionTypes";

const initialState = {
    comments: {
        isLoading: null,
        error: null,
        database: [],
    },
    separateCurrentPage: 1,
    pages: [1],
    lastPage: null,
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MORE_COMMENTS_REQUEST:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    isLoading: true,
                    error: null,
                },
            };
        case GET_PAGE_COMMENTS_REQUEST:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    isLoading: true,
                    error: null,
                },
            };
        case GET_MORE_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: {
                    isLoading: false,
                    error: false,
                    database: [
                        ...state.comments.database,
                        ...action.payload.data,
                    ],
                },
                separateCurrentPage: action.payload.current_page,
                pages: [...state.pages, action.payload.current_page],
                lastPage: action.payload.last_page,
            };
        case GET_PAGE_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: {
                    isLoading: false,
                    error: false,
                    database: action.payload.data,
                },
                separateCurrentPage: action.payload.current_page,
                pages: [action.payload.current_page],
                lastPage: action.payload.last_page,
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
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    isLoading: true,
                    error: null,
                },
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    isLoading: false,
                    error: false,
                },
            };
        case ADD_COMMENT_FAIL:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    isLoading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};
export default commentsReducer;
