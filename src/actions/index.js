export const SENDING_REQUEST = 'SENDING_REQUEST';

export const sendingRequest = sending => ({
  type: 'SENDING_REQUEST',
  sending
});

export function handleLogin() {
  return dispatch => {
    dispatch(sendingRequest(true));
    return fetch('/auth/todoist');
  };
}
