import * as types from "../actions/actionTypes";

const initalState = {
  color: [255, 255, 255]
};

export default function ui(state = initalState, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      };
    default:
      return state;
  }
}
