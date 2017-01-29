import * as actions from './Actions';

const initialState = {}

export default (state = initialState, action) => {
  if(action.type === actions.LOGIN_API) {
    window.location = 'https://todoist.com/oauth/authorize?client_id=9f76fb38a227416ea00df4d7e46784a8&scope=data:read&state=helloworld';
  }
  return state;
}