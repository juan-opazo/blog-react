import _, { forEach } from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        forEach(id => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: res.data
    });
};

export const fetchUsers = () => async dispatch => {
    const res = await jsonPlaceholder.get('/users');

    dispatch({
        type: 'FETCH_USERS',
        payload: res.data
    });
};

export const fetchUser = (id) => async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: res.data
    })
};

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const res = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: res.data
//     })
// });