import React from 'react';
import '../../styles/Form.scss';

function Form ({ inputNameValue,inputTextValue,handleChangeNameInput,handleChangeTextInput, }) {

    return (
        <>
            <h1 className="title">
                Please leave a comment. Your feedback is appreciated.
            </h1>

            <form className="form"  noValidate onSubmit={ (e)=>(e.preventDefault()) }>

                <div className="form-name">
                    <input
                        value={inputNameValue}
                        onChange={ (e)=>handleChangeNameInput(e.target.value)}
                        placeholder="Your name"
                        className='form-name__field'
                        name='form-name__field'
                        type='text'
                        autoComplete='off'
                    />
                </div>

                <div className="form-text">
                    <textarea
                        value={inputTextValue}
                        onChange={ (e)=>handleChangeTextInput(e.target.value)}
                        placeholder="Add a comment"
                        className='form-text__field'
                        name='form-text__field'
                        type='text'
                        autoComplete='off'
                    />  
                </div>

                {/* <button 
                    className='form-submit-btn' 
                    type='submit' 
                    onClick={ (e)=>{return (e.preventDefault(), handleSubmitForm(value)) }} 
                    disabled={false }
                > 
                    <div className='form-submit-btn__text-wrapper'>
                        <span className='form-submit-btn__text'>Comment</span>
                    </div>
                </button> */}

            </form>

        </>
    );
};
export default Form;