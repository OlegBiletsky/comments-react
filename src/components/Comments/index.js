import React from 'react';
import '../../styles/Comments.scss';

function Comments ({ getComments  }) {
    return (
        <>
            <h1 className="title">
                Title for comments
            </h1>

            <button 
                onClick={ (e)=>{return ( e.preventDefault(), getComments() ) }} 
                type='submit' 
            >
                Show comments
            </button>




        </>
    );
};
export default Comments;