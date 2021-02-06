import React from 'react';
import '../../styles/Form.scss';
import {BsBrightnessHighFill, BsPlusCircleFill } from 'react-icons/bs';

function Form ({ inputNameValue,inputTextValue,handleChangeNameInput,handleChangeTextInput, handleSubmitForm}) {
    return (
        <>
            <h1 className="title">
                <div className="title__first">Please leave a comment</div> 
                <div className="title__second">
                    <p>Your feedback is appreciated</p>
                    <BsBrightnessHighFill className='title__icon'/>
                </div>
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
                    onClick={ (e)=>{return (e.preventDefault(), handleSubmitForm(e)    ) }} 
                    disabled={false }
                > 
                    <div className='form-submit-btn__text-wrapper'>
                        <div className='form-submit-btn__text'>Comment</div>
                        <BsPlusCircleFill  className='form-submit-btn__icon'/>
                    </div>
                </button> 

            </form>

        </>
    );
};
export default Form;