import React from 'react';
import { connect } from 'react-redux';
import { changeInputNameAction, changeInputTextAction} from '../actions/form';
import Form from '../components/Form';

const FormContainer = ( { inputNameValue, inputTextValue, changeInputName, changeInputText } ) => (
    <Form 
        inputNameValue={inputNameValue} 
        inputTextValue={inputTextValue} 
        handleChangeNameInput={changeInputName}
        handleChangeTextInput={changeInputText}
        // handleSubmitForm={handleSubmitForm}
    />
);


const mapStateToProps = (state) => ({
    inputNameValue: state.formReducer.inputNameValue,
    inputTextValue: state.formReducer.inputTextValue,
});


const mapDispatchToProps = (dispatch, param) => {
    return{
        
        changeInputName: (inputValue) => dispatch( changeInputNameAction(inputValue) ),
        changeInputText: (inputValue) => dispatch( changeInputTextAction(inputValue) ) 
    };
};


export default connect(mapStateToProps, mapDispatchToProps,)(FormContainer);