// actions.ts

import { fetchData } from "../../services/rest_api";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataFromApi = () => async (dispatch: any, getState: any) => {
  dispatch({
    type: FETCH_DATA_REQUEST,
  });

  try {
    const response = await fetchData();
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};
