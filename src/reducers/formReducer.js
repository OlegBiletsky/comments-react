import {
    CHANGE_INPUT_NAME, 
    CHANGE_INPUT_TEXT,
    ADD_COMMENT_BTN_CLICK
} from '../constants/actionTypes';

const initialState = {
        inputNameValue: '',
        inputTextValue: '',  
    

};


const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_NAME:
            return {
                ...state,
                inputNameValue: action.payload,
            };
        case CHANGE_INPUT_TEXT:
            return {
                ...state,
                inputTextValue: action.payload
            };
        default:
            return state;
    }
};
export default formReducer;