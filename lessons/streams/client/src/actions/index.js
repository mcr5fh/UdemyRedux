import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  GET_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM
} from "../actions/types";
import streams from "../api/streams";
import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//We want to route the user back to the Stream list
//
export const createStream = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    console.log(response);
    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
    history.push("/");
  };
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  console.log(response);
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const getStream = id => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    console.log("GetStream ACtion " + JSON.stringify(response));
    dispatch({
      type: GET_STREAM,
      payload: response.data
    });
  };
};

export const updateStream = (id, formValues) => {
  return async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    console.log(response);
    dispatch({
      type: UPDATE_STREAM,
      payload: response.data
    });
  };
};

export const deleteStream = id => {
  return async dispatch => {
    const response = await streams.delete(`/streams/${id}`);
    console.log(response);
    dispatch({
      type: DELETE_STREAM,
      payload: id
    });
  };
};
