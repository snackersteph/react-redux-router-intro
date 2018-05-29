// @flow

import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

// a thunk is essentially a function that returns a value that is determined at runtime
// a way to handle async functions

export function addAPIData(apiData: Show) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(imdbID: string) {
  return (dispatch: Function) => {
    axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => {
      dispatch(addAPIData(response.data));
    })
    .catch(error => {
      console.log('axios error', error); // eslint-disable-line no-console
    });
  };
}