import {
    CHANGE_INPUT_NAME, 
    CHANGE_INPUT_TEXT,
} from '../constants/actionTypes';

const initialState = {
    value: {
        inputNameValue: '',
        inputTextValue: '', 
    }
         
    

};


const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_NAME:
            return {
                ...state,
                value:{
                    ...state.value,
                    inputNameValue: action.payload,   
                }
                
            };
        case CHANGE_INPUT_TEXT:
            return {
                ...state,
                value:{
                    ...state.value,
                    inputTextValue: action.payload
                }
                
            };
        default:
            return state;
    }
};
export default formReducer;