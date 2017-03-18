/* eslint-disable */
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import moment from 'moment';

export const SENDING_REQUEST = 'SENDING_REQUEST';
export const REQUEST_DATA = 'REQUEST_DATA';
export const PARSE_COMPLETED = 'PARSE_COMPLETED';
export const PARSE_ACTIVITY = 'PARSE_ACTIVITY';

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

// export const requestData = token => ({
//   type: 'REQUEST_DATA',
//   token
// });
//
// export const parseCompleted = data => ({
//   type: 'PARSE_COMPLETED',
//   data
// });
//
// export const parseActivity = data => ({
//   type: 'PARSE_ACTIVITY',
//   data
// });
//
// export function fetchData(token) {
//   return dispatch => {
//     fetch(
//       `https://todoist.com/API/v7/completed/get_stats?token=${token}&limit=1`
//     )
//       .then(response => response.json())
//       .then(response => {
//         dispatch(fetchActivity(token));
//       })
//       // .then(() => {
//       //   browserHistory.push('/dashboard');
//       //   console.log('/dashboard');
//       // })
//       .catch(error => {
//         console.log(`${error} (Invalidate Token)`);
//       });
//   };
// }
//
// const fetchAllData = token => {
//   return dispatch => {
//     fetch(`https://todoist.com/API/v7/completed/get_stats?token=${token}`)
//       .then(response => response.json())
//       .then(response => {
//         let completed = {
//           dates: [],
//           total_completed: [],
//           bestDay: null
//         };
//
//         _.eachRight(response.days_items, (value, key) => {
//           completed.dates.push(moment(value.date).format('dddd'));
//           completed.total_completed.push(value.total_completed);
//         });
//
//         dispatch(parseCompleted(completed));
//       });
//   };
// };
//
// const fetchActivity = token => {
//   console.log('fetchActivity()');
//   return dispatch => {
//     fetch(`https://todoist.com/API/v7/activity/get?token=${token}&limit=100`)
//       .then(response => response.json())
//       .then(response => {
//         // console.log(response);
//
//         let activityAdded = _(response)
//           .filter(['event_type', 'added'])
//           .sortBy('event_date')
//           .value();
//
//         let activityCompleted = _(response)
//           .filter(['event_type', 'completed'])
//           .sortBy('event_date')
//           .value();
//
//         let activityUpdated = _(response)
//           .filter(['event_type', 'updated'])
//           .sortBy('event_date')
//           .value();
//
//         console.log(activityAdded);
//         console.log(activityCompleted);
//         console.log(activityUpdated);
//         // dispatch(parseActivity(activity));
//       });
//   };
// };
