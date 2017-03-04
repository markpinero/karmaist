/* eslint-disable */
import fetch from 'isomorphic-fetch';

export const SET_TOKEN = 'SET_TOKEN';
export const INVALIDATE_TOKEN = 'INVALIDATE_TOKEN';
export const REQUEST_DATA = 'REQUEST_DATA';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
})

export const requestData = (token) => ({
  type: 'REQUEST_DATA',
  token
})

export const invalidateToken = {
  type: 'INVALIDATE_TOKEN'
}

export function fetchData(token) {
  return dispatch => {
    fetch(`https://todoist.com/API/v7/completed/get_stats?token=${token}&limit=1`)
      .then(response => response.json())
      .then(response => {
        dispatch(setToken(token));
        fetchOtherData(token);
      })
      .catch((error) => {
        console.log(error, 'testesafds');
        dispatch(invalidateToken)
      })
  }
}

function fetchOtherData(token) {
  console.log('Run fetchOtherData()'); 
}