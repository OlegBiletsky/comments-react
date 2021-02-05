import {
    CHANGE_INPUT_NAME, 
    CHANGE_INPUT_TEXT,
    ADD_COMMENT_BTN_CLICK
} from '../constants/actionTypes';

//action-creator for Name input
export const changeInputNameAction = (inputNameValue) => (
    {
        type: CHANGE_INPUT_NAME, 
        payload: inputNameValue
    }
);

//action-creator for Text input
export const changeInputTextAction = (inputTextValue) => (
    {
        type: CHANGE_INPUT_TEXT, 
        payload: inputTextValue
    }
);

// //action-creator for Add Comment button
// export const changeInputText = (name, text) => (
//     {
//         type: ADD_COMMENT_BTN_CLICK, 
//         payload: { 'name': name, 'text': text }
//     }
// );
