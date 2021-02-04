import React from 'react';
import { connect } from 'react-redux';
import { getCommentsFunc} from '../actions/comments';
import Comments from '../components/Comments';

const CommentsContainer = ( { comments } ) => (
    <Comments 
        comments={comments} 
    />
);


const mapStateToProps = (state) => ({
    comments: state.commentsReducer.comments.database,

});


const mapDispatchToProps = (dispatch, param) => {
    return{
        getPosts: getCommentsFunc(dispatch, param),
    };
};


export default connect(mapStateToProps, mapDispatchToProps,)(CommentsContainer);