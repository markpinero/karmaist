import * as actions from '../actions';
import { initialState } from './initialState';

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.SENDING_REQUEST:
      return {
        ...state,
        sendingRequest: action.sending
      };
    default:
      return state;
  }
}
