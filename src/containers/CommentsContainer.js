import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getPageComments, getMoreComments } from '../actions/comments';
import CommentsList from '../components/CommentsList';
import MoreComments from '../components/MoreComments';
import {getCommentsSelector, getPagesSelector, getLastPageSelector, getCurrentPageSelector} from '../selectors/comments';
import ReactPaginate from 'react-paginate';

const CommentsContainer = ( { comments, getComments, getMoreComments, pages, lastPage, currentPage } ) => {
    
    useEffect(()=>{getComments(currentPage)}, []);
    return (
        <>
            <CommentsList
                comments={comments} 
            />

            <MoreComments
                lastPage={lastPage}
                currentPage={currentPage}
                getMoreComments={getMoreComments}
            />

            <ReactPaginate 
                pageCount = {lastPage}
                pageRangeDisplayed = {lastPage}
                marginPagesDisplayed ={lastPage}
                initialPage = {currentPage}
                onPageChange={(e)=>{getComments(e.selected+1);
                }}
            />
            
        </>
    )
};



const mapStateToProps = (state) => ({
    comments: getCommentsSelector(state),
    pages: getPagesSelector(state),
    lastPage: getLastPageSelector(state),
    currentPage: getCurrentPageSelector(state)

});


const mapDispatchToProps = (dispatch) => {
    return{
        getComments: getPageComments(dispatch),
        getMoreComments: getMoreComments(dispatch),  
    };
};


export default connect(mapStateToProps, mapDispatchToProps,)(CommentsContainer);