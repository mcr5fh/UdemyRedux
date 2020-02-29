import jsonPaceholder from "../apis/jsonPlaceHolder";
import _ from "lodash";

//Redux Thunk also gives you the getState argument -- gives you all the
//data in side of redux
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //we have to dispacth the result of action creator
  //TODO: why do you have to dispacth this twice?
  console.log("Pre double");
  await dispatch(fetchPosts());
  const userIds = new Set(getState().posts.map(post => post.id));

  console.log("Fetched Posts. User Ids: " + userIds);

  userIds.forEach(id => dispatch(fetchUser(id)));
  //whenever we dispact a function, reduxThunk will invoke it
  //Then will dispact its own action

  //Possible refactor
  /*
  _.chain(getState().posts)
  .map('userId')
  .uniq()
  .forEach(id => dispatch(fetchUser(id)))
  .value();//need this to compute the chain
*/
};

/*
export const fetchPosts = async () => {
  //Bad approach! -- this breaks the rule of redux
  //(the rules of an action creator) "actions must be plain objects"
  const response = await jsonPaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
*/

export const fetchPosts = () => async dispatch => {
  const response = await jsonPaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  // _fetchUser(id, dispatch);
  const response = await jsonPaceholder.get("/users/" + id);

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

//Memoized version
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPaceholder.get("/users/" + id);

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });
