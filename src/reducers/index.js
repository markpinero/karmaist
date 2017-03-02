import * as actions from '../actions';

const initialState = {
  validToken: false,
  token: null
}

export default (state = initialState, action) => {
  if(action.type === actions.SET_TOKEN) {
    let validToken = false;
    let token;

    if(action.token === 'test') {
      validToken = true;
      token = action.token;
    }

    return { ...state,
      validToken: validToken,
      token: token
    }
  }
  return state;
}