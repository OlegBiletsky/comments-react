import { CHANGE_INPUT_NAME, CHANGE_INPUT_TEXT } from "../constants/actionTypes";

//action-creator for Name input
export const changeInputNameAction = (inputNameValue) => ({
    type: CHANGE_INPUT_NAME,
    payload: inputNameValue,
});

//action-creator for Text input
export const changeInputTextAction = (inputTextValue) => ({
    type: CHANGE_INPUT_TEXT,
    payload: inputTextValue,
});
