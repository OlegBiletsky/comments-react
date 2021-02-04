import {
    // GET_POSTS_REQUEST,
    // GET_POSTS_SUCCESS,
    // GET_POSTS_FAIL,
    // GET_MORE_POSTS_REQUEST,
    // GET_MORE_POSTS_SUCCESS,
    // GET_MORE_POSTS_FAIL,

    // CHANGE_INPUT_BLOG,

    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    GET_MORE_COMMENTS_REQUEST,
    GET_MORE_COMMENTS_SUCCESS,
    GET_MORE_COMMENTS_FAIL,

} from '../constants/constants';

// import { getPostsFetch } from '../api/newsapi';
import { getCommentsFetch } from '../api/api';

// const getPosts = async (dispatch, param) => {
//     dispatch({ type: GET_POSTS_REQUEST });
//     try {
//       const response = await getPostsFetch(param);
//       const res = await response.json();
//       dispatch({ type: GET_POSTS_SUCCESS, payload: res });
//     } catch (e) {
//       dispatch({ type: GET_POSTS_FAIL, payload: e });
//     }
// };
const getComments = async (dispatch, param) => {
    dispatch({ type: GET_COMMENTS_REQUEST });
    try {
      const response = await getCommentsFetch(param);
      const res = await response.json();
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: GET_COMMENTS_FAIL, payload: e });
    }
}; 
// export const getPostsFunc = (dispatch) => {
//     return (param) => getPosts(dispatch, param);
// };
export const getCommentsFunc = (dispatch) => {
    return (param) => getComments(dispatch, param);
};


// export const changeInputAction = (inputValue) => (
//     {type: CHANGE_INPUT_BLOG, payload: inputValue,}
// );
// export const changeInputAction = (inputValue) => (
//     {type: CHANGE_INPUT_BLOG, payload: inputValue,}
// );