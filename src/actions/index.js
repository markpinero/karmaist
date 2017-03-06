/* eslint-disable */
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import moment from 'moment';

export const SET_TOKEN = 'SET_TOKEN';
export const INVALIDATE_TOKEN = 'INVALIDATE_TOKEN';
export const REQUEST_DATA = 'REQUEST_DATA';
export const PARSE_DATA = 'PARSE_DATA';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
})

export const invalidateToken = {
  type: 'INVALIDATE_TOKEN'
}

export const requestData = (token) => ({
  type: 'REQUEST_DATA',
  token
})

export const parseData = (data) => ({
  type: 'PARSE_DATA',
  data
})

export function fetchData(token) {
  return dispatch => {
    fetch(`https://todoist.com/API/v7/completed/get_stats?token=${token}&limit=1`)
      .then(response => response.json())
      .then(response => {
        console.log('Set Token');
        dispatch(setToken(token));
        dispatch(fetchAllData(token));
      })
      .then(() => { browserHistory.push('/dashboard') })
      .catch((error) => {
        console.log(error, 'Invalidate Token');
        dispatch(invalidateToken)
      })
  }
}

const fetchAllData = (token) => {
  console.log('fetchAllData()');
  return dispatch => {
    fetch(`https://todoist.com/API/v7/completed/get_stats?token=${token}`)
      .then(response => response.json())
      .then(response => {
        let weeksCompleted = {
          dates: [],
          total_completed: []
        };

        _.eachRight(response.days_items, (value, key) => {
          weeksCompleted.dates.push(moment(value.date).format('dddd'));
          weeksCompleted.total_completed.push(value.total_completed);
        })

        dispatch(parseData(weeksCompleted));
      })
  }
}