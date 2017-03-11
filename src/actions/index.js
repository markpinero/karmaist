/* eslint-disable */
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import moment from 'moment';

export const SET_TOKEN = 'SET_TOKEN';
export const INVALIDATE_TOKEN = 'INVALIDATE_TOKEN';
export const REQUEST_DATA = 'REQUEST_DATA';
export const PARSE_COMPLETED = 'PARSE_COMPLETED';
export const PARSE_ACTIVITY = 'PARSE_ACTIVITY';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
});

export const invalidateToken = {
  type: 'INVALIDATE_TOKEN'
};

export const requestData = (token) => ({
  type: 'REQUEST_DATA',
  token
});

export const parseCompleted = (data) => ({
  type: 'PARSE_COMPLETED',
  data
});

export const parseActivity = (data) => ({
  type: 'PARSE_ACTIVITY',
  data
});

export function fetchData(token) {
  return dispatch => {
    fetch(`https://todoist.com/API/v7/completed/get_stats?token=${token}&limit=1`)
      .then(response => response.json())
      .then(response => {
        dispatch(setToken(token));
        // dispatch(fetchAllData(token));
        dispatch(fetchActivity(token));
      })
      // .then(() => {
      //   browserHistory.push('/dashboard');
      //   console.log('/dashboard');
      // })
      .catch((error) => {
        console.log(`${error} (Invalidate Token)`);
        dispatch(invalidateToken)
      });
  }
}

const fetchAllData = (token) => {
  return dispatch => {
    fetch(`https://todoist.com/API/v7/completed/get_stats?token=${token}`)
      .then(response => response.json())
      .then(response => {
        let completed = {
            dates: [],
            total_completed: [],
            bestDay: null
        };

        _.eachRight(response.days_items, (value, key) => {
          completed.dates.push(moment(value.date).format('dddd'));
          completed.total_completed.push(value.total_completed);
        });

        dispatch(parseCompleted(completed));
      })
  }
}

const fetchActivity = (token) => {
  console.log('fetchActivity()');
  return dispatch => {
    fetch(`https://todoist.com/API/v7/activity/get?token=${token}&limit=100`)
    .then(response => response.json())
    .then(response => {
      // console.log(response);

      let activityAdded = _(response)
        .filter(['event_type', 'added'])
        .sortBy('event_date')
        .value();

      let activityCompleted = _(response)
        .filter(['event_type', 'completed'])
        .sortBy('event_date')
        .value();

      let activityUpdated = _(response)
        .filter(['event_type', 'updated'])
        .sortBy('event_date')
        .value();

      console.log(activityAdded);
      console.log(activityCompleted);
      console.log(activityUpdated);
      // dispatch(parseActivity(activity));
    })
  }
}