// actions.ts

import { fetchData } from "../../services/rest_api";

export const FETCH_MEDICAL_RECORDS_REQUEST = "FETCH_MEDICAL_RECORDS_REQUEST";
export const FETCH_MEDICAL_RECORDS_SUCCESS = "FETCH_MEDICAL_RECORDS_SUCCESS";
export const FETCH_MEDICAL_RECORDS_FAILURE = "FETCH_MEDICAL_RECORDS_FAILURE";

export const FETCH_RESULTS_REQUEST = "FETCH_RESULTS_REQUEST";
export const FETCH_RESULTS_SUCCESS = "FETCH_RESULTS_SUCCESS";
export const FETCH_RESULTS_FAILURE = "FETCH_RESULTS_FAILURE";

export const CHANGE_RESULT_TAB = "CHANGE_RESULT_TAB";

function createData(
  id: any,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { id, name, calories, fat, carbs, protein };
}

const fakeData = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(
    2,
    "Ice cream sandwichsdasdasd asd as das das d asd asd asdasd asa",
    237,
    9.0,
    37,
    4.3
  ),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(7, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(8, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(9, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(10, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(11, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(12, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(13, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(14, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(15, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(16, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(17, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(18, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(19, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(20, "Gingerbread", 356, 16.0, 49, 3.9),
];

export const fetchMedicalRecordsAction =
  () => async (dispatch: any, getState: any) => {
    dispatch({
      type: FETCH_MEDICAL_RECORDS_REQUEST,
    });

    try {
      const response = await fetchData();
      dispatch({
        type: FETCH_MEDICAL_RECORDS_SUCCESS,
        payload: fakeData,
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_MEDICAL_RECORDS_FAILURE,
        payload: error.message,
      });
    }
  };

export const fetchResultsAction =
  () => async (dispatch: any, getState: any) => {
    dispatch({
      type: FETCH_RESULTS_REQUEST,
    });

    try {
      const response = await fetchData();

      dispatch({
        type: FETCH_RESULTS_SUCCESS,
        payload: {
          RESULT_TAB_1: fakeData,
          RESULT_TAB_2: fakeData,
          RESULT_TAB_3: fakeData,
          RESULT_TAB_4: fakeData,
        },
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_RESULTS_FAILURE,
        payload: error.message,
      });
    }
  };

export const changeResultTabAction = (tabId: string) => ({
  type: CHANGE_RESULT_TAB,
  payload: tabId,
});
