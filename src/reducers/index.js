import * as actions from '../actions';

const initialState = {
  isFetching: false,
  validToken: null,
  token: null
}

export default function reducers(state = initialState, action) {

  switch (action.type) {
    case actions.INVALIDATE_TOKEN:
      return { ...state,
        validToken: false
      }
    case actions.SET_TOKEN:
      return { ...state,
        validToken: true,
        token: action.token
      }
    default:
      return state;
  }
}