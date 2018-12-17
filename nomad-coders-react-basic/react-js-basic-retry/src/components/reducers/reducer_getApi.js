import * as types from "../actions/actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    default:
      return state;
    case types.GET_API:
      return [...state, action.payload.data.data.movies];
  }
}
