import { RESET_ERROR_MESSAGE } from './../actions/types';

const initial_state = {
  message: ''
};
export function errorReducer(state = initial_state, action) {
  switch (action.type) {
    case RESET_ERROR_MESSAGE:
      // action.payload contains error object
      return {
        ...state,
        message: action.payload.error
      };

    default:
      return state;
  }
}
