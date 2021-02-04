import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    GET_MORE_COMMENTS_REQUEST,
    GET_MORE_COMMENTS_SUCCESS,
    GET_MORE_COMMENTS_FAIL,
} from '../constants/constants';
import { getCommentsFetch } from '../api/api';

const getComments = async (dispatch) => {
    dispatch({ type: GET_COMMENTS_REQUEST });
    try {
      const response = await getCommentsFetch();
      const res = await response.json();
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: GET_COMMENTS_FAIL, payload: e });
    }
}; 

export const getCommentsFunc = (dispatch) => {
    return () => getComments(dispatch);
};

