import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getPageComments } from '../actions/comments';
import CommentsList from '../components/Comments';
import {getCommentsSelector, getPagesSelector, getLastPageSelector, getCurrentPageSelector} from '../selectors/comments'

const CommentsContainer = ( { comments, getComments, pages, lastPage } ) => {
    
    useEffect(()=>{getComments(1)}, []);
    return (<CommentsList
        comments={comments} 
        
    />)
};


const mapStateToProps = (state) => ({
    comments: getCommentsSelector(state),
    pages: getPagesSelector(state),
    lastPage: getLastPageSelector(state),

});


const mapDispatchToProps = (dispatch) => {
    return{
        getComments: getPageComments(dispatch),
    };
};


export default connect(mapStateToProps, mapDispatchToProps,)(CommentsContainer);