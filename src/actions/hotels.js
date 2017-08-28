import axios from "axios";

import {
  LOAD_HOTELS,
  LOAD_HOTELS_SUCCESS,
  LOAD_HOTELS_FAIL,
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
