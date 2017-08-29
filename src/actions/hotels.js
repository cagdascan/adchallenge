import axios from "axios";

import {
  LOAD_HOTELS,
  LOAD_HOTELS_SUCCESS,
  LOAD_HOTELS_FAIL,
  EXPAND_ELEMENT,
  COLLAPSE_ELEMENT,
  DELETE_ELEMENT,
  API_URL
} from "../constants";

export const fetchHotels = () => dispatch => {
  dispatch({
    type: LOAD_HOTELS
  });

  axios
    .get(API_URL)
    .then(response => {
      dispatch(fetchHotelsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchHotelsError(error));
    });
};

const fetchHotelsSuccess = data => ({
  type: LOAD_HOTELS_SUCCESS,
  data
});

const fetchHotelsError = error => ({
  type: LOAD_HOTELS_FAIL,
  error
});

export const expandElement = (id) => dispatch => {
  dispatch({
    type: EXPAND_ELEMENT,
    id
  });
};

export const collapseElement = (id) => dispatch => {
  dispatch({
    type: COLLAPSE_ELEMENT,
    id
  });
};

export const deleteElement = (id) => dispatch => {
  dispatch({
    type: DELETE_ELEMENT,
    id
  });
};
