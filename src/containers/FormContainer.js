import React from 'react';
import { connect } from 'react-redux';
import { changeInputNameAction, changeInputTextAction } from '../actions/form';
import { sendPageComments } from '../actions/comments';

import Form from '../components/Form';

const FormContainer = ( { inputNameValue, inputTextValue, changeInputName, changeInputText, sendComments } ) => (
    <Form 
        inputNameValue={inputNameValue} 
        inputTextValue={inputTextValue} 
        handleChangeNameInput={changeInputName}
        handleChangeTextInput={changeInputText}
        handleSubmitForm={sendComments}
    />
);


const mapStateToProps = (state) => ({
    inputNameValue: state.form.inputNameValue,
    inputTextValue: state.form.inputTextValue,
});


const mapDispatchToProps = (dispatch) => {
    return{
        
        changeInputName: (inputValue) => dispatch( changeInputNameAction(inputValue) ),
        changeInputText: (inputValue) => dispatch( changeInputTextAction(inputValue) ) ,
        sendComments: sendPageComments(dispatch),
    };
};


export default connect(mapStateToProps, mapDispatchToProps,)(FormContainer);