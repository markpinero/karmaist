import * as actions from '../actions';
import { initialState } from './initialState';

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.SENDING_REQUEST:
      return {
        ...state,
        sendingRequest: action.sending
      };
    // case actions.PARSE_ACTIVITY:
    //   return {
    //     ...state,
    //     data: {
    //       activity: action.data
    //     }
    //   };
    default:
      return state;
  }
}
