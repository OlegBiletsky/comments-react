import React from 'react';
import '../../styles/Form.scss';

function Form ({ inputNameValue,inputTextValue,handleChangeNameInput,handleChangeTextInput, }) {
    return (
        <>
            <h1 className="title">
                <p className="title__first">Please leave a comment.</p> 
                <p className="title__second">Your feedback is appreciated.</p>
            </h1>

            <form className="form"  noValidate onSubmit={ (e)=>(e.preventDefault()) }>

                <div className="form-name">
                    <input
                        value={inputNameValue}
                        onChange={ (e) => handleChangeNameInput(e.target.value)}
                        placeholder="Your name"
                        onFocus={ (e) => e.target.placeholder = "" }
                        onBlur={ (e) => e.target.placeholder = "Name" }
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
                        onFocus={ (e) => e.target.placeholder = "" }
                        onBlur={ (e) => e.target.placeholder = "Add a comment" }
                        className='form-text__field'
                        name='form-text__field'
                        type='text'
                        autoComplete='off'
                    />  
                </div>

                <button 
                    className='form-submit-btn' 
                    type='submit' 
                    onClick={ (e)=>{return (e.preventDefault()   ) }} 
                    disabled={false }
                > 
                    <div className='form-submit-btn__text-wrapper'>
                        <span className='form-submit-btn__text'>Comment</span>
                    </div>
                </button> 

            </form>

        </>
    );
};
export default Form;