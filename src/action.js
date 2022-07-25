import axios from "axios";
import { errorType, loadingType, successType } from "./constants";

export const getUsers = () => async (dispatch, getState) => {
  dispatch({
    type: loadingType,
    payload: { ...getState().myState, loading: true },
  });
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: successType,
      payload: {
        ...getState().myState,
        error: "",
        loading: false,
        users: [...data],
        comments:[]
      },
    });
  } catch (error) {
    dispatch({
      type: errorType,
      payload: { error: error.message, loading: false, data: [] },
    });
  }
};
export const searchComments = (text) => async (dispatch, getState) => {
  dispatch({
    type: loadingType,
    payload: { ...getState().myState, loading: true },
  });
  try {

      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      dispatch({
        type: successType,
        payload: {
          ...getState().myState,
          loading: false,
          comments: [
            ...data.filter(
              (item, index) =>
                item.name.includes(text) || item.body.includes(text)
            )
          ],
        },
      });
    
  } catch (error) {
    dispatch({
      type: errorType,
      payload: { ...getState().myState, error: error.message },
    });
  }
};
export const getComments = () => async (dispatch, getState) => {
  dispatch({
    type: loadingType,
    payload: { ...getState().myState, loading: true },
  });
  try {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/comments"
    );
    dispatch({
      type: successType,
      payload: {
        ...getState().myState,
        loading: false,
        comments: [...data],
      },
    });
  } catch (error) {
    dispatch({
      type: errorType,
      payload: { ...getState().myState, error: error.message },
    });
  }
};
export const getPosts = () => async (dispatch, getState) => {
  dispatch({
    type: loadingType,
    payload: { ...getState().myState, loading: true },
  });
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: successType,
      payload: {
        ...getState().myState,
        loading: false,
        posts: [...data],
      },
    });
  } catch (error) {
    dispatch({
      type: errorType,
      payload: { ...getState().myState, error: error.message },
    });
  }
};
export const getUserPosts = (id) => async (dispatch, getState) => {
  dispatch({
    type: loadingType,
    payload: { ...getState().myState, loading: true },
  });
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    dispatch({
      type: successType,
      payload: {
        ...getState().myState,
        loading: false,
        posts: [...data],
      },
    });
  } catch (error) {
    dispatch({
      type: errorType,
      payload: { ...getState().myState, error: error.message },
    });
  }
};
export const getPostComments = (postid) => async (dispatch, getState) => {
  dispatch({
    type: loadingType,
    payload: { ...getState().myState, loading: true },
  });
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postid}/comments`
    );
    dispatch({
      type: successType,
      payload: {
        ...getState().myState,
        loading: false,
        comments: [...data],
      },
    });
  } catch (error) {
    dispatch({
      type: errorType,
      payload: { ...getState().myState, error: error.message },
    });
  }
};
