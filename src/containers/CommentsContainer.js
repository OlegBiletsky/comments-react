import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getPageComments, getMoreComments } from '../actions/comments';
import CommentsList from '../components/CommentsList';
import MoreComments from '../components/MoreComments';
import {getCommentsSelector, getPagesSelector, getLastPageSelector, getCurrentPageSelector, getSeparateCurrentPageSelector} from '../selectors/comments';
import ReactPaginate from 'react-paginate';
import '../styles/Paginate.scss';

const CommentsContainer = ( { comments, getComments, getMoreComments, pages, lastPage, currentPage, separateCurrentPage } ) => {
    
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
            <div className='pagination-wrapper'>
                <ReactPaginate 
                    containerClassName={'pagination-container'}
                    pageLinkClassName={'pageLinkClassName'}
                    pageClassName={'pageClassName'}
                    activeLinkClassName={'activeLinkClassName'}
                    activeClassName={'activeClassName'}
                    previousClassName={'previousClassName'}
                    nextClassName={'nextClassName'}
                    previousLinkClassName={'previousLinkClassName'}
                    nextLinkClassName={'nextLinkClassName'}
                    disabledClassName={'disabledClassName'}
                    breakLinkClassName={'breakLinkClassName'}
                    pageCount = {lastPage}//загальна к-сть сторінок
                    pageRangeDisplayed = {3}//для відображення
                    marginPagesDisplayed ={1}//на полях
                    previousLabel={'< Previous'}
                    nextLabel={'Next >'}
                    onPageChange={(e)=>{ getComments(e.selected+1); }}
                    initialPage = {currentPage-1}
                />
            </div>
            
        
        </>
    )
};



const mapStateToProps = (state) => ({
    comments: getCommentsSelector(state),
    pages: getPagesSelector(state),
    lastPage: getLastPageSelector(state),
    currentPage: getCurrentPageSelector(state),
    separateCurrentPage: getSeparateCurrentPageSelector(state),

});


const mapDispatchToProps = (dispatch) => {
    return{
        getComments: getPageComments(dispatch),
        getMoreComments: getMoreComments(dispatch),  
    };
};


export default connect(mapStateToProps, mapDispatchToProps,)(CommentsContainer);