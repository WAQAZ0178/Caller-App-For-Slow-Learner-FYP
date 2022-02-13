import {actionType} from '../ActionTypes';
export const initialState = {
  io: {},
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_IO:
      return {
        ...state,
        io: action.payload,
      };
    default:
      return state;
  }
};
