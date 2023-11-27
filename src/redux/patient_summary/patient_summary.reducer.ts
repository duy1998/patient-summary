import { ApiStatus } from "./../common/DataState";
// reducers.ts

import { RESULT_TAB_1 } from "src/ui/patient_summary/constants";
import {
  CHANGE_RESULT_TAB,
  FETCH_RESULTS_SUCCESS,
  FETCH_PATIENT_SUMMARY_FAILURE,
  FETCH_PATIENT_SUMMARY_REQUEST,
  FETCH_PATIENT_SUMMARY_SUCCESS,
} from "./patient_summary.action";
import { PatientSummaryState } from "./patient_summary.state";

const initialState: PatientSummaryState = {
  patientSummaryData: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENT_SUMMARY_REQUEST:
      return {
        ...state,
        patientSummaryData: { status: ApiStatus.LOADING, error: null },
      };
    case FETCH_PATIENT_SUMMARY_SUCCESS:
      return {
        ...state,
        patientSummaryData: {
          status: ApiStatus.SUCCESS,
          data: action.payload,
        },
      };
    case FETCH_PATIENT_SUMMARY_FAILURE:
      return {
        ...state,
        patientSummaryData: { status: ApiStatus.ERROR },
      };

    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        patientSummaryData: {
          ...state.patientSummaryData,
          data: {
            ...state.patientSummaryData?.data,
            selectedResultTabs: RESULT_TAB_1,
            results: action.payload,
          },
        },
      };
    case CHANGE_RESULT_TAB:
      return {
        ...state,
        patientSummaryData: {
          ...state.patientSummaryData,
          data: {
            ...state.patientSummaryData?.data,
            selectedResultTabs: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default dataReducer;
