import {
    GET_MORE_COMMENTS_REQUEST,
    GET_MORE_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,

    GET_PAGE_COMMENTS_REQUEST,
    GET_PAGE_COMMENTS_SUCCESS,

    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAIL,
} from '../constants/actionTypes';

import { getCommentsFetch, sendCommentFetch  } from '../api/api';


export const getMoreComments = (dispatch) => async (page) => {
    dispatch({ type: GET_MORE_COMMENTS_REQUEST });
    try {
      const response = await getCommentsFetch(page);
      const res = await response.json();
      dispatch({ type: GET_MORE_COMMENTS_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: GET_COMMENTS_FAIL, payload: e });
    }
};
export const getPageComments = (dispatch) => async (page) => {
    dispatch({ type: GET_PAGE_COMMENTS_REQUEST });
    try {
      const response = await getCommentsFetch(page);
      const res = await response.json();
      dispatch({ type: GET_PAGE_COMMENTS_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: GET_COMMENTS_FAIL, payload: e });
    }
};

export const sendPageComments = (dispatch) => async (values) => {
    dispatch({ type: ADD_COMMENT_REQUEST });
    try {
      const response = await sendCommentFetch(values);
      const res = await response.json();
      dispatch({ type: ADD_COMMENT_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: ADD_COMMENT_FAIL, payload: e });
    }
};