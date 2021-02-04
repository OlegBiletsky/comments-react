import React, {Component} from 'react';
import '../../styles/Form.scss';

class Form extends Component  {
    constructor() {
        super();
        this.state = {
            name: null,
            text:null,

            errorName: null,
            errorText: null,

            LOADER: false,
            SUCCESS : false,
        };

// bind function

    };
render() {
    return (
        <>
            <h1 className="title">
                Please leave a comment. Your feedback is appreciated.
            </h1>

            <form className="form"  noValidate>

                <div className="form-name">
                    <input
                        className='form-name__field'
                        name='form-name__field'
                        type='text'
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChangeNameInput}
                        autoComplete='off'
                    />
                </div>

                <div className="form-text">
                    <textarea
                        className='form-text__field'
                        name='form-text__field'
                        type='text'
                        placeholder="Comments"
                        value={this.state.text}
                        onChange={this.handleChangeTextInput}
                        autoComplete='off'
                    />  
                </div>

                <button 
                    className='form-submit-btn' 
                    type='submit' 
                    onClick={this.handleSubmitForm} 
                    disabled={false }
                > 
                    <div className='form-submit-btn__text-wrapper'>
                        <span className='form-submit-btn__text'>Send now</span>
                    </div>
                
                </button>
            </form>

        </>
    );
};
};
export default Form;