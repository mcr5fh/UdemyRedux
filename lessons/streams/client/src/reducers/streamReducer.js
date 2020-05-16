import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  GET_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_STREAM:
    case UPDATE_STREAM:
    case CREATE_STREAM:
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case FETCH_STREAMS:
      //payload will be an array of streams, but we want to save it as a hash
      const streamMap = _.mapKeys(action.payload, "id");
      return { ...state, ...streamMap };
    case DELETE_STREAM:
      //payload in this case is just the id
      return _.omit(state, action.playload);
    default:
      return state;
  }
};
