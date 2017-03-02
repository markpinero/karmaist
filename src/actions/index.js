import fetch from 'isomorphic-fetch';

export const SET_TOKEN = 'SET_TOKEN';
export const INVALIDATE_TOKEN = 'INVALIDATE_TOKEN';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})

export const invalidateToken = (token) => ({
  type: INVALIDATE_TOKEN,
  token
})

export const requestData = (token) => ({
  type: requestData,
  token
})

function receiveData(json) {
  return {
    type: RECEIVE_DATA,
    json
  }
}

function fetchData(token) {
  return dispatch => {
    dispatch(requestData(token))
    return fetch(`https://todoist.com/API/v7/completed/get_stats&${token}`)
      .then(response => {
        if(!response.ok) {
          let error = new Error(response.statusText);
          error.response = error;
          throw error;
        }
      })
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}