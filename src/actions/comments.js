import {
    GET_MORE_COMMENTS_REQUEST,
    GET_MORE_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    GET_PAGE_COMMENTS_REQUEST,
    GET_PAGE_COMMENTS_SUCCESS,
} from '../constants/actionTypes';

import { getCommentsFetch } from '../api/api';


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
