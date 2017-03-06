import * as actions from '../actions';

const initialState = {
  isFetching: false,
  validToken: null,
  token: null,
  data: []
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
    case actions.PARSE_DATA:
      return {...state,
        data: action.data
      }
    default:
      return state;
  }
}