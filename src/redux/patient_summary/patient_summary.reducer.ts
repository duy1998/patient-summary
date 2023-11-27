import { ApiStatus } from "./../common/DataState";
// reducers.ts

import { RESULT_TAB_1 } from "src/ui/patient_summary/constants";
import {
  FETCH_MEDICAL_RECORDS_REQUEST,
  FETCH_MEDICAL_RECORDS_SUCCESS,
  FETCH_MEDICAL_RECORDS_FAILURE,
  CHANGE_RESULT_TAB,
  FETCH_RESULTS_FAILURE,
  FETCH_RESULTS_REQUEST,
  FETCH_RESULTS_SUCCESS,
} from "./patient_summary.action";
import { PatientSummaryState } from "./patient_summary.state";

const initialState: PatientSummaryState = {
  patientInfo: null,
  medicalRecords: null,
  selectedResultTabs: null,
  results: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEDICAL_RECORDS_REQUEST:
      return {
        ...state,
        medicalRecords: { status: ApiStatus.LOADING, error: null },
      };
    case FETCH_MEDICAL_RECORDS_SUCCESS:
      return {
        ...state,
        medicalRecords: {
          status: ApiStatus.SUCCESS,
          data: action.payload.medicalRecords,
        },
        patientInfo: {
          status: ApiStatus.SUCCESS,
          data: action.payload.patientInfo,
        },
      };
    case FETCH_MEDICAL_RECORDS_FAILURE:
      return {
        ...state,
        medicalRecords: { status: ApiStatus.ERROR },
        patientInfo: { status: ApiStatus.ERROR },
      };

    case FETCH_RESULTS_REQUEST:
      return { ...state, results: { status: ApiStatus.LOADING, error: null } };
    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: { status: ApiStatus.SUCCESS, data: action.payload },
        selectedResultTabs: RESULT_TAB_1,
      };
    case FETCH_RESULTS_FAILURE:
      return {
        ...state,
        results: { status: ApiStatus.ERROR, error: action.payload },
      };
    case CHANGE_RESULT_TAB:
      return {
        ...state,
        selectedResultTabs: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
