import React from 'react';
import '../../styles/MoreComments.scss';
import {IoChevronDownCircleOutline} from 'react-icons/io5';

const MoreComments = ( { getMoreComments, lastPage, currentPage } ) => {
    return (
        <>
            <div className='more-btn-wrapper'>
                {
                    (lastPage !== currentPage) && 
                    <button 
                        onClick={()=>{getMoreComments(currentPage+1)}} 
                        className='more-btn'
                    >
                        <div className='more-btn-inner-wrapper'>
                            <div className='more-btn__text'>Download more...</div>
                            <IoChevronDownCircleOutline  className='more-btn__icon'/>
                        </div>
                    </button>
                }
            </div>
        </>
)}
export default MoreComments;