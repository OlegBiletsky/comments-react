import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPageComments, getMoreComments } from "../actions/comments";
import CommentsList from "../components/CommentsList";
import MoreComments from "../components/MoreComments";
import {
    getCommentsSelector,
    getPagesSelector,
    getLastPageSelector,
    getCurrentPageSelector,
    getSeparateCurrentPageSelector,
} from "../selectors/comments";
import ReactPaginate from "react-paginate";
import "../styles/Paginate.scss";

const CommentsContainer = ({
    comments,
    getComments,
    getMoreComments,
    lastPage,
    currentPage,
    separateCurrentPage,
}) => {

    const [initial, setInitial] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await getComments(1);
            setInitial(false);
        }
        fetchData();
    }, [])


    return (
        <>
            {
                !initial && <div>
                    <CommentsList comments={comments} />

                    <MoreComments
                        lastPage={lastPage}
                        currentPage={currentPage}
                        getMoreComments={getMoreComments}
                    />
                    <div className='pagination-wrapper'>
                        <ReactPaginate
                            containerClassName={"pagination-container"}
                            pageLinkClassName={"pageLinkClassName"}
                            activeLinkClassName={"activeLinkClassName"}
                            previousLinkClassName={"previousLinkClassName"}
                            nextLinkClassName={"nextLinkClassName"}
                            disabledClassName={"disabledClassName"}
                            breakLinkClassName={"breakLinkClassName"}
                            pageCount={lastPage}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            previousLabel={"< Previous"}
                            nextLabel={"Next >"}
                            onPageChange={(e) => {
                                !initial && getComments(e.selected + 1);
                            }}
                            initialPage={currentPage - 1}
                            forcePage={separateCurrentPage - 1}
                        />
                    </div>
                </div>
            }
        </>
    );
};

const mapStateToProps = (state) => ({
    comments: getCommentsSelector(state),
    lastPage: getLastPageSelector(state),
    currentPage: getCurrentPageSelector(state),
    separateCurrentPage: getSeparateCurrentPageSelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: getPageComments(dispatch),
        getMoreComments: getMoreComments(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
