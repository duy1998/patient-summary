import { RESULT_TAB_1 } from "./../../ui/patient_summary/constants";
import { ApiStatus } from "./../common/DataState";
import { PatientSummaryData } from "./patient_summary.state";
// actions.ts

import { fetchData } from "../../services/rest_api";
import { fakeData } from "./data";

export const FETCH_PATIENT_SUMMARY_REQUEST = "FETCH_PATIENT_SUMMARY_REQUEST";
export const FETCH_PATIENT_SUMMARY_SUCCESS = "FETCH_PATIENT_SUMMARY_SUCCESS";
export const FETCH_PATIENT_SUMMARY_FAILURE = "FETCH_PATIENT_SUMMARY_FAILURE";

export const FETCH_MEDICAL_RECORDS_REQUEST = "FETCH_MEDICAL_RECORDS_REQUEST";
export const FETCH_MEDICAL_RECORDS_SUCCESS = "FETCH_MEDICAL_RECORDS_SUCCESS";
export const FETCH_MEDICAL_RECORDS_FAILURE = "FETCH_MEDICAL_RECORDS_FAILURE";

export const FETCH_RESULTS_SUCCESS = "FETCH_RESULTS_SUCCESS";

export const CHANGE_RESULT_TAB = "CHANGE_RESULT_TAB";

export const fetchPatientSummaryAction =
  () => async (dispatch: any, getState: any) => {
    dispatch({
      type: FETCH_PATIENT_SUMMARY_REQUEST,
    });

    try {
      const response = await fetchData();
      const data = response.data as any;
      dispatch({
        type: FETCH_PATIENT_SUMMARY_SUCCESS,
        payload: {
          patientInfo: data.person,
          medicalRecords: data.visits,
          drugOrders: data.drugOrders,
          labOrders: data.labOrders,
          procedureOrders: data.procedureOrders,
          imagingDiagnosisOrders: data.imagingDiagnosisOrders,
          // selectedResultTabs: RESULT_TAB_1,
          // results: {
          //   RESULT_TAB_1: data.labOrders,
          //   RESULT_TAB_2: data.imagingDiagnosisOrders,
          //   RESULT_TAB_3: data.procedureOrders,
          //   RESULT_TAB_4: data.drugOrders?.visitDrugOrders ?? [],
          // },
        },
      });
    } catch (error: any) {
      dispatch({
        type: FETCH_PATIENT_SUMMARY_FAILURE,
        payload: error.message,
      });
    }
  };

export const getResultsByMedicalRecordAction =
  (uuid: string | undefined) => async (dispatch: any, getState: any) => {
    try {
      if (
        uuid &&
        getState().patientSummaryReducer.patientSummaryData.status ===
          ApiStatus.SUCCESS
      ) {
        const patientSummaryData = getState().patientSummaryReducer
          .patientSummaryData.data as PatientSummaryData;
        if (!patientSummaryData) return;
        dispatch({
          type: FETCH_RESULTS_SUCCESS,
          payload: {
            RESULT_TAB_1: patientSummaryData.labOrders,
            RESULT_TAB_2: patientSummaryData.imagingDiagnosisOrders,
            RESULT_TAB_3: patientSummaryData.procedureOrders,
            RESULT_TAB_4: patientSummaryData.drugOrders?.visitDrugOrders ?? [],
          },
        });
      }
    } catch (error: any) {}
  };

export const changeResultTabAction = (tabId: string) => ({
  type: CHANGE_RESULT_TAB,
  payload: tabId,
});
