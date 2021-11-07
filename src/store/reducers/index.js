import {actionType} from '../ActionTypes';
export const initialState = {
  token_data: {},
  user_info: {},
  all_users: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_INITIAL_STATE:
      return {
        ...initialState,
      };
    case actionType.SET_USER_INFO:
      return {
        ...state,
        user_info: action.payload,
      };
    case actionType.SET_TOKEN:
      return {
        ...state,
        token_data: action.payload,
      };
    case actionType.SET_ALL_USERS:
      return {
        ...state,
        all_users: action.payload,
      };
    default:
      return state;
  }
};
